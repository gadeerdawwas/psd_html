
    // var navber=document.querySelector('.navbar')
//     var navber=$(navber)

// $(function() {
//     'use strict';
//     console.log(navber.height());
//     $(window).scrollTop(function () {
        
//         if($(window).scrollTop() >= navber.height()){
//             navber.addClass('scrolled')
//             console.log(navber.height());


//         }else{
//             navber.removeClass('scrolled')
//             console.log(navber.height());

//         }
//     })
    
// })


$(function(){
    "use strict";
    var navBar=$(".navbar");
        // header=$(".header");
    $(window).scroll(function(){
      if($(this).scrollTop() >= navBar.height()){
        
        navBar.addClass('scrolled')
        console.log(navBar.height());
      }else{
        navBar.removeClass('scrolled')
    
      }
    });

    $('.tab-switch li').click(function () {
      $(this).addClass('selected').siblings().removeClass('selected');
      $('.tabs-sesction .tabs-content div').hide()
      $('.'+$(this).data('class')).show()
      console.log($(this).data('class'));
      
    })
  });