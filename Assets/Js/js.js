/*

code to animate text

*/
 $(".swing").Morphext({
    animation: "swing",
    complete: function () {
    	 console.log("This is called after a phrase is animated in! Current phrase index: " + this.index);
           }
 });
			
$(".zoomin").Morphext({
     animation: "zoomIn",
     complete: function () {
        console.log("This is called after a phrase is animated in! Current phrase index: " + this.index);
          }
});

//initialize A0S
AOS.init();