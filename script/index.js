$(function(){

    $("img").not("[alt='logo text']").not("[alt='slideshow']").not(".remote img").not(".cardFront img").hover(function(){
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


    //aboutAnimate effect
    function aboutAnimate(){

        setTimeout(function(){
            $(".backCard").css("opacity", 1).css("top", "50%");
        }, 500)

        setTimeout(function(){
            $(".leftBtn").css("opacity", 1).css("top", "50%");
            $(".rightBtn").css("opacity", 1).css("top", "50%");
        }, 700)

        setTimeout(function(){
            $(".cardBox").not(":nth-of-type(2)").css("top", "87%").css("transform", "rotate(8deg)");
            $(".cardBox:nth-of-type(1)").css("top", "-45%").css("transform", "rotate(8deg)");
        }, 900)

        setTimeout(function(){
            $(".cardBox:nth-of-type(2)").css("opacity", 1);
            $(".cardBox:nth-of-type(2)").css("top", "21%").css("transform", "rotate(-8deg) rotateY(-180deg)");
        }, 1200)
        
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

                $(".prev").click(function(){
                    $(".boxList").stop().animate({left: 0});
                });
           }

           if(n == 3){
                aboutAnimate();
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

         if(liIndex == 3){
            aboutAnimate();
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
                    w = $(this).index() + 1;
            } else{
                    w = $(this).index() - 1;
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


        $(".image img").hover(function(){

            var imgHeight = $(this).height();
            var imageH = $(".image").height();

            $(this).stop().animate({top: -(imgHeight - imageH)}, 3000);
        }, function(){
            $(this).stop().animate({top: 0}, 3000);
        });


        // remote img click
        $(".remote img").click(function(){

            var imgI = $(this).index();

            $(".pfList").stop().animate({left: -imgI * 100 + 100 + "%"});
        });

        
        //fade slide
        $(".slideBtn .fa-play").click(function(){

            $(this).css("display", "none").siblings(".fa-pause").css("display", "block");

            var boxI = $(this).parents(".pfbox");
            var conI = boxI.children(".pfContent");
            var slideI = conI.find(".pfSlide");

            function fadeSlide(){
                slideI.children("li:first").appendTo(slideI);
            }

            fadeslide = setInterval(fadeSlide, 2000);    

        });

        $(".slideBtn .fa-pause").click(function(){

            $(this).css("display", "none").siblings(".fa-play").css("display", "block");

            clearInterval(fadeslide);

        });

        function cardSlide(){
            $(".cardBox").css("top", "87%");

            $(".cardBox:nth-of-type(1)").css("top", "-45%");

            $(".cardBox:nth-of-type(2)").css("top", "21%")
            .css("transform", "rotate(-8deg) rotateY(-180deg)");

            $(".cardBox").not(":nth-of-type(2)").css("opacity", 0)
            .css("transform", "rotate(8deg)");

            $(".cardBox").children(".cardBack").css("z-index", 1);
            
            $(".cardBox:nth-of-type(2)").children(".cardBack").css("z-index", -2);
        }

        //card slide button click
        $(".minus").click(function(){
        
            if($(".depth").parents(".card").index() == 0){
                setTimeout(function(){
                    $(".depth").css("transform", "scale(1.4)");

                    setTimeout(function(){
                        $(".depth").css("transform", "scale(1)");
                    },510)
                }, 500)
            }else{
                $(".depth").css("transform", "scale(0)");
            }

            $(".cardBox:last").prependTo(".cardList");
            cardSlide();

            setTimeout(function(){
                $(".cardBox").css("opacity", 1);
            }, 500)
        });

        $(".plus").click(function(){

            if($(".depth").parents(".card").index() == 2){
                setTimeout(function(){
                    $(".depth").css("transform", "scale(1.4)");

                    setTimeout(function(){
                        $(".depth").css("transform", "scale(1)");
                    },510)
                }, 500)
            }else{
                $(".depth").css("transform", "scale(0)");
            }

            $(".cardBox:first").appendTo(".cardList");
            cardSlide();

            setTimeout(function(){
                $(".cardBox").css("opacity", 1);
            }, 500)
        });
        
})
