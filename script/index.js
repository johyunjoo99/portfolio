$(function(){

    $("img").not("[alt='logo text']").not("[alt='slideshow']").hover(function(){
        $(".circle").css("opacity", 0);
    }, function(){
        $(".circle").css("opacity", 1);
    })


    //mousemove effect
    const circle = document.querySelector(".circle")

    let mouseX = 0
    let mouseY = 0
    let circleX = 0
    let circleY = 0
    
    let speed = 0.06
    
    const animate = () => {
        let distX = mouseX - circleX
        let distY = mouseY - circleY
        let translatedValue = `translate3d(${circleX}px, ${circleY}px, 0 )`;
    
        circleX = circleX + (distX * speed)
        circleY = circleY + (distY * speed)
    
        circle.style.transform = translatedValue;
    
        requestAnimationFrame(animate)
    
    }
    
    animate()
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX - circle.offsetWidth / 4;
        mouseY = e.clientY - circle.offsetHeight / 4;
    })



    //slider animation
    $(".effect").each(function(){
        $(this).addClass("active");
    })

    function delay(){
        $("#wall").css("display", "none");
    }

    setTimeout(delay, 3000);

    

    //profile section start animation
    function profileAnimate(){
        $(".shape").css("animation-name", "border");
        $(".shape").css("animation-delay", "1s")
        $(".shape").css("animation-duration", "2s");
        $(".shape").css("animation-iteration-count", 1);

        $(".border svg").css("animation-name", "rotate");
        $(".border svg").css("animation-delay", "3s");
        $(".border svg").css("animation-duration", "1s");

        setTimeout(function(){
            $("#profile img[alt='profile']").fadeIn("slow");
        }, 4000);

        setTimeout(function(){
            $(".profileText h1").css("opacity", 1).css("transform", "translateY(0)");
        }, 4500);

        setTimeout(function(){
            $(".profileText ul").css("opacity", 1).css("transform", "translateY(0)");
        }, 4800);
    }


    //fullpage scroll effect
    var bn = $(".box").length;

    $(".box").on("mousewheel DOMMouseScroll", function (e) {
           e.preventDefault();
           var delta = 0;
           if (!event) event = window.event;
           if (event.wheelDelta) {
               delta = event.wheelDelta / 120;
               if (window.opera) delta = -delta;
           } else if (event.detail) delta = -event.detail / 3;
   
           if (delta < 0) {
                   n = $(this).index()+1;
           } else { 
                   n = $(this).index()-1;   
           }

           if( n >= bn ) {
               n = bn - 1;	
           } else if (n <= -1) {
               n = 0;	
           }

           $(".boxList").stop().animate({top:-n*100+"%"});

           $(".menu li a").removeClass("overA");
           $(".menu li a").eq(n).addClass("overA");

           $(".menu li a span").removeClass("overSpan");
           $(".menu li a").eq(n).find("span").addClass("overSpan");

           if(n == 1){
                profileAnimate();
           }

           if(n == 2){
                $(".prev").click(function(){
                    $(".boxList").stop().animate({left: 0});
                });
           }

           var pfi = 0;

           function portfolioAnimate(){
                    
            $(".pfInfo").eq(pfi).css("opacity", 1).css("transform", "translateY(0)");

                pfi++;
        
                if(pfi >= $(".pfInfo").length){
                    clearInterval(pfiOpacity);
                }
        
            }

           if(n == 2){

                var pfiOpacity = setInterval(portfolioAnimate, 500);
           }
           
      });


    //page animate effect
    $(".menu li").click(function(){

        var boxWidth = $(".boxList").width();

        if($(".boxList").css("left") == -boxWidth + "px"){
            $(".boxList").css("left", 0)
        };
  
        var liIndex = $(this).index();
        $(".boxList").stop().animate({top: -liIndex*100+"%"});

        $(".menu li").find("a").removeClass("overA")
        $(this).find("a").addClass("overA");

        $(".menu li").find("span").removeClass("overSpan");
        $(this).find("span").addClass("overSpan");

        if(liIndex == 1){
            profileAnimate();
        }

        if(liIndex == 2){
            var pfi = 0;

            function portfolioAnimate(){
                
                $(".pfInfo").eq(pfi).css("opacity", 1).css("transform", "translateY(0)");

                pfi++;
        
                if(pfi >= $(".pfInfo").length){
                    clearInterval(pfiOpacity);
                }
        
            }

            var pfiOpacity = setInterval(portfolioAnimate, 500);
         }

    });


    //profile ul hover effect
        $(".profileText ul li").hover(function () {

            $(".profileText ul li").mousemove(function (event) {

                var liIdx = $(this).index();
                $(".popup").eq(liIdx).css("opacity", 1);

                var headerWidth = $("header").width();
                var popupWidth = $(".popup").eq(liIdx).width();
                var popupHeight = $(".popup").eq(liIdx).height();

                $(".popup").css("top", event.clientY - popupHeight - 50);
                $(".popup").css("left", event.clientX - headerWidth - popupWidth - 70);

                if($(".profileText ul").css("opacity") < 1){
                    $(".popup").css("opacity", 0);
                }

            });


        }, function () {

            var liIdx = $(this).index();
            $(".popup").eq(liIdx).stop().css("opacity", 0);

        });


        //가로 스크롤
        var pf = $(".pfbox").length;
    
        $(".pfbox").on("mousewheel DOMMouseScroll", function(e){
 
            e.preventDefault();

            var delta = 0;
            if(!event) event = window.event;
            if(event.wheelDelta){
                delta = event.wheelDelta / 120;
                if(window.opera) delta = -delta;
            } else if(event.detail) delta = -event.detail / 3;

            if(delta < 0){
                console.log(n);
                if(n == 2){
                    n = 2;
                    w = $(this).index() + 1;
                }
                
            } else{
                console.log(n);
                if(n == 2){
                    n = 2;
                    w = $(this).index() - 1;
                }
                
            }

            if(w >= pf){
                w = pf - 1;
            } else if(w <= -1){
                w = 0
            }

            $(".pfList").stop().animate({left: -w * 100 + "%"});

        });


        //swiper.js (portfolio swipe)
        var swiper = new Swiper(".swiper-container", {
                slidesPerView: 2.6,
                spaceBetween: 120,
                grabCursor: true
        });


        //pfInfo button click
        $(".next").click(function(){
            $(".boxList").stop().animate({left: -100 + "%"});

            var pfInfo_i = $(this).parents(".pfInfo").index();
            $(".pfList").stop().animate({left: -pfInfo_i * 100 + "%"});
        });

        $(".prev").click(function(){
            $(".boxList").stop().animate({left: 0});
        });


        //slideshow button click
        $(".fa-play").click(function(){
            $(this).css("display", "none").siblings(".fa-pause").css("display", "block");
        });

        $(".fa-pause").click(function(){
            $(this).css("display", "none").siblings(".fa-play").css("display", "block");
        });
})
