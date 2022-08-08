$(function(){


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
      });

    

    //page animate effect
    $(".menu li").click(function(){
        
        var liIndex = $(this).index();
        console.log(liIndex);
        $(".boxList").stop().animate({top: -liIndex*100+"%"});

    });


})
    