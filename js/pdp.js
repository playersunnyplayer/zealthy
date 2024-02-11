$(function () {
    $('.add').on('click',function(){
        var $qty=$(this).closest('p').find('.qty');
        var currentVal = parseInt($qty.val());
        if (!isNaN(currentVal)) {
            $qty.val(currentVal + 1);
        }
    });
    $('.minus').on('click',function(){
        var $qty=$(this).closest('p').find('.qty');
        var currentVal = parseInt($qty.val());
        if (!isNaN(currentVal) && currentVal > 0) {
            $qty.val(currentVal - 1);
        }
    });
});

$('.datepicker').datepicker({
    format: "dd/mm/yyyy",
    autoHide: true
});

$('.relatedServices-carousel').owlCarousel({
    loop: true,
    responsiveClass: true,
    dots: false,
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 3,
        },
        1000: {
            items: 4,
        }
    }
})

$(".leftImgThumbs img").click(function() {
    let imageName = $(this).attr("data-img");
    $("#mainImg").attr("src", imageName);
    $("#fancyboxlink").attr("href", imageName);
})

// sticky menu scrollspy
$('body').scrollspy({ target: '#navbar-example2' })
var bottom = $('.stickyMenuSec').offset().top + 500;
$(window).scroll(function () {
  console.log($('.stickyMenuSec').offset().top)
  if ($(this).scrollTop() > bottom) {
    $('.stickyMenuSec').addClass('fixed');
  }
  else {
    $('.stickyMenuSec').removeClass('fixed');
  }
});