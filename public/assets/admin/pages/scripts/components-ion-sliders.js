var ComponentsIonSliders = function () {

    return {
        //main function to initiate the module
        init: function () {

            $("#range_1").ionRangeSlider({
				type: "single",
                min: 0,
                max: 80,
                from: 0,
                to: 80,
                step: 1,
				values:[0,45,90,135,180],
                postfix: "°",
                prettify: true,
                hasGrid: true,
				onFinish: function (data) {
					var x = [0,45,90,135,180];
					$("#range_1").val(x[data.fromNumber]);
					var dd = (data.fromNumber)*60;
					setTimeout(function(){ $(".range_1_box").find(".single").css("left", dd+"px"); $(".range_1_box").find(".irs-single").css("left", dd+"px")}, 100);
				}
            });
			
			
			
			$("#range_1-min").val(0);
			$("#range_1-max").val(180);

            $("#range_2").ionRangeSlider({
                min: 1,
                max: 5,
                from: 1,
                to: 5,
                step: 1,
				values:[1, 2, 3, 4, 5],
                prettify: false,
                hasGrid: true,
				onChange: function (data) {
					var x = [1, 2, 3, 4, 5];
					$("#range_2").val(x[data.fromNumber]);
					var dd = (data.fromNumber)*60;
					setTimeout(function(){ $(".range_2_box").find(".single").css("left", dd+"px"); $(".range_2_box").find(".irs-single").css("left", dd+"px")}, 100);
				}
            });
			
			$("#range_2-min").val(1);
			$("#range_2-max").val(5);
			
			

            $("#range_5").ionRangeSlider({
                min: 0,
                max: 10,
                from: 0,
                to: 10,
                step: 1,
                prettify: false,
                hasGrid: true
            });

			$("#range_5-min").val(1);
			$("#range_5-max").val(10);			
			
            $("#range_6").ionRangeSlider({
                min: 0,
                max: 5000,
                from: 0,
                to: 5000,
                step: 1,
                prefix: "$",
                prettify: false,
                hasGrid: true
            });
			
						$("#range_6-min").val(1);
			$("#range_6-max").val(5000);

            $("#range_4").ionRangeSlider({
                min: 0,
                max: 2,
                from: 0,
                to: 2,
                step: 1,
				values:[0, 0.5, 1, 1.5, 2],
                prettify: false,
                hasGrid: true,
				onChange: function (data) {
					var x = [0, 0.5, 1, 1.5, 2];
					$("#range_4").val(x[data.fromNumber]);
					var dd = (data.fromNumber)*60;
					setTimeout(function(){ $(".range_4_box").find(".single").css("left", dd+"px"); $(".range_4_box").find(".irs-single").css("left", dd+"px")}, 100);
				}
            });
			
			$("#range_4-min").val(0);
			$("#range_4-max").val(2);
            
			$("#range_7_1-min").val(25);
			$("#range_7_1-max").val(125);
			
			$("#range_8_1-min").val(25);
			$("#range_8_1-max").val(125);
			
            $("#range_7_1").ionRangeSlider({
                min: 25,
                max: 125,
                from: 25,
                to: 125,
                step: 1,
                prettify: true,
                hasGrid: true,
				values:[25,50,75,100,125],
				onChange: function (data) {
					var x = [25,50,75,100,125];
					$("#range_7_1").val(x[data.fromNumber]);
					var dd = (data.fromNumber)*60;
					setTimeout(function(){ $(".range_7_1_box").find(".single").css("left", dd+"px"); $(".range_7_1_box").find(".irs-single").css("left", dd+"px")}, 100);
				}
            });
				

            $("#range_8_1").ionRangeSlider({
                min: 25,
                max: 125,
                from: 25,
                to: 125,
                step: 1,
                prettify: true,
                hasGrid: true,
				values:[25,50,75,100,125],
				onChange: function (data) {
					var x = [25,50,75,100,125];
					$("#range_8_1").val(x[data.fromNumber]);
					var dd = (data.fromNumber)*60;
					setTimeout(function(){ $(".range_8_1_box").find(".single").css("left", dd+"px"); $(".range_8_1_box").find(".irs-single").css("left", dd+"px")}, 100);
				}
            });
				
				
			$("#range_3_1").ionRangeSlider({
                min: 10,
                max: 90,
                from: 10,
                to: 90,
                step: 1,
                postfix: "°",
                prettify: true,
                hasGrid: true,
				values:[10,30,50,70,90],
				onChange: function (data) {
					var x = [10,30,50,70,90];
					$("#range_3_1").val(x[data.fromNumber]);
					var dd = (data.fromNumber)*60;
					setTimeout(function(){ $(".range_3_1_box").find(".single").css("left", dd+"px"); $(".range_3_1_box").find(".irs-single").css("left", dd+"px")}, 100);
				}
            });
			
			
			$("#range_3_2").ionRangeSlider({
                min: 10,
                max: 90,
                from: 10,
                to: 90,
                step: 1,
                postfix: "°",
                prettify: true,
				disable:true,
                hasGrid: true,
				values:[10,30,50,70,90],
				onChange: function (data) {
					var x = [10,30,50,70,90];
					$("#range_3_2").val(x[data.fromNumber]);
					var dd = (data.fromNumber)*60;
					setTimeout(function(){ $(".range_3_2_box").find(".single").css("left", dd+"px"); $(".range_3_2_box").find(".irs-single").css("left", dd+"px")}, 100);
				}
            });
			
			$("#range_3_3").ionRangeSlider({
                min: 10,
                max: 90,
                from: 10,
                to: 90,
                step: 1,
                postfix: "°",
                prettify: true,
				disable:true,
                hasGrid: true,
				values:[10,30,50,70,90],
				onChange: function (data) {
					var x = [10,30,50,70,90];
					$("#range_3_3").val(x[data.fromNumber]);
					var dd = (data.fromNumber)*60;
					setTimeout(function(){ $(".range_3_3_box").find(".single").css("left", dd+"px"); $(".range_3_3_box").find(".irs-single").css("left", dd+"px")}, 100);
				}
            });
			
			$("#range_3_4").ionRangeSlider({
                min: 10,
                max: 90,
                from: 10,
                to: 90,
                step: 1,
                postfix: "°",
                prettify: true,
				disable:true,
                hasGrid: true,
				values:[10,30,50,70,90],
				onChange: function (data) {
					var x = [10,30,50,70,90];
					$("#range_3_4").val(x[data.fromNumber]);
					var dd = (data.fromNumber)*60;
					setTimeout(function(){ $(".range_3_4_box").find(".single").css("left", dd+"px"); $(".range_3_4_box").find(".irs-single").css("left", dd+"px")}, 100);
				}
            });
			
			
			
			
			/*$("#range_3_2, #range_3_3, #range_3_4").ionRangeSlider({
                min: 0,
                max: 90,
                from: 0,
                to: 90,
                step: 1,
                postfix: "°",
                prettify: true,
                hasGrid: true,
				disable:true
            });*/
			
			$("#range_3_1-min").val(10);
			$("#range_3_1-max").val(90);
			
			$("#range_3_2-min").val(10);
			$("#range_3_2-max").val(90);
			
			$("#range_3_3-min").val(10);
			$("#range_3_3-max").val(90);
			
			$("#range_3_4-min").val(10);
			$("#range_3_4-max").val(90);

			$("#range_3").ionRangeSlider({
                min: 10,
                max: 90,
                from: 10,
                to: 90,
                step: 1,
                postfix: "°",
                prettify: true,
                hasGrid: true
            });
			
			$("#range_3-min").val(10);
			$("#range_3-max").val(90);
		
				$("#range_3_2-min, #range_3_3-min, #range_3_4-min").attr("disabled", "disabled");			
				$("#range_3_2-max, #range_3_3-max, #range_3_4-max").attr("disabled", "disabled");			
			
			$(".ews").show();
			$(".ews").attr("placeholder", "mm");
			$(".ews").attr("disabled", "disabled");
			$("#r5").hide();
			
            
			$(".min, .max").on("focus", function(){
				
					var aid = $(this).attr("id");
					var aid_ar = aid.split("-");
					var id = aid_ar[0];
					
					var mi = $("#"+id+"-min").val();
					var mx = $("#"+id+"-max").val();
					
					//alert(mi);
					$("#cmin").val(mi);
					$("#cmax").val(mx);
			});
			
			
			$(".min, .max").keyup(function(){
				
					var aid = $(this).attr("id");
					var aid_ar = aid.split("-");
					var id = aid_ar[0];
					
					//alert(id);
					
					var mi = $("#"+id+"-min").val();
					var mx = $("#"+id+"-max").val();
					
					
				if(parseInt(mi) > parseInt(mx))
				{
					//alert('ok');
					alert("Maximum value must be greater than max");
					var cmin = $("#cmin").val();
					var cmax = $("#cmax").val();
					$("#"+id+"-min").val(cmin);
					$("#"+id+"-max").val(cmax);
				}
				else
				{
					$("#"+id).ionRangeSlider("update", {
						min: parseInt(mi),
						max: parseInt(mx),
						from: parseInt(mi),
						to: parseInt(mx),
						step: 1,
						prettify: false,
						hasGrid: true
					});
				}
				
            });
            
        }

    };
	
	

}();


function slide_update()
{



}

$(".wwr").on("change", function(){
	if($(this).val() == "same_dir")
	{
		//$("#swwr").show();
		//$("#dwwr").hide();
		$("#1").find("img").attr("src", "/edotdemo/public/assets/admin/layout/img/lock.png");
		
		$(".range_1_box").show();
		$("#range_1_text").hide();
		
		/*$("#range_3").ionRangeSlider("update", {
						min: 0,
						max: 90,
						from: 0,
						to: 90,
						step: 1,
						prettify: false,
						hasGrid: true
					});*/
		$("#range_3_2, #range_3_3, #range_3_4").ionRangeSlider("update", {
						disable: true
					});
					
		$("#range_3_2-min, #range_3_3-min, #range_3_4-min").attr("disabled", "disabled");			
		$("#range_3_2-max, #range_3_3-max, #range_3_4-max").attr("disabled", "disabled");			

		
		$.each( $(".layers"), function( key, value ) {
			$(this).val(9);
			$(this).prop('disabled', false);
		});
	}
	else
	{
		$("#1").find("img").attr("src", "/edotdemo/public/assets/admin/layout/img/unlock.png");
		$(".range_1_box").hide();
		$("#range_1_text").show();
		
		$("#swwr").hide();
		//$("#dwwr").show();
		
		//$("#range_3, #range_3_1, #range_3_2, #range_3_3, #range_3_4").removeAttr("disabled");
		
		$("#range_3_2, #range_3_3, #range_3_4").ionRangeSlider("update", {
						disable: false
					});

		$("#range_3_2-min, #range_3_3-min, #range_3_4-min").removeAttr("disabled");
		$("#range_3_2-max, #range_3_3-max, #range_3_4-max").removeAttr("disabled");
		
		$.each( $(".layers"), function( key, value ) {
			$(this).val(9);
			var x = key+1;
			
			$("#ews"+x).show();
			$("#ews"+x).attr("placeholder", "mm");
			$("#ews"+x).removeAttr("disabled");
			$(this).prop('disabled', true);
		});
		//$("#r5").show();
	}
	
	
	
});

$(".layers").on("change", function(){



	$.each( $(".layers"), function( key, value ) {
		if($(this).val() == 9)
		{
			var x = key+1;
			
			$("#ews"+x).show();
			$("#ews"+x).attr("placeholder", "mm");
			$("#ews"+x).removeAttr("disabled");
		}
		
	});


});



$(".lock").on("click", function(){
	
	var id = $(this).attr("id");
	
	if(id == 1)
	{
		$(".azimuth").val();
	}
	
	if(id == 2)
	{
		$(".aspect-ratio").val();
	}
	
	if(id == 4)
	{
		$(".over-hang").val();
	}
	
	if($(this).find("img").attr('src') == "/edotdemo/public/assets/admin/layout/img/lock.png")
	{
		$(this).find("img").attr("src", "/edotdemo/public/assets/admin/layout/img/unlock.png");
		$(".range_"+id+"_box").hide();
		$("#range_"+id+"_text").show();
		
	}
	else
	{
		$(this).find("img").attr("src", "/edotdemo/public/assets/admin/layout/img/lock.png");
		$(".range_"+id+"_box").show();
		$("#range_"+id+"_text").hide();
	}
});


$(".layers").on("change", function(){

$("#r5").hide();
	$.each( $(".layers"), function( key, value ) {
	//alert($(this).val());
		if($(this).val() == 'Insulation')
		{
		//alert("ok1");
			//$("#r5").show();
		}
	});
});

$("#multiselect_rightSelected").on("click", function(){


	var uno = 5;
	
	var j = 0; 
	$('#multiselect_to option').each(function(i, selected){ 
	  j = j+1;
		if(j > 4)
		{
			
			alert("User can select only "+uno+" glasses");
			return false;
		}
	});
	
	
	
	
	
});

$(document).ready(function($) {
	$('#multiselect').multiselect();
	
					$('#croof').click(function(){
					if($(this).is(':checked')) 
					{
						$("#coolroof").show();
					}
					else
					{
						$("#coolroof").hide();
					}
					//alert("ok");
				});
});