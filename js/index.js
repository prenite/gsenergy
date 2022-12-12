$(document).ready(function () {


    $('.mn_area').hide();
    let key = true;
    console.log(key);

    $('.nav li a').mouseenter(function () {
        if (key == true) {
            key = false;
            $('.mn_area').show().css({ height: 0 }).animate({ height: '230px' });
        }
    });
    $('.mn_area').mouseleave(function () {
        key = true;
        $(this).css({ height: '230px' }).animate({ height: 0 })
    });


    $('#main_in .box').delay(1000).stop().animate({ top: '25vw', opacity: 0.5 });


    $(function () {

        $('.btn1').hide();

        $('.contact img').mouseover(
            function () {
                $('.btn1').fadeIn();
            }
        )
        $('.contact img').mouseleave(
            function () {
                $('.btn1').fadeOut();
            }
        )

    });



})