$(function(){


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
           console.log(n)
           if( n >= bn ) {
               n=bn-1;	
           } else if (n<=-1) {
               n=0	
           }
           $(".boxList").stop().animate({top:-n*100+"%"});
           
           $(".menu li a").removeClass("overA");
           $(".menu li a").eq(n).addClass("overA");

           $(".menu li a span").removeClass("overSpan");
           $(".menu li a").eq(n).find("span").addClass("overSpan");
           
      });


    //page animate effect
    $(".menu li").click(function(){
        
        var liIndex = $(this).index();
        $(".boxList").stop().animate({top: -liIndex*100+"%"});

        $(".menu li").find("a").removeClass("overA")
        $(this).find("a").addClass("overA");

        $(".menu li").find("span").removeClass("overSpan");
        $(this).find("span").addClass("overSpan");
    });

})
