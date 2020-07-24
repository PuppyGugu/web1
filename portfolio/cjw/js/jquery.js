$(document).ready(function(){
    
    /* side open*/
    $('.menuBt').on('click',function(){
        $('.side').show();
//        $('body').css('position','fixed');
        $('body').append('<div class="dimm"></div>');
        $('.dimm').fadeIn();
        return false;
    });
    
    /* side close */
    $(document).on('click','.dimm',function(){
        $('.side').hide();
//        $('body').css('position','static');
        $('.dimm').fadeOut(function(){
            $('.dimm').remove();
        });
    });
    
    $('.layerPopup .close').on('click',function(){
        $(this).parents('.layerPopup').fadeOut();
        $('.dimm').fadeOut(function(){
            $('.dimm').remove();
        });
    });
    
    /*$('.dimm').on('click',function(){
        $(this).fadeOut(function(){
            $(this).remove();
        });
    });*/
    
    /* side smallMenu */
    $('.bigMenu>li>a').on('click',function(){
        if($(this).hasClass('active')){
            $(this).removeClass('active').find('img').css('transform','rotate(0deg)').parent().next().hide();
        }else{
            $(this).addClass('active').find('img').css('transform','rotate(180deg)').parent().next().show().parent().siblings().find('>a').removeClass('active').find('img').css('transform','rotate(0deg)').parent().next().hide();
        };
        return false;
    });
    
    /* search */
    $('.searchBt').on('click',function(){
        $('.search').show();
    });
    
    $('.exit').on('click',function(){
        $('.search').hide();
    });
    
    /* slickBox */
    $('.slickBox').slick({
        slideToShow:1,
        arrows:false,
        dots:true,
        autoplay:true,
    });
    
    //slick 클릭시 슬라이드 멈춤 효과
//    $('.stop').on('click',function(){
//        $('.slickBox').slick('slickPause');
//    });
    
    /*$('.btnPlay').clickToggle(function(){
        $('.slider').slickPlay();
    },function() {
        $('.slider').slickPause();
    });*/
    
    /*$('.visualCon .btn_play').click(function(){
        if(sw==true){
            $(this).addClass('on'); 
            $('.visualCon').slick('slickPause'); //슬라이더 자동실행 일시정지
        } else {
            $(this).removeClass('on'); 
            $('.visualCon').slick('slickPlay'); //슬라이더 자동실행
        }
        sw = !sw;
    });*/
    
    
    
    /*$('.pause').on('click', function() {
        $('.slider')
        .slick('slickPause')
        .slick('slickSetOption', 'pauseOnDotsHover', false);
    });

    $('.play').on('click', function() {
        $('.slider')
        .slick('slickPlay')
        .slick('slickSetOption', 'pauseOnDotsHover', true);
    });*/
    
    /* pause 버튼 생성 */
    $('.slick-dots').append('<li class="pause"><button></button></li>')
    
    /* slick-pause */
    if($('.slick-dots') == slick('slickPlay')){
        $('.pause').on('click',function(){
            $(this).slick('slickPause');
        });
    }else{
        $('.pause').on('click',function(){
            $(this).slick('slickPlay');
        });
    }
    
    
});














