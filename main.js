'use strict';

function main () {
  console.log('JS Running');
}

window.addEventListener('load', main);
$(window).scroll(function() {
    // 100 = The point you would like to fade the nav in.
      //FIRST IMAGE
    if ($(window).scrollTop()  < 400 ){
        
        $('.bg-box').addClass('show');
        
    } else {
        
        $('.bg-box').removeClass('show');
        
        };
    //SECOND IMAGE 
    if ($(window).scrollTop()  > 400 && $(window).scrollTop() <800){
       
        $('.bg-paper').addClass('show');
            
    } else {
            
        $('.bg-paper').removeClass('show');
            
        };
    //THIRD IMAGE
    if ($(window).scrollTop()  > 800 ){
       
        $('.bg-parachute').addClass('show');
                
    } else {
                
        $('.bg-parachute').removeClass('show');
                
        };
    });
    
    $('.scroll').on('click', function(e){		
            e.preventDefault()
        
      $('html, body').animate({
          scrollTop : $(this.hash).offset().top
        }, 1500);
    });