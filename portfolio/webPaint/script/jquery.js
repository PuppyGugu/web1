$('.option').find('a').on('click',function(){
    $('a').removeClass('active');
    $(this).addClass('active');
    $('.all').hide();
    $($(this).attr('href')).show();
    return false;
});