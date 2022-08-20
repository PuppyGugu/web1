jQuery(document).ready(function(){
	(function($){
		//headAttack();
		cStop();
	})(jQuery);
});

function headAttack(){
	(function($){
		var $bcAdd = '';		
		if($('body').hasClass('wrapMain')) $focusLink1 = './';
		else if($('body').hasClass('wrapSub')) $focusLink1 = '../';

		var $bcAdd2 = '';
		if($('body').hasClass('wrapMain')) $focusLink2 = '../../';
		else if($('body').hasClass('wrapSub')) $focusLink2 = '../../../';

		var $info = { 
			snsTitle    : '피움 36.5 KANGWONLAND WELFARE FOUNDATION MAGAZINE 2021. WINTER vol.16' , 
			snsImage	: 'images/sns/sns_img.jpg',
			siteURL     : 'http://klf.or.kr/ebook/',
			description : 'EMPATHY 2021년 <피움 36.5>는 우리 곁을 지켜준 ‘HERO’의 이야기를 담았습니다. Help(지원), Empathy(공감), Relationship(관계), Obligation(책임) 등 4가지 주제를 중심으로 각 호마다 폐광지역의 HERO를 소개합니다.',
			keywords    : '피움, 36.5, 이북, 2021, vol.16, 사랑, 피우다, 계간',
			faviconLink : 'images/common/favicon.ico'
		};

		$('head').prepend(
		    '<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" \/>'+
		    '<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" \/>'+
		    '<meta name=\"author\" content=\"user\" \/>'+
		    '<meta name=\"viewport\" content=\"width=device-width, minimum-scale=1, maximum-scale=1\" \/>'+
		    '<meta name=\"apple-mobile-web-app-capable\" content=\"yes\" \/>'+
			'<meta name=\"apple-mobile-web-app-status-bar-style\" content=\"black\" \/>'+
		    '<meta name=\"format-detection\" content=\"telephone=no\" \/>'+
		    '<meta property=\"og:type\" content=\"website\" \/>'+
		    '<meta property=\"og:image\" content=\"' + $focusLink1 + $info.snsImage + '" \/>'+
			'<meta property=\"og:title\" content=\"' + $info.snsTitle + '\" \/>'+
			'<meta property=\"og:site_name\" content=\"' + $info.snsTitle + '\" \/>'+
			'<meta property=\"og:url\" content=\"' + $info.siteURL + '\" \/>'+
			'<meta property=\"og:description\" content=\"' + $info.description + '\" \/>'+
			'<meta name=\"twitter:title\" content=\"' + $info.snsTitle + '\" \/>'+
			'<meta name=\"twitter:site\" content=\"' + $info.siteURL + '\" \/>'+
			'<meta name=\"twitter:image\" content=\"' + $focusLink1 + $info.snsImage + '\" \/>'+
			'<meta name=\"twitter:description\" content=\"' + $info.description + '\" \/>'+
			'<meta name=\"nate:title\" content=\"' + $info.snsTitle + '\" \/>'+
			'<meta name=\"nate:site_name\" content=\"' + $info.webTitle + '\" \/>'+
			'<meta name=\"nate:image\" content=\"' + $focusLink1 + $info.snsImage + '\" \/>'+
			'<meta name=\"nate:url\" content=\"' + $info.siteURL + '\" \/>'+
			'<meta name=\"nate:description\" content=\"' + $info.description + '\" \/>'+
			'<meta name=\"description\" content=\"' + $info.description + '\" \/>'+
			'<meta name=\"keywords\" content=\"' + $info.keywords + '\" \/>'+
			'<meta name=\"robots\" content=\"none\" \/>'+
			'<link href=\"' + $focusLink1 + $info.snsImage + '\" rel=\"image_src\" \/>'+
			'<link href=\"' + $focusLink1 + $info.faviconLink + '\" type=\"image/x-icon\" rel=\"shortcut icon\" />'+
			'<link href=\"' + $focusLink1 + $info.faviconLink + '\" type=\"image/x-icon\" rel=\"icon\" />'
		);
		
	})(jQuery);
}


function cStop(){
	(function($){

        $(document).on("contextmenu",function(e){
            //console.log("c"+e);
            return false;
        });

        $(document).on("dragstart",function(e){
            //console.log("d"+e);
            return false;
        });

        $(document).on("selectstart",function(e){
            //console.log("s"+e);
            return false;
        }); 

        $(document).on("contextmenu dragstart selectstart",function(e){
            return false;
        });

        $(document).on('keydown',function(e){
			if ( e.keyCode == 123 ) { //F12
				e.preventDefault();
				e.returnValue = false;
			}
		});
	})(jQuery);
}

//<![CDATA[
function disableSelection(target){
    //For IE This code will work
    if (typeof target.onselectstart!="undefined") 
    target.onselectstart=function(){return false}
    
    //For Firefox This code will work
    else if (typeof target.style.MozUserSelect!="undefined") 
    target.style.MozUserSelect="none"
    
    //All other  (ie: Opera) This code will work
    else 
    target.onmousedown=function(){return false}
    target.style.cursor = "default";
}
//]]>


