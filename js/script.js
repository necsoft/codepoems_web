$(document).ready(function() {

    // Go to learn more
    $(".button_learn_more").click(function() {
        $('html,body').animate({
                scrollTop: $(".instance_02").offset().top
            },
            'slow');
    });

    responsive_elements();

    function responsive_elements() {
        var current_width_viewport = $(window).width();
        var current_height_viewport = $(window).height();

        $(".instance_02 h1").css("padding-top", current_height_viewport * 0.1 + "px");
        $(".instance_03 h1").css("padding-top", current_height_viewport * 0.15 + "px");
    }

    $(window).resize(function() {
        responsive_elements();
    })

});