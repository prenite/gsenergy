$(window).load(function () {

    $(function () {

        $('.btn1').hide();

        $('.contact img').hover(
            function () {
                $('.btn1').fadeIn();
            }, function () {
                $('.btn1').fadeOut();
            }
        );
    });
});