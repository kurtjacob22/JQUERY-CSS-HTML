$(function() {
     
  
 
    $('#left').click(function() {
        $('.box').animate({
            left: "-=40px",
            fontSize: "+=2px"
        }, function() {
           
        });
    });
    
    $('#up').click(function() {
        $('.box').animate({
            top: "-=40px",
            opacity: "+=0.1"
        }, function() {
            
        });
    });
    
    $('#right').click(function() {
        $('.box').animate({
            left: "+=40px",
            fontSize: "-=2px"
        }, function() {
            
        });
    });
    
    $('#down').click(function() {
        $('.box').animate({
            top: "+=40px",
            opacity: "-=0.1"
        }, function() {
           
        });
    });
    
  
    
});
    

















