/* sideOpen */
$('.sideBt').on('click',function(){
    $('#side').animate({
        'right':'0'
    },500);
    $('body').append('<div id="dim"></div>',function(){
        $('#dim').fadeIn();
    });
    return false;
});

/* sideClose */
$('.close').on('click',function(){
    $('#side').animate({
        'right':'-220px'
    },500);
    $('#dim').fadeOut(function(){
        $('#dim').remove();
    });
});










