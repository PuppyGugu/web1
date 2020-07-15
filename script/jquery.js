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

/* popUp close */
$('.popUpClose').on('click',function(){
    $('#popUp').hide();
});





/* contents tit script */
$(document).on('scroll',function(){
    var aboutTit = 'hide';
    var skillTit = 'hide';
    var portfolioTit = 'hide';
    var contactTit = 'hide';
    var aboutTop = $('#about').offset().top-400;
    var skillTop = $('#skill').offset().top-400;
    var portfolioTop = $('#portfolio').offset().top-400;
    var contactTop = $('#contact').offset().top-400;
    $(document).on('scroll',function(){
        var st = $(document).scrollTop();
        if(st >= aboutTop && aboutTit == 'hide'){
            $('#about').find('.tit').css({
                'transform':'translateX(0)','visibility':'visible'
            });
            aboutTit = 'show';
        }else if(st < aboutTop && aboutTit == 'show'){
            $('#about').find('.tit').css({
                'transform':'translateX(-20%)','visibility':'hidden'
            });
            aboutTit = 'hide';
        }
        if(st >= skillTop && skillTit == 'hide'){
            $('#skill').find('.tit').css({
                'transform':'translateX(0)','visibility':'visible'
            });
            skillTit = 'show';
        }else if(st < skillTop && skillTit == 'show'){
            $('#skill').find('.tit').css({
                'transform':'translateX(-20%)','visibility':'hidden'
            });
            skillTit = 'hide';
        }
        if(st >= portfolioTop && portfolioTit == 'hide'){
            $('#portfolio').find('.tit').css({
                'transform':'translateX(0)','visibility':'visible'
            });
            portfolioTit = 'show';
        }else if(st < portfolioTop && portfolioTit == 'show'){
            $('#portfolio').find('.tit').css({
                'transform':'translateX(-20%)','visibility':'hidden'
            });
            portfolioTit = 'hide';
        }
        if(st >= contactTop && contactTit == 'hide'){
            $('#contact').find('.tit').css({
                'transform':'translateX(0)','visibility':'visible'
            });
            contactTit = 'show';
        }else if(st < contactTop && contactTit == 'show'){
            $('#contact').find('.tit').css({
                'transform':'translateX(-20%)','visibility':'hidden'
            });
            contactTit = 'hide';
        }
    });
});















