console.log("Hi")


$("document").ready(() => {
	$(".navbar").on("click", (event) => {
		const scrollTo = "."+event.target.id;

			console.log("there has been a click")
			
		$("html, body").animate({
			scrollTop: $(scrollTo).offset().top - 64
		}, 1000);
	});	
});


$("document").ready(() => {
	$(".next").on("click", (e) => {

		const id = $(e.currentTarget).parent().attr('id')
		console.log(id, "this is id")
		const currentImg = $('#' + id + " .active");
		const nextImg = currentImg.next()
		// console.log("clicked in project")

		if(nextImg.length) {
			currentImg.removeClass("active").css("z-index", -10);

			nextImg.addClass("active").css("z-index", 10);
		} 

		if(nextImg.length === 0) {
			
			nextImg.addClass("active").css("z-index", 10);

			console.log("start over")
		}

				
	
	});

		$(".prev").on("click", (e) => {
		const id = $(e.currentTarget).parent().attr('id')
		const currentImg = $('#' + id + " .active");
		const prevImg = currentImg.prev()
		console.log("clicked")

		if(prevImg.length) {
			currentImg.removeClass("active").css("z-index", -10);

			prevImg.addClass("active").css("z-index", 10);
		}
	});
});


let didScroll;
let lastScrollTop = 0;
let delta = 10;
let navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}
