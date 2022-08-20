var visitDate=new Date();
var visitTime=String(Math.floor(visitDate.getTime()/1000));
var visitCode=visitTime.concat(String(Math.floor(Math.random()*10+1)-1)).concat(String(Math.floor(Math.random()*10+1)-1)).concat(String(Math.floor(Math.random()*10+1)-1)).concat(String(Math.floor(Math.random()*10+1)-1));

var parser = document.createElement('a');
parser.href = window.location.href.replace("s3.amazonaws.com/", "");

var urlHost= parser.host && parser.host.toLowerCase();
var visitUrl=parser.pathname && parser.pathname;

var visitUrls=visitUrl.split("/");

/*if(visitUrls.length>=4&&urlHost=='online.fliphtml5.com'){
	var uLink=visitUrls[1];
	var bLink=visitUrls[2];
	jQuery(document).ready(function(){
			getBookCaseConfig("http://stat.fliphtml5.com/statistic-server/add-book-visitinfo.php?uLink="+uLink+"&bLink="+bLink+"&type=1&page=1&code="+visitCode);
		});
}*/

//ad-banner
if(visitUrls.length>=4){
	if(urlHost=='online.fliphtml5.com'){
		$.getScript( "../getuserinfo.js" )
		.done(function( script, textStatus ) {
			if(user_type==0){

				var ads = [
					{
						name: 'fh_small',
						width: 320,
						height: 50,
						googleAd: '<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script> <ins class="adsbygoogle" style="display:inline-block;width:320px;height:50px" data-ad-client="ca-pub-9840740068404348" data-ad-slot="2711178962"></ins> <script> (adsbygoogle = window.adsbygoogle || []).push({}); </script>'
					},
					{
						name: 'fh_middle',
						width: 468,
						height: 60,
						googleAd: '<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script> <ins class="adsbygoogle" style="display:inline-block;width:468px;height:60px" data-ad-client="ca-pub-9840740068404348" data-ad-slot="3498836391"></ins> <script> (adsbygoogle = window.adsbygoogle || []).push({}); </script>'
					},
					{
						name: 'fh_large',
						width: 728,
						height: 90,
						googleAd: '<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script><ins class="adsbygoogle" style="display:inline-block;width:728px;height:90px" data-ad-client="ca-pub-9840740068404348" data-ad-slot="8863807747"></ins> <script> (adsbygoogle = window.adsbygoogle || []).push({}); </script>'
					}
				];

				var ad;
				var windowWidth = $(window).width();
				if (windowWidth >= 1000) {
					ad = ads[2];
				} else if (windowWidth < 1000 && windowWidth >= 600) {
					ad = ads[1];
				} else {
					ad = ads[0];
				}

				//console.log(ad)

				var iframeSrc, imgSrc;
				if (location.host == 'localhost') {
					imgSrc = "/visit/" + ad.name + ".png";
					// iframeSrc = "/visit/banner_" + ad.width + "_" + ad.height + ".html"; 
				} else {
					imgSrc = "//static.fliphtml5.com/book/banner/" + ad.name + ".png";
					// iframeSrc = "//static.fliphtml5.com/book/banner/banner_" + ad.width + "_" + ad.height + ".html";
				}

				var $body = $("body");
				var $container = $("<div class='fh5---banner---container'></div>").css({
					display: 'none',
					zIndex: 99999,
					position: "fixed",
					width: ad.width + 'px',
					height: ad.height + 'px',
					left: "50%",
					marginLeft: -ad.width / 2,
					bottom: 25,
					border: "1px solid #181818",
					background: "white"
				});

				var $adsText = $("<div>Ads</div>").css({
					position: "absolute",
					left: "0",
					bottom: "100%",
					background: "white",
					border: "1px solid gray",
					color: "gray",
					padding: "2px 6px",
					fontSize: "13px",
					lineHeight: "13px",
					marginBottom: "2px"
				});

				var $closeBtn = $("<div style=''></div>").css({
					cursor: "pointer",
					position: "absolute",
					border: "1px solid #181818",
					width: 22,
					height: 22,
					cursor: "pointer",
					background: "white url(//static.fliphtml5.com/book/banner/close.png) no-repeat 3px 3px",
					left: "100%",
					top: "0px",
					marginLeft: "2px"
				});

				$container
					.append($closeBtn)
					.append($adsText);

				var $fh_banner = $("<a href='//fliphtml5.com?gad' target='_blank'><img src='" + imgSrc + "' alt='' /></a>").css({
					position: "absolute",
					width: "100%",
					height: "100%"
				});

				if(disable_ad==1){
					addFH5Ad()
				} else {
					if(isPhone()||isPad()){
						addMobileGoogleAd()
					} else {
						addPCGoogleAd()
					}
				}

				setTimeout(function() {
					$container.height(ad.height).fadeIn(400);
				}, 2000);

				$closeBtn.on("click", function() {
					$container.remove();
				});

				function addFH5Ad () {
					$container
						.append($fh_banner)
						.appendTo($body);
				}

				function addPCGoogleAd () {
					$container
						.append($(ad.googleAd))
						.appendTo($body);
				}

				function addMobileGoogleAd () {
					$("body").append(
						'<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script><script>(adsbygoogle = window.adsbygoogle || []).push({google_ad_client: "ca-pub-9840740068404348",enable_page_level_ads: true});</script>'
						);
				}
				// ads end
			}
		})
		.fail(function( jqxhr, settings, exception ) {
		//�좄슬鸚김뇰
		});
	}
}

function sendvisitinfo(type,page){
	var type=type;
	var page=page;
	if(type==null){
		var type='';
	}
	if(page==null){
		var page='';
	}

	var isAdd=false;
	if(visitUrls.length>=4){
		var uLink=visitUrls[1];
		var bLink=visitUrls[2];
		if(urlHost=='online.fliphtml5.com'){
			 isAdd=true;
		}else if((urlHost=='fliphtml5.com')&&(visitUrls[1]=='read')){
			var uLink=visitUrls[2];
			var bLink=visitUrls[3];
			isAdd=true;
		}else{
			if(uLink=='books'){
				uLink='domain_'+urlHost;
				isAdd=true;
			}
		}
	}
	if(isAdd==true){
		jQuery(document).ready(function(){
			getBookCaseConfig("//newstat.fliphtml5.com/bookvisitinfo.html?uLink="+uLink+"&bLink="+bLink+"&type="+type+"&page="+page+"&code="+visitCode);
		});
	}
}

function getBookCaseConfig(url, callBack){
	$.ajax({
	   	async:true,
	   	url: url,
	   	type: "GET",
	   	dataType: 'script',
	   	jsonp: 'jsoncallback',
	   	timeout: 5000,
	   	beforeSend: function(){
	   	},
	   	success: function (json, s) {
	   	},
	    complete: function(XMLHttpRequest, textStatus){
	    	if (textStatus == "success" && typeof callBack == "function") {
	    		callBack();
	    	};
	   	},
	   	error: function(xhr){
	   	}
	});
};