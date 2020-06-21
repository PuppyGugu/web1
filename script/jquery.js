/* popUpClose */
$('.popUpClose').on('click',function(){
    $('#popUp').hide();
});

/* sideOpen */
$('.sideBt').on('click',function(){
    $('#side').animate({
        'right':'0'
    },500);
    $('body').append('<div id="dim"></div>');
    $('#dim').fadeIn();
    return false;
});

/* sideClose - close */
$('.close').on('click',function(){
    $('#side').animate({
        'right':'-220px'
    },500);
    $('#dim').fadeOut(function(){
        $('#dim').remove();
    });
});

/* side a - close */
$('.sideInner').find('a').on('click',function(){
    $('#side').animate({
        'right':'-220px'
    },500);
    $('#dim').fadeOut(function(){
        $('#dim').remove();
    });
});

/* sideClose - dim */
$(document).on('click','#dim',function(){
    $('#side').animate({
        'right':'-220px'
    },500);
    $('#dim').fadeOut(function(){
        $('#dim').remove();
    });
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

/* menuTab */
/*$('#menuTab').find('a').on('click',function(){
    $('#menuTab').find('a').removeClass('on');
    $(this).addClass('on');
    $('#contents').children('div').hide();
    $($(this).attr('href')).show();
});*/
















