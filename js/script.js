$(function() {
    // This will select everything with the class smoothScroll
    // This should prevent problems with carousel, scrollspy, etc...
    $('a[href*="#"]').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - 60
                }, 800); // The number here represents the speed of the scroll in milliseconds
                return false;
            }
        }
    });
});

function openHamburger() {
    var x = document.getElementById("myNav");
    if (x.className === "topnav") {
        x.className += " open";
    } else {
        x.className = "topnav";
    }
}