/* popUp close */
$('.popUpClose').on('click',function(){
    $('#popUp').hide();
});

/* menu animate */
$('.menu').find('a').on('click',function(){
    $('html, body').stop().animate({
        scrollTop:$($(this).attr('href')).offset().top
    },500);
    return false;
});

/* side open */
$('.sideBt').on('click',function(){
    $('#side').animate({
        'right':'0'
    },500);
    $('body').append('<div id="dim"></div>');
    $('#dim').fadeIn();
    return false;
});

/* side close animate */
$('.close').on('click',function(){
    $('#side').animate({
        'right':'-220px'
    },500);
    $('#dim').fadeOut(function(){
        $('#dim').remove();
    });
});

$('.sideInner').find('a').on('click',function(){
    $('#side').animate({
        'right':'-220px'
    },500);
    $('#dim').fadeOut(function(){
        $('#dim').remove();
    });
    $('html, body').stop().animate({
        scrollTop:$($(this).attr('href')).offset().top
    },500);
    return false;
});

$(document).on('click','#dim',function(){
    $('#side').animate({
        'right':'-220px'
    },500);
    $('#dim').fadeOut(function(){
        $('#dim').remove();
    });
});

/* main show */
$('#main').children('.txt').fadeIn(2000);

/* portfolio toggle */
$('#more').on('click',function(){
    if($(this).hasClass('fold') == false){
        $('.portfolioCon').slideDown(1000);
        $(this).css('transform','translateX(-50%) rotate(180deg)');
        $(this).addClass('fold');
    }else if($(this).hasClass('fold') == true){
//        $('.portfolioCon').not('.sample').slideUp(500);
//        $('.portfolioCon').not('div:eq(0)').slideUp(500);
//        $('.portfolioCon').not(':eq(0)').slideUp(500);
//        $('.portfolioCon').not(':gt(2)').slideUp(500);
//        $('.portfolioCon').not(':lt(2)').slideUp(500);
        $('.portfolioCon').not(':lt(2)').slideUp(500);
        $(this).css('transform','translateX(-50%) rotate(0deg)');
        $(this).removeClass('fold');
    }
    return false;
});







/*$('.skillBox').on('mouseenter',function(){
    $(this).children('img').attr('src',$(this).attr('src').replace('off','on'));
});*/

/* side - sideBody */
/*$('.sideBody').find('a').on('click',function(){
    $('.sideBody').find('a').removeClass('on');
    $(this).addClass('on');
    
    $('#contents').children('div').hide();
    $($(this).attr('href')).show();
    
    $('#side').animate({
        'right':'-220px'
    },500);
    $('#dim').fadeOut(function(){
        $('#dim').remove();
    });
});*/

/* sideTab */
/*$('#sideTab').find('a').on('click',function(){
    $('#sideTab').find('a').removeClass('on');
    $(this).addClass('on');
    $('#contents').children('div').hide();
    $($(this).attr('href')).show();
});*/













