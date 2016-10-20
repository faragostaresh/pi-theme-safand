(function ($) {
    $(document).ready(function () {
        $(".pi-mobile .pi-section").find(".col-md-4").addClass("col-xs-4").removeClass("col-md-4");
        $(".pi-mobile .pi-section").find(".col-md-8").addClass("col-xs-8").removeClass("col-md-8");
        $(".pi-mobile .pi-section").find(".col-md-3").addClass("col-xs-3").removeClass("col-md-3");
        $(".pi-mobile .pi-section").find(".col-md-9").addClass("col-xs-8").removeClass("col-md-9");

        $(".pi-mobile .pi-section").find(".col-sm-1").removeClass("col-sm-1");
        $(".pi-mobile .pi-section").find(".col-sm-2").removeClass("col-sm-2");
        $(".pi-mobile .pi-section").find(".col-sm-3").removeClass("col-sm-3");
        $(".pi-mobile .pi-section").find(".col-sm-4").removeClass("col-sm-4");
        $(".pi-mobile .pi-section").find(".col-sm-5").removeClass("col-sm-5");
        $(".pi-mobile .pi-section").find(".col-sm-6").removeClass("col-sm-6");
        $(".pi-mobile .pi-section").find(".col-sm-7").removeClass("col-sm-7");
        $(".pi-mobile .pi-section").find(".col-sm-8").removeClass("col-sm-8");
        $(".pi-mobile .pi-section").find(".col-sm-9").removeClass("col-sm-9");
        $(".pi-mobile .pi-section").find(".col-sm-10").removeClass("col-sm-10");
        $(".pi-mobile .pi-section").find(".col-sm-11").removeClass("col-sm-11");
        $(".pi-mobile .pi-section").find(".col-sm-12").removeClass("col-sm-12");

        $(".pi-mobile .guide-block").find(".col-xs-12").removeClass("col-xs-12");
        $(".pi-mobile .guide-block").find(".col-md-6").addClass("col-xs-6").removeClass("col-md-6");
        $(".pi-mobile .guide-block").find(".col-md-3").addClass("col-xs-3").removeClass("col-md-3");

        $(".pi-mobile .widget-media-list").find(".col-xs-2").removeClass("col-xs-2");
        $(".pi-mobile .widget-media-list").find(".col-md-1").addClass("col-xs-1").removeClass("col-md-1");
    });
    $(document).ready(function () {
        $(".dropdown-toggle").click(function () {
            window.open($(this).attr("href"),"_self");
        });
    });
    $(document).ready(function () {
        $('#pi-shop .shop-block .owl-carousel').owlCarousel({
            margin: 3,
            nav: true,
            rtl: true,
            autoplay: true,
            dots: false,
            autoplayTimeout: 12000,
            autoplayHoverPause: true,
            navText: ['<i class="owl-prev fa fa-angle-left"></i>', '<i class="owl-next fa fa-angle-right"></i>'],
            responsive: {
                0: {items: 2},
                400: {items: 3},
                600: {items: 4},
                1000: {items: 5}
            }
        })
    });
    $(document).ready(function () {
        $('#pi-system .owl-carousel').owlCarousel({
            margin: 3,
            nav: true,
            rtl: true,
            autoplay: true,
            dots: false,
            autoplayTimeout: 12000,
            autoplayHoverPause: true,
            navText: ['<i class="owl-prev fa fa-angle-left"></i>', '<i class="owl-next fa fa-angle-right"></i>'],
            responsive: {
                0: {items: 2},
                400: {items: 3},
                600: {items: 4},
                1000: {items: 5}
            }
        })
    });
    $(document).ready(function () {
        $('.hover-captions').hover(
            function () {
                $(this).find('.hover-caption').slideDown(250);
            },
            function () {
                $(this).find('.hover-caption').slideUp(250);
            }
        );
    });

    $(document).ready(function () {
var tabCarousel = setInterval(function() {
    var tabs = $('.pi-panel-tab-indicators > li'),
        active = tabs.filter('.active'),
        next = active.next('li'),
        toClick = next.length ? next.find('a') : tabs.eq(0).find('a');

    toClick.trigger('click');
}, 15000);
});

    $(document).ready(function () {
    //Fix navbar multiple level
    var navbar = $('.pi-navbar-nav');
    var hasBrand = navbar.parents('.navbar').find('.navbar-brand').length;
    navbar.find('>li').each(function () {
        var $this = $(this);
        var caretStr = '<span class="pi-navbar-caret"></span>';
        caretStr += '<span class="pi-navbar-caret pi-navbar-caret-outer"></span>';
        if ($this.find('li').length) {
            $this.append(caretStr);
        }
    });
    navbar.find('ul').addClass('dropdown-menu');

    if (!hasBrand) {
        navbar.css('marginLeft', '-15px');
    }
});

})(jQuery)