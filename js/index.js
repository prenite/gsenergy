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


    $('.nav a').mouseover(function () {
        $(this).css({ color: '#4ece9d' })
    })
    $('.nav a').mouseleave(function () {
        $(this).css({ color: 'white' })
    })

    $('.sub a').mouseover(function () {
        $(this).css({ color: '#F58020'})
    })
    $('.sub a').mouseleave(function () {
        $(this).css({ color: 'rgb(78, 78, 78)' })
    })
    


    $('#main_in .box').delay(1000).stop().animate({ top: '30.5vw', opacity: 0.5 });

    $('#main_in .boxin').delay(1000).stop().animate({ top: '32vw'});

    /*$(function () {

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

    });*/



})