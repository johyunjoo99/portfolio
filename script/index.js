$(function(){

    // var fullHeight = $(".boxList").height();
    // var boxLenght = $(".box").length;
    // var scorllHeight = fullHeight / boxLenght;
    // var boxIndex = 0;

    // $(".boxList").on("mousewheel", function(event){

    //     console.log(event.originalEvent.wheelDelta);

    //     if(event.originalEvent.wheelDelta >= 0){
    //         // ++ (아래)
            

    //         boxIndex--;

    //         if(boxIndex <= 0){
    //             boxIndex = 0
    //         }

    //         $(".boxList").stop().animate({marginTop: - scorllHeight * boxIndex}, 600);

    //         return false;
    //     } else if(event.originalEvent.wheelDelta < 0){
    //         // -- (위)

    //         boxIndex++;

    //         if(boxIndex >= boxLenght){
    //             boxIndex = boxLenght -1;
    //         }

    //         $(".boxList").stop().animate({marginTop: - scorllHeight * boxIndex}, 600);

    //         return false;
    //     }

    // });


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

    
})
    