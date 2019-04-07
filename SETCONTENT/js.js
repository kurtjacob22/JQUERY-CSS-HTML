$(document).ready(function(){
	$("#btn1").click(function(){
		$("#test1").text("Hello World!");
	});	
	$("#btn2").click(function(){
		$("#test2").html("<b>Hello World!</b>");
	});	
	$("#btn3").click(function(){
        $("#test3").val("JDOM");
    });
});

