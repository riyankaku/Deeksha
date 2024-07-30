// const pathname=window.location.pathname;
// const pagename=pathname.split("/").pop();

// if(pagename="index.html"){
//     document.querySelector(".home").classList("active");
// }
$("#checkname").hide() ; 


$("#name").keyup(username_check)
function username_check(){
    let data=$("#name").val();
    console.log("username:",data);
    if(data.length<1){
        $("#checkname").show();
        $("#checkname").html("**Required field");
    }
    else if(data.length<5){
        $("#checkname").show();
        $("#checkname").html("**Minimum 5 characters")

    }
    else{
        $("#checkname").hide();
    }
}




$(document).ready(function(){

   let stickyNavTop = $('.navbar').offset().top;  
    console.log(stickyNavTop);
       
       //  function that decides weather the navigation bar should have "fixed" css position or not.
       function stickyNav(){
           let scrollTop = $(window).scrollTop();
            // The scrollTop() method sets or returns the vertical scrollbar position for the selected elements, so now it returns current vertical position from the top
             
           // if scrolled down more than the navigation, change element's position to fixed to stick to top,
           // otherwise change it back to relative
           if (scrollTop > stickyNavTop) { 
               $('.navbar').addClass('sticky');
              
           } else {
               $('.navbar').removeClass('sticky'); 
           }
        };

    stickyNav();
    // and run it again whenever scrolling is done
    $(window).scroll(function() {
        stickyNav();
    });
    
     $("#display1").click(function(){
        $(this).hide();
        $(".invisibile").show();
        $("#vanish1").show();
     });
     $("#vanish1").click(function(){
        $(this).hide();
        $(".invisibile").hide();
        $("#display1").show();
     });
     $("#display2").click(function(){
        $(this).hide();
        $(".invisibile").show();
        $("#vanish2").show();
     });
     $("#vanish2").click(function(){
        $(this).hide();
        $(".invisibile").hide();
        $("#display2").show();
     });
     $("#display3").click(function(){
        $(this).hide();
        $(".invisibile").show();
        $("#vanish3").show();
     });
     $("#vanish3").click(function(){
        $(this).hide();
        $(".invisibile").hide();
        $("#display3").show();
     });
     $("#display4").click(function(){
        $(this).hide();
        $(".invisibile").show();
        $("#vanish4").show();
     });
     $("#vanish4").click(function(){
        $(this).hide();
        $(".invisibile").hide();
        $("#display4").show();
     });
    
    
   
    $("#show1").click(function(){
        $(this).hide();
        $("#content1").show();
        $("#hide1").show()

    });
    $("#hide1").click(function(){
        $(this).hide();
        $("#content1").hide();
        $("#show1").show();

    })
    $("#show2").click(function(){
        $(this).hide();
        $("#content2").show();
        $("#hide2").show()

    });
    $("#hide2").click(function(){
        $(this).hide();
        $("#content2").hide();
        $("#show2").show();

    });
    
    $("#show3").click(function(){
        $(this).hide();
        $("#content3").show();
        $("#hide3").show()

    });
    $("#hide3").click(function(){
        $(this).hide();
        $("#content3").hide();
        $("#show3").show();

    });
    var swiper = new Swiper(".mySwiper", {
        effect: "flip",
        grabCursor: true,
        pagination: {
          el: ".swiper-pagination",
        },
        autoplay: {
                delay: 3000,
                disableOnInteraction: false,
              },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    
        // autoplay: {
        //     delay: 2500,
        //     disableOnInteraction: false,
        //   },
       

 
    
   
});

$('#carousel1').owlCarousel({
    loop: true,
    margin:0,
    autoplay: true,
    nav:false,
    autoplayTimeout: 3000,
    responsive: {
        0: {
            items: 4
        },
        600: {
            items: 4
        },
        1000: {
            items: 5
        }
    }
});
$('#carousel2').owlCarousel({
    loop: true,
    margin:10,
    autoplay:true,
    nav:false,
    autoplayTimeout: 3000,
    responsive: {
        0:{
            items: 1
        },
        600:{
            items: 2
        },
        1000: {
            items:3
        }
    }
});




    var textWrapper = document.querySelector('.ml2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml2 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  }).add({
    targets: '.ml2',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
 });

    
 


