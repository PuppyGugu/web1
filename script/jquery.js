/* #menu */
$('.menu').children(':button').on('click',function(){
    if($(this).next('ul').children('li').css('display') == 'none'){
        $(this).next('ul').children('li').show();
    }else{
        $(this).next('ul').children('li').hide();
    }
});

/* search open */
$('.search').find('button').on('click',function(){
    $(this).hide();
    $(this).next('.searchGroup').show();
});

/* search close */
//$('.searchGroup').children('input[type=submit]').on('click',function(){
$('.searchGroup').children(':submit').on('click',function(){
    $(this).parent('.searchGroup').hide();
    $(this).parent('.searchGroup').prev('button').show();
});