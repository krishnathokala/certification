			function s4() {
				return Math.floor((1 + Math.random()) * 0x10000)
				.toString(16)
				.substring(1);
			};
			
			function guid() {
				return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
				s4() + '-' + s4() + s4() + s4();
			}
			
			
				var noofids=5;
				var idis=1;//tells the id.
				
				$(document).ready(function() {
					var windowWidth = (parseInt($(window).width()));
					var windowwidth_4times=windowWidth*5+210;
					$('#id0').css({'width':windowwidth_4times});
					$('#id1').css({'width':windowWidth});
					$('#id2').css({'width':windowWidth});
					$('#id3').css({'width':windowWidth});
					$('#id4').css({'width':windowWidth});
					$('#id5').css({'width':windowWidth});
					
					location.hash="#id1";
					function filterPath(string) {
						return string
						.replace(/^\//,'')
						.replace(/(index|default).[a-zA-Z]{3,4}$/,'')
						.replace(/\/$/,'');
					}
					var locationPath = filterPath(location.pathname);
					var scrollElem = scrollableElement('html', 'body');
					
					$('a[href*=#]').each(function() {
						var thisPath = filterPath(this.pathname) || locationPath;
						if (  locationPath == thisPath
							&& (location.hostname == this.hostname || !this.hostname)
							&& this.hash.replace(/#/,'') ) {
							var $target = $(this.hash), target = this.hash;
						if (target) {
							var targetOffset = $target.offset().left;
							$(this).click(function(event) {
								event.preventDefault();
								$(scrollElem).animate({scrollLeft: targetOffset}, 400, function() {
									location.hash = target;
									if(target=="#id1"){
										idis=1;
									}
									else if(target=="#id2"){
										idis=2;
									}
									else if(target=="#id3"){
										idis=3;
									}
									else if(target=="#id4"){
										idis=4;
									}
									else if(target=="#id5"){
										idis=5;
									}
								});
							});
						}
					}
				});
					
						// use the first element that is "scrollable"
						function scrollableElement(els) {
							for (var i = 0, argLength = arguments.length; i <argLength; i++) {
								var el = arguments[i],
								$scrollElement = $(el);
								if ($scrollElement.scrollLeft()> 0) {
									return el;
									
								} else {
									$scrollElement.scrollLeft(1);
									var isScrollable = $scrollElement.scrollLeft()> 0;
									$scrollElement.scrollLeft(0);
									if (isScrollable) {
										return el;
										
									}
								}
							}
							//return []; //this is what it actually was
							return el;//this was initially empty
							
						}

						var idsoff=new Array();;
						for (var i = 0; i < noofids; i++) {
							idsoff[i]=$(document.getElementById('id'+(i+1))).offset().left;
						};
						location.hash="#id1";
						idis=1;
						var targetOffset=0;
						
						var wait=0;
						$(document).keydown(function(e){
							
							if(wait==0){
								wait=1;
								if(e.keyCode==37 || e.keyCode==39){
									e.preventDefault();
								}
								else{
									wait=0;
									return ;
								}
								if (e.keyCode == 37 && idis==1) {//left
									wait=0;
								}
								else if(e.keyCode == 37){
									var target="#id";
									idis--;
									targetOffset=idsoff[idis-1];
									$(scrollElem).animate({scrollLeft: targetOffset}, 400, function() {
										wait=0;
									});
								}
								else if (e.keyCode == 39 && idis==noofids) {//right
									wait=0;
								}
								else if(e.keyCode == 39){
									var target="#id";
									idis++;
									targetOffset=idsoff[idis-1];
									$(scrollElem).animate({scrollLeft: targetOffset}, 400, function() {
										wait=0;         
									});
								}
								else{
									wait=0;
									return;
								}
							}
							
							
						});
						
						
					});
			
			
			

						var varq=new Array();
			varq[0]='1';//azimuth
			varq[1]='0';//wwr fixed or var
			varq[2]='1';//wwr diff for each wall
			varq[3]='0'//overhang depth fixed or var
			varq[4]='1';//Aspect Ratio fixed or var
			varq[5]='1';//Glass type always var
			

					//this function is for checking if the checkbox for diff wwr's for each wall is checked or not
					function changediffwwr(){
						var checkbox = document.getElementById("diff_wwr");
						if(checkbox.checked){
							varq[2]='1';
							//alert("checked"+varq[2]);
						}
						else{
							varq[2]='0';
							//alert("unchecking"+varq[2]);
						}
					};
					//this function is for hiding various divs once a click on fixed or variable option has been clicked
					function hide(n)
					{
						
						if(n=='1')
						{
							varq[0]='1';
							var a=document.getElementById('azifixed');
							a.style.display="none";
							a=document.getElementById('azivariable');
							a.style.display="block";
						}
						else if(n=='2'){
							varq[0]='0';
							var a=document.getElementById('azivariable');
							a.style.display="none";
							a=document.getElementById("azifixed");
							a.style.display="block";
						}
						else if(n=='3'){
							varq[1]='1';
							var a=document.getElementById('wwrfixed');
							a.style.display="none";
							a=document.getElementById('wwrvariable');
							a.style.display="block";
						}
						else if(n=='4'){
							varq[1]='0';
							var a=document.getElementById('wwrvariable');
							a.style.display="none";
							a=document.getElementById("wwrfixed");
							a.style.display="block";
						}
						else if(n=='5'){
							varq[3]='1';
							var a=document.getElementById('depthfixed');
							a.style.display="none";
							a=document.getElementById('depthvariable');
							a.style.display="block";
						}
						else if(n=='6'){
							varq[3]='0';
							var a=document.getElementById('depthvariable');
							a.style.display="none";
							a=document.getElementById("depthfixed");
							a.style.display="block";
						}
						else if(n=='7'){
							varq[4]='1';
							var a=document.getElementById('lbybratiofixed');
							a.style.display="none";
							a=document.getElementById('lbybratiovariable');
							a.style.display="block";
						}
						else if(n=='8'){
							varq[4]='0';
							var a=document.getElementById('lbybratiovariable');
							a.style.display="none";
							a=document.getElementById("lbybratiofixed");
							a.style.display="block";
						}
					}
					/*----------------- this function is to validate the form -------------------*/
					
					function validateForm(){
						var flag=0;//the flag makes sure that aleast on of the three parameters is a variable (out of azimuth, wwr and depth)
						var radios = document.getElementsByTagName('input');//stores all the tags with name input
						var value;//used to store temporary values
						var ini1=10;
						var ini2=10;
						var ini3=10;
						for (var i = 0; i < radios.length; i++) {
							if(radios[i].name==='total_length')
							{
								ini1=radios[i].value;
								ini1=Number(ini1);
							}
							if(radios[i].name==='total_breadth')
							{
								ini2=radios[i].value;
								ini2=Number(ini2);
							}
							if(radios[i].name==='total_area')
							{
								ini3=radios[i].value;
								ini3=Number(ini3);
							}
							if(ini1 <= 0)
							{
								alert("length should be greater than 0");
								return false;
							}
							if(ini2 <= 0)
							{
								alert("breadth should be greater than 0");
								return false;
							}
							if(ini3 <= 0)
							{
								alert("area should be greater than 0");
								return false;
							}
							
							
							
							if (radios[i].type === 'radio' && radios[i].checked) {
									// get value, set checked flag or do whatever you need to
									value = radios[i].value;
									//alert(radios[i].name+value);
									
									//azimuth limitations
									if(radios[i].name==="azi_var_fix" && value==="variable"){
										flag=1;//set to 1 to tell that one variable quatity is found
										var div = document.getElementById('azivariable').getElementsByTagName('input');
										var k;
										var ini=0;
										var max=0;
										var min=0;
										for (k=0;k<div.length;k++)
										{
											
											var errorname=null;
						
				
											if(div[k].name==="azi_ini_value"){
												errorname="Initial azimuth value";
												ini=div[k].value;
												ini=Number(ini);
												//alert(ini);
											}
											if(div[k].name==="azi_min_value"){
												errorname="Minimum azimuth value";
												min=div[k].value;
												min=Number(min);
											}
											if(div[k].name==="azi_max_value"){
												errorname="Maximum azimuth value";
												max=div[k].value;
												max=Number(max);
											}
											//values cannot be null
											if(div[k].value===''|| div[k].value===null){
												alert(errorname+" is left unfilled");
												return false;
											}
											//min and maximum constraints for all values
											else if(div[k].value<0){
												alert(errorname+" less than 0 is not possible");
												return false;
											}
											else if(div[k].value>360){
												alert(errorname+" greater than 360 is not possible");
												return false;
											}
										}
										//sees that ini is between min and max (both including)
										if(min<=ini && ini<=max);
										else{
											alert("initial value of azimuth should be between minimun and maximum");
											return false;
										}
										//if any of the above conditions are not false is sent to describe the first flaw that is found and sequencially all flaws are eliminated.
										
									}
									else if(radios[i].name==="azi_var_fix" && value==="fixed"){
										var div = document.getElementById('azifixed').getElementsByTagName('input');
										var k;
										for (k=0;k<div.length;k++)
										{
											if(div[k].value===''|| div[k].value===null){
												alert("Azimuth value is left unfilled");
												return false;
											}
											else if(div[k].value<0){
												alert("Negative value of azimuth is not possible");
												return false;
											}
											else if(div[k].value>360){
												alert("Azimuth value greater than 360 is not possible");
												return false;
											}
										}
										
									}
									
									//wwr limitations
									if(radios[i].name==="wwr_var_fix" && value==="variable"){
										flag=1;
										var div = document.getElementById('wwrvariable').getElementsByTagName('input');
										var k;
										var ini=0;
										var max=0;
										var min=0;
										for (k=0;k<div.length;k++)
										{
											var errorname=null;
											if(div[k].name==="wwr_ini_value"){
												errorname="Initial WWR value";
												ini=div[k].value;
												ini=Number(ini);
												
											}
											if(div[k].name==="wwr_min_value"){
												errorname="Minimum WWR value";
												min=div[k].value;
												min=Number(min);
											}
											if(div[k].name==="wwr_max_value"){
												errorname="Maximum WWR value";
												max=div[k].value;
												max=Number(max);
											}
											if(div[k].value===''|| div[k].value===null){
												alert(errorname+" is left unfilled");
												return false;
											}
											else if(div[k].value<0){
												alert(errorname+" less than 0 is  not possible");
												return false;
											}
										}
										//sets constraints for min,max and initial values of the parameter to be in range of 10 and 90
										if(min<10 || min>90){
											alert("Minimum WWR value should be between 10 and 90");
											return false;
										}
										if(max<10 || max>90){
											alert("Maximum WWR value should be between 10 and 90");
											return false;
										}
										if(ini<10 || ini>90){
											alert("Initial WWR value should be between 10 and 90");
											return false;
										}
										if(min<=ini && ini<=max);
										else{
											alert("Initial WWR value should be between minimun and maximum");
											return false;
										}
										
									}
									else if(radios[i].name==="wwr_var_fix" && value==="fixed"){
										var div = document.getElementById('wwrfixed').getElementsByTagName('input');
										var k;
										for (k=0;k<div.length;k++)
										{
											if(div[k].value===''|| div[k].value===null){
												alert("WWR value is left unfilled");
												return false;
											}
											else if(div[k].value<10){
												alert("WWR value cannot be less than 10");
												return false;
											}
											else if(div[k].value>90){
												alert("WWR value cannot be more than 90");
												return false;
											}
										}
										
									}
									
									//overhang depth limitations
									if(radios[i].name==="depth_var_fix" && value==="variable"){
										flag=1;
										var div = document.getElementById('depthvariable').getElementsByTagName('input');
										var k;
										var ini=0;
										var max=0;
										var min=0;
										for (k=0;k<div.length;k++)
										{
											var errorname=null;
											if(div[k].name==="depth_ini_value"){
												errorname="Initial depth value";
												ini=div[k].value;
												ini=Number(ini);
											}
											if(div[k].name==="depth_min_value"){
												errorname="Minimum depth value";
												min=div[k].value;
												min=Number(min);
											}
											if(div[k].name==="depth_max_value"){
												errorname="Maximum depth value";
												max=div[k].value;
												max=Number(max);
											}
											if(div[k].value===''|| div[k].value===null){
												alert(errorname+" is left unfilled");
												return false;
											}
											else if(div[k].value<0){
												alert(errorname+" less than zero not possible");
												return false;
											}
										}
										//sets the constraints for the min,max and ini values to be in range of 0.1 and 3
										if(min<0.1 || min>3){
											alert("Minimum depth value should be between 0.1 and 3");
											return false;
										}
										if(max<0.1 || max>3){
											alert("Maximum depth value should be between 0.1 and 3");
											return false;
										}
										if(ini<0.1 || ini>3){
											alert("Initial depth value should be between 0.1 and 3");
											return false;
										}
										if(min<=ini && ini<=max);
										else{
											alert("initial value of depth should be between minimun and maximum");
											return false;
										}
										
									}
									else if(radios[i].name==="depth_var_fix" && value==="fixed"){
										var div = document.getElementById('depthfixed').getElementsByTagName('input');
										var k;
										for (k=0;k<div.length;k++)
										{
											if(div[k].value===''|| div[k].value===null){
												alert("Depth value is left unfilled");
												return false;
											}
											else if(div[k].value<0.1){
												alert("Depth value less than 0.1 is not possible");
												return false;
											}
											else if(div[k].value>3){
												alert("Depth value cannot be more than 3");
												return false;
											}
										}
										
									}
									
									//length/breadth ratio validation
									if(radios[i].name==="lbybratio_var_fix" && value==="variable"){
										flag=1;
										var div = document.getElementById('lbybratiovariable').getElementsByTagName('input');
										var k;
										var ini=0;
										var max=0;
										var min=0;
										var a1=0;
										var a2=0;
										for (k=0;k<div.length;k++)
										{
											var errorname="null";
											if(div[k].name==="lbybratio_ini_value"){
												errorname="Initial aspect ratio value";
												ini=div[k].value;
												ini=Number(ini);
											}
											if(div[k].name==="lbybratio_min_value"){
												errorname="Minimum aspect ratio value";
												min=div[k].value;
												min=Number(min);
												a1=min;
												var x1=ini1*ini1;
												x1=x1/ini3;
													if(x1 < a1)
													{
														alert("Minimum Aspect Ratio should be less than "+x1);
														return flase;
													}
												var x1=ini2*ini2;
												x1=ini3/x1;
													if(x1 > a1)
													{
														alert("Minimum Aspect Ratio  should be greater than "+x1);
														return false;	}
													}
												if(div[k].name==="lbybratio_max_value"){
												errorname="Maximum aspect ratio value";
													max=div[k].value;
													max=Number(max);
													a2=max;
													var x1=ini2*ini2;
													x1=ini3/x1;
														if(x1 > a2)
														{
															alert("Maximum Aspect Ratio should be greater than "+x1);
															return false;	}	
														}
														var x1=ini1*ini1;
														x1=x1/ini3;
															if(x1 < a2)
															{
																alert("Maximum Aspect Ratio should be less than "+x1);
																return false
															}
													if(div[k].value===''|| div[k].value===null){
														alert(errorname+" is left unfilled");
														return false;
													}
													else if(div[k].value<0){
														alert(errorname+"less than zeero is not possible");
														return false;
													}
												}
										//sets the constraints for the min,max and ini values to be in range of 0.1 and 3
										if(min<=ini && ini<=max);
										else{
											alert("initial value of aspect ratio should be between minimun and maximum");
											return false;
										}
										
									}
									else if(radios[i].name==="lbybratio_var_fix" && value==="fixed"){
										var div = document.getElementById('lbybratiofixed').getElementsByTagName('input');
										var k;
										for (k=0;k<div.length;k++)
										{
											
											if(div[k].value===''|| div[k].value===null){
												alert("Aspect ratio value is left unfilled");
												return false;
											}
											else if(div[k].value<0.1){
												alert("Aspect ratio value less than zero is not possible");
												return false;
											}
											else if(div[k].value<0.1){
												alert("Aspect ratio value cannot be less than 0.1");
												return false;
											}
											else if(div[k].value>10){
												alert("Aspect ratio value cannot be more than 10");
												return false;
											}
										}
										
									}
									
								}
							}
							
							if(flag==0){
								alert("atleast one should be variable");
								return false;
							}
							//tells that none of the variables are variable and all are fixed
							flag=0;
							var e = document.getElementById("windowtype1");
							var strUser = e.options[e.selectedIndex].value;
							if(strUser==0){
							}
							else{
								flag=1;
							}
							e = document.getElementById("windowtype2");
							strUser = e.options[e.selectedIndex].value;
							if(strUser==0){
							}
							else{
								flag=1;
							}
							e = document.getElementById("windowtype3");
							strUser = e.options[e.selectedIndex].value;
							if(strUser==0){
							}
							else{
								flag=1;
							}
							e = document.getElementById("windowtype4");
							strUser = e.options[e.selectedIndex].value;
							if(strUser==0){
							}
							else{
								flag=1;
							}
							
							if(flag===0){
								alert("aleast one window type has to be selected");
								return false;
							}
							if((ini1*ini1)/ini3 < a1)
							{
								alert("wrong range of apect ratio");
							} 
							
							return true;
						}
						
						///////// THIS IS FOR PARAMETRIC VALIDATION ////////////////////////
						function validateForm2(){
							var ini1;
							var ini2;
							var ini3;
							var a1;
							var a2;
							var a3;
							var div1 = document.getElementsByTagName('input');
							for(k=0;k<div1.length;k++)
							{
								if(div1[k].name==="ptotal_length")
								{
									ini1=div1[k].value;
									ini1=Number(ini1);
								}
								if(div1[k].name==="ptotal_breadth")
								{
									ini2=div1[k].value;
									ini2=Number(ini2);
								}
								if(div1[k].name==="ptotal_area")
								{
									ini3=div1[k].value;
									ini3=Number(ini3);
								}
								
								if(div1[k].name==="lbybratio1")
								{
									a1=div1[k].value;
									a1=Number(a1);
								}
								if(div1[k].name==="lbybratio2")
								{
									a2=div1[k].value;
									a2=Number(a2);
								}
								if(div1[k].name==="lbybratio3")
								{
									a3=div1[k].value;
									a3=Number(a3);
								}
								
							}
							var x1=ini1*ini1;
							x1=x1/ini3;//max value of aspect ratio
							var x2=ini2*ini2;
							x2=ini3/x2;//min value of aspect ratio
							if(a1 > x1 || a2 > x1 || a3 > x1)
							{
								alert("Aspect ratio should be less than "+x1);
								return false;
							}	
							if(a1 < x2 || a2 < x2 || a3 < x2)
							{
								alert("Aspect ratio should be greater than "+x2);
								return false;
							}	
							var div = document.getElementById('azivariable2').getElementsByTagName('input');
							for (k=0;k<div.length;k++)
							{
								if(div[k].value===''|| div[k].value===null){
									alert(div[k].name+" is left unfilled");
									return false;
								}
							}
							
							var div = document.getElementById('wwrvariable2').getElementsByTagName('input');
							for (k=0;k<div.length;k++)
							{
								if(div[k].value===''|| div[k].value===null){
									alert(div[k].name+" is left unfilled");
									return false;
								}
							}
							
							//overhang depth limitations
							var div = document.getElementById('depthvariable2').getElementsByTagName('input');
							for (k=0;k<div.length;k++)
							{
								if(div[k].value===''|| div[k].value===null){
									alert(div[k].name+" is left unfilled");
									return false;
								}
							}
							
							//length/breadth ratio validation
							var div = document.getElementById('lbybratiovariable2').getElementsByTagName('input');
							for (k=0;k<div.length;k++)
							{
								if(div[k].value===''|| div[k].value===null){
									alert(div[k].name+" is left unfilled");
									return false;
								}
							}
							var checkboxes = document.getElementsByTagName('input');
							var flag=0;//used to find if atleast one of the glass types is selected
							flag=0;
							var e = document.getElementById("windowtype21");
							var strUser = e.options[e.selectedIndex].value;
							if(strUser==0){
							}
							else{
								flag=1;
							}
							e = document.getElementById("windowtype22");
							strUser = e.options[e.selectedIndex].value;
							if(strUser==0){
							}
							else{
								flag=1;
							}
							e = document.getElementById("windowtype23");
							strUser = e.options[e.selectedIndex].value;
							if(strUser==0){
							}
							else{
								flag=1;
							}
							e = document.getElementById("windowtype24");
							strUser = e.options[e.selectedIndex].value;
							if(strUser==0){
							}
							else{
								flag=1;
							}
							e = document.getElementById("windowtype25");
							strUser = e.options[e.selectedIndex].value;
							if(strUser==0){
							}
							else{
								flag=1;
							}
							
							if(flag===0){
								alert("aleast one window type has to be selected");
								return false;
							}
							return true;
						}
						
						// variable to hold request
						var request;
						// bind to the submit event of our form
						$(document).ready(function(){
							
							$("#frm1").submit(function(event){
								//alert("sneding");
								var correct=validateForm();
								if(correct==false){
									return false;
								}
								//alert("sneding");
								var unique_counter=guid();
								var str=varq[0];
								if(varq[1]=='0'){
									str+='0';
								}
								else if(varq[1]=='1'){
									if(varq[2]=='0'){
										str+='1';
									}
									else if(varq[2]=='1'){
										str+='2';
									}
								}
								for(var i=3; i < 6; i++){
									str+=varq[i];
								}
								var address="./mycommand_file_generator.php?unique_counter="+unique_counter+"&var_quantities="+str;
								if (request) {
									request.abort();
								}
									// setup some local variables
									var $form = $(this);
									// let's select and cache all the fields
									var $inputs = $form.find("input, select, button, textarea");
									// serialize the data in the form
									var serializedData = $form.serialize();
									
									// let's disable the inputs for the duration of the ajax request
									$inputs.prop("disabled", true);
									
									request = $.ajax({
										url: address,
										type: "POST",
										data: serializedData
									});
									
					// callback handler that will be called on success
					request.done(function (response, textStatus, jqXHR){
							// log a message to the console
							console.log("Hooray, it worked!");
						});
					
					// callback handler that will be called on failure
					request.fail(function (jqXHR, textStatus, errorThrown){
							// log the error to the console
							console.error(
								"The following error occured: "+
								textStatus, errorThrown
								);
						});
					
					// callback handler that will be called regardless
					// if the request failed or succeeded
					request.always(function () {
							// reenable the inputs
							$inputs.prop("disabled", false);
						});
					
					var address2="./displaygenopt_ver1.php?unique_counter="+unique_counter+"&var_quantities="+str+"&total_area="+document.getElementById('total_area').value;
					
					document.getElementById("iframe2").src=address2;
					
					
					
					// prevent default posting of form
					event.preventDefault();
				});
			
			
			var nooftimes=0;

			$("#frm2").submit(function(event){
					var correct=validateForm2();
					if(correct==false){
						return false;
					}
					nooftimes++;
					var unique_counter=guid();
					var address="./mycommand_file_generator2.php?unique_counter="+unique_counter;
					if (request) {
						request.abort();
					}
					// setup some local variables
					var $form = $(this);
					// let's select and cache all the fields
					var $inputs = $form.find("input, select, button, textarea");
					// serialize the data in the form
					var serializedData = $form.serialize();
					
					// let's disable the inputs for the duration of the ajax request
					$inputs.prop("disabled", true);
					
					request = $.ajax({
						url: address,
						type: "POST",
						data: serializedData
					});
							
					// callback handler that will be called on success
					request.done(function (response, textStatus, jqXHR){
							// log a message to the console
							console.log("Hooray, it worked!");
						});
					
					// callback handler that will be called on failure
					request.fail(function (jqXHR, textStatus, errorThrown){
							// log the error to the console
							console.error(
								"The following error occured: "+
								textStatus, errorThrown
								);
						});
					
					// callback handler that will be called regardless
					// if the request failed or succeeded
					request.always(function () {
							// reenable the inputs
							$inputs.prop("disabled", false);
						});
					
					var address2="./displayparametric.php?unique_counter="+unique_counter;
					//alert(address2);
					
					document.getElementById("iframe1").src=address2;
					
					// prevent default posting of form
					event.preventDefault();
				});
			
					//this function is for toggling the view of parametric simulations on checking or unchecking the check box
					$("#non_parametric").click(function() {
							// this function will get executed every time the #home element is clicked (or tab-spacebar changed)
							if($(this).is(":checked")) // "this" refers to the element that fired the event
							{
								document.getElementById("id2").style.display="block";
								document.getElementById("id4").style.display="block";
							}
							else{
								document.getElementById("id2").style.display="none";
								document.getElementById("id4").style.display="none";
							}
						});
					
					
				});
