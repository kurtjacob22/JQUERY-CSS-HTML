$(document).ready(function(){//to activate this you need to open the website
    $(".btn1").click(function(){//so when when the button named by this id was clicked it will proceed to its function
        $("body").animate({
            backgroundPositionX: "+=0px",//in this case the horizontal movements will do nothing 
            backgroundPositionY: "+=500px"//in this case it will move depends on how many the pixels you assigned
        });
    });
        $(".btn2").click(function(){//so when when the button named by this id was clicked it will proceed to its function
        $("body").animate({
            backgroundPositionX: "+=0px", //in this case the horizontal movements will do nothing
            backgroundPositionY: "-=500px"//in this case it will move depends on how many the pixels you assigned
        });
    });
        $(".btn3").click(function(){//so when when the button named by this id was clicked it will proceed to its function
        $("body").animate({
            backgroundPositionX: "+=500px",//in this case it will move depends on how many the pixels you assigned 
            backgroundPositionY: "+=0px"//in this case the vertical movements will do nothing
        });
    });
        $(".btn4").click(function(){//so when when the button named by this id was clicked it will proceed to its function
        $("body").animate({
            backgroundPositionX: "-=500px",//in this case it will move depends on how many the pixels you assigned
            backgroundPositionY: "+=0px"//in this case the  vertical movements will do nothing
        });
    });
  $(".btn5").click(function(){//so when when the button named by this id was clicked it will proceed to its function
   $("body").animate({
            backgroundPositionX: "1500px",//in this case it will move to the specific part depends on how many the pixels you assigned
            backgroundPositionY: "1500px"//in this case it will move to the specific part depends on how many the pixels you assigned
        });
  });
    });
$( function() {//so this is th function
    $( document ).tooltip()//this is a widget used to display title
  } );
