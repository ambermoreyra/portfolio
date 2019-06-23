$(function() {

    /* Scroll to DOM Element */
    $('.btn-scroll-to').on('click', function() {
        var scrollTo = $(this).attr('data-scroll-to'),
            offset = 0;
        $('html, body').animate({
            scrollTop: $(scrollTo).offset().top - offset,
        }, 1000);
    });

    /* Add CSS animation class on scrolling */
    inView.offset(100);

    inView('.started').on('enter', function() {
        $('.started-item').addClass('active');
        }).on('exit', function () {
            $('.started-item').removeClass('active');
    });

    inView('.html-structure').on('enter', function() {
        $('.html-structure-item').addClass('active');
    }).on('exit', function () {
        $('.html-structure-item').removeClass('active');
    });

    inView('.css-structure').on('enter', function() {
        $('.css-structure-item').addClass('active');
    }).on('exit', function () {
        $('.css-structure-item').removeClass('active');
    });

    inView('.java-script').on('enter', function() {
        $('.java-script-item').addClass('active');
    }).on('exit', function () {
        $('.java-script-item').removeClass('active');
    });

    inView('.sources-credits').on('enter', function() {
        $('.sources-credits-item').addClass('active');
    }).on('exit', function () {
        $('.sources-credits-item').removeClass('active');
    });

    /* Highlight */
    $('pre, code').each(function(i, block) {
        hljs.highlightBlock(block);
    });

});