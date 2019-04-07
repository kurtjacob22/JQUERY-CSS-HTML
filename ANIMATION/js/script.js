$(document).ready(function(){



$("#start").click(function(){

var div = $("#car1")
var dib = $("#car2");
div.animate({left: '-5%'}, 1000);
dib.animate({left: '-5%'}, 1000);

});

$("#go").click(function(){

var div = $("#car1")
var dib = $("#car2");
div.animate({left: '100%'}, 3500);
dib.animate({left: '100%'}, 3000);
});

$("#Pusa").click(function(){
var ddd = $(".cat")
ddd.animate({left: '100%'}, 3000);
}); 


 $("#reset").click(function(){

var div = $("#car1")
var dib = $("#car2");
div.animate({left: '0px'}, 1000);
dib.animate({left: '0px'}, 1000);

});

});
