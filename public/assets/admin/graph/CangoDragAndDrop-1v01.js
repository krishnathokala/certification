/*============================================================
  Filename: CangoDragAndDrop-1v01.js
  Rev 1
  By: A.R.Collins

  Description: Adds Drag and Drop handlers for Cango
  graphics.

  License: Released into the public domain
  latest version at
  <http://www/arc.id.au/>

  Date    Description                                    |By
  -----------------------------------------------------------
  25Jul14 First release split off from Cango 5v16         ARC
  19Sep14 Reuse objects don't make new and depend on GC   ARC
 ============================================================*/

Cango = (function(CangoCore)
{
  "use strict";

  function DnD(grabFn, dragFn, dropFn)
  {
    var savThis = this,
        nLrs, topCvs;

    this.cgo = null;                 // grahics context used, updated at render
    this.layer = null;    // layer Obj that DnD is working on, updated at render
    this.parent = null;
    this.grabCallback = grabFn || null;
    this.dragCallback = dragFn || null;
    this.dropCallback = dropFn || null;
    this.dwgOrg = {x:0, y:0};           // parent (Cobj) drawing origin in world coords
    this.grabOfs = {x:0, y:0};          // csr offset from parent (Cobj) drawing origin

    this.grab = function(evt)
    {
      var event = evt||window.event,
          csrPosWC;

      // calc top canvas at grab time since layers can come and go
      nLrs = this.cgo.bkgCanvas.layers.length,
      topCvs = this.cgo.bkgCanvas.layers[nLrs-1].cElem;
      this.dwgOrg = this.parent.dwgOrg;

      topCvs.onmouseup = function(e){savThis.drop(e);};
      topCvs.onmouseout = function(e){savThis.drop(e);};
      csrPosWC = this.cgo.getCursorPosWC(event);      // update mouse pos to pass to the owner
      // copy the parent drawing origin (for convenience)
      this.grabOfs.x = csrPosWC.x - this.dwgOrg.x;
      this.grabOfs.y = csrPosWC.y - this.dwgOrg.y;

      if (this.grabCallback)
      {
        this.grabCallback(csrPosWC);    // call in the scope of dragNdrop object
      }
      topCvs.onmousemove = function(e){savThis.drag(e);};
      if (event.preventDefault)       // prevent default browser action (W3C)
      {
        event.preventDefault();
      }
      else                        // shortcut for stopping the browser action in IE
      {
        window.event.returnValue = false;
      }
      return false;
    };

    this.drag = function(event)
    {
      var csrPosWC = this.cgo.getCursorPosWC(event);  // update mouse pos to pass to the owner
      if (this.dragCallback)
      {
        this.dragCallback(csrPosWC);
      }
    };

    this.drop = function(event)
    {
      var csrPosWC = this.cgo.getCursorPosWC(event);  // update mouse pos to pass to the owner
      topCvs.onmouseup = null;
      topCvs.onmouseout = null;
      topCvs.onmousemove = null;
      if (this.dropCallback)
      {
        this.dropCallback(csrPosWC);
      }
    };

    // version of drop that can be called from an app to stop a drag before the mouseup event
    this.cancelDrag = function(mousePos)
    {
      topCvs.onmouseup = null;
      topCvs.onmouseout = null;
      topCvs.onmousemove = null;
      if (this.dropCallback)
      {
        this.dropCallback(mousePos);
      }
    }
  }

  function initDragAndDrop(savThis)
  {
    function dragHandler(evt)
    {
      var event = evt || window.event,
          csrPosX, csrPosY,
          testObj, nLyrs, lyr,
          j, k;

      function updateCursorPos(e)
      {
        // pass in any mouse event, returns the position of the cursor in raw pixel coords
        var rect = savThis.cnvs.getBoundingClientRect();

        csrPosX = e.clientX - rect.left;
        csrPosY = e.clientY - rect.top;
      }

      function hitTest(pathObj)
      {
        var i;
        // create the path (don't stroke it - no-one will see) to test for hit
        savThis.ctx.beginPath();
        if ((pathObj.type == 'TEXT')||(pathObj.type == 'IMG'))   // use bounding box not drawCmds
        {
          for (i=0; i<pathObj.bBoxCmds.length; i++)
          {
            savThis.ctx[pathObj.bBoxCmds[i].drawFn].apply(savThis.ctx, pathObj.bBoxCmds[i].parmsPx);
          }
        }
        else
        {
          for (i=0; i<pathObj.drawCmds.length; i++)
          {
            savThis.ctx[pathObj.drawCmds[i].drawFn].apply(savThis.ctx, pathObj.drawCmds[i].parmsPx);
          }
        }
/*
    // for diagnostics on hit region, uncomment
    savThis.ctx.strokeStyle = 'red';
    savThis.ctx.lineWidth = 4;
    savThis.ctx.stroke();
*/
        return savThis.ctx.isPointInPath(csrPosX, csrPosY);
      }

      updateCursorPos(event);
      nLyrs = savThis.bkgCanvas.layers.length;   // savThis is any Cango ctx on the canvas
      // run through all the registered objects and test if cursor pos is in their path
      loops:      // label to break out of nested loops
      for (j = nLyrs-1; j >= 0; j--)       // search top layer down the stack
      {
        lyr = savThis.bkgCanvas.layers[j];
        for (k = lyr.dragObjects.length-1; k >= 0; k--)  // search from last drawn to first (underneath)
        {
          testObj = lyr.dragObjects[k];
          if (hitTest(testObj))
          {
            // call the grab handler for this object (check it is still enabled)
            if (testObj.dragNdrop)
            {
              testObj.dragNdrop.grab(event);
              break loops;
            }
          }
        }
      }
    }

    // =========== Start Here ===========

    savThis.cnvs.onmousedown = dragHandler;   // added to all layers but only top layer will catch events
  }

  Cobj.prototype.enableDrag = function(grabFn, dragFn, dropFn)
  {
    // the DnD has the cango context saved as 'this.cgo'

    this.dragNdrop = new DnD(grabFn, dragFn, dropFn);
    // fill in the DnD properties for use by callBacks
    this.dragNdrop.parent = this;
  };

  Cobj.prototype.disableDrag = function()
  {
    var aidx;

    if (!this.dragNdrop)
    {
      return;
    }
    // remove this object from array to be checked on mousedown
    // the DnD has the cango context saved as 'this.cgo'
    aidx = this.dragNdrop.layer.dragObjects.indexOf(this);
    this.dragNdrop.layers.dragObjects.splice(aidx, 1);
    this.dragNdrop = null;
  };

  var oldInit = CangoCore.prototype.initModules;   // function pointer

  CangoCore.prototype.initModules = function()
  {
    oldInit();
    initDragAndDrop(this);
  }

  return CangoCore;    // return the augmented Cango object, over-writing the existing

}(Cango));    // Take the existing Cango object and add Axes drawing methods
