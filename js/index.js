$(document).ready(function (){
    
    

    var windowWdith = $(window).width()
    var mouseX = 0;


    $(".my-img").attr("src","img/vivid.png")

    $(document).mousemove(function (e){
    	mouseX = e.pageX;

    	if (mouseX > 0 && mouseX < windowWidth / 4) {
    		$(".my-img").attr("src", "img/vivid.png")
    	}
    	if (mouseX > windowWdth * 0.25 && mouseX < windowWidth * 0.5) {
    		$(".my-img").attr("src", "img/pastel.png")
        }
        if (mouseX > windowWdth * 0,5 && mouseX < windowWidth * 0.75) {
    		$(".my-img").attr("src", "img/monotone.png")
        }
        if (mouseX > windowWdth * 0.75 && mouseX < windowWidth) {
    		$(".my-img").attr("src", "img/colorless1.png")
    	}
    })
})