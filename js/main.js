$(window).scroll(function() {
    $('#happend .happend-title').each(function(){
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+650) {
            $(this).addClass("fadeInDown");
        }
    });
});

$(window).scroll(function() {
    $('#happend .reward-time').each(function(){
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+650) {
            $(this).addClass("fadeInLeft");
        }
    });
});

$(window).scroll(function() {
    $('#happend .reward-travel').each(function(){
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+650) {
            $(this).addClass("fadeInUp");
        }
    });
});

$(window).scroll(function() {
    $('#happend .reward-values').each(function(){
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+650) {
            $(this).addClass("fadeInRight");
        }
    });
});

$(window).scroll(function() {
    $('#future .happend-title').each(function(){
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+650) {
            $(this).addClass("fadeInDown");
        }
    });
});

$(window).scroll(function() {
    $('#future .form').each(function(){
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+650) {
            $(this).addClass("fadeInUp");
        }
    });
});





 