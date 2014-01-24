/**
 * Functionality specific to Twenty Thirteen.
 *
 * Provides helper functions to enhance the theme experience.
 */



$(document).ready(function() {

	/**
	 * Fastclick library, to removed 300ms delay for
	 * taps on mobile.
	 */
	$(function() {
	    FastClick.attach(document.body);
	});

	/** 
	 * Scrolling for banners
	 * 
	 * Issues: bugs on iOS, safari devices.
	 * 
	 * @author Will Haynes
	 * @since Nov 2013 
	 */
	$(window).scroll(bannerScroll);
	function bannerScroll() {

		var backgroundImgHeight = 234,
			bannerHeight = 90;
		var scrollTop     = $(window).scrollTop(),
			windowHeight  = $(window).height();

		$('.section-banner').each( function() {
			
			var	elementOffset = $(this).offset().top,
			    distance      = (elementOffset - scrollTop);

			// log distance: console.log(windowHeight + ',' + distance);

			 if(distance > 0 && windowHeight > distance) {
		    	
		    	var	frac		  = (windowHeight - distance) / windowHeight,
		    		pos 		  = (backgroundImgHeight - bannerHeight) - (frac * (backgroundImgHeight-bannerHeight));

		    	$(this).css({'backgroundPosition':'0 -' + pos + 'px'});
	    	}

   		});

	};
	
	if($("#sidebar").length != 0 || $(".post-sidebar").length != 0){
		if($("#sidebar").length > 0){ 
			var sidebar = $(".sidebar-inner");
		} else if($(".post-sidebar").length > 0){ 
			var sidebar = $(".post-sidebar-scroll");
		}
		var sidebar_pos = sidebar.offset().top;
		if($("#disqus_thread").length > 0){ 
			var comments = $("#disqus_thread").offset().top;
		} else{ 
			var comments = 999999;
		}
		$(window).resize(function(){
			if(sidebar.hasClass('fixed-sidebar')){
				sidebar.removeClass('fixed-sidebar');
				sidebar_pos = sidebar.offset().top;
				if($("#disqus_thread").length > 0){ 
					var comments = $("#disqus_thread").offset().top;
				} else{ 
					var comments = 999999;
				}
				sidebar.addClass('fixed-sidebar');
			}
			else{
				sidebar_pos = sidebar.offset().top;
				if($("#disqus_thread").length > 0){ 
					var comments = $("#disqus_thread").offset().top;
				} else{ 
					var comments = 999999;
				}
			}
		});
		$(window).scroll(function(){
			var scrollTop = $(window).scrollTop();
			console.log(scrollTop + 78 + sidebar.height() + ', ' + sidebar_pos + ', ' + comments);
			if(((scrollTop + 78) > sidebar_pos) && ((scrollTop + 78 + sidebar.height()) < comments)){
				sidebar.addClass('fixed-sidebar')
			} else{
				sidebar.removeClass('fixed-sidebar');
			}
		});
	}
	
	window.setTimeout(function() {
		$(".add-so-button").css({'top':'-30px','display':'block'}).animate({'top':'43px','display':'block'},200);
	}, 400 /* but after 2000 ms */);
	$('#shoutoutText').focus();

	$(".search-button").click(function(e) {
		e.preventDefault();
		$(this).find('input').first().attr("value","");
	});
	
	$(".nav-control").click(function(e){
		$(".nav-container").toggleClass("nav-open");
	});
	$(window).resize(function(){
		if(window.innerWidth >= 1060 && window.innerWidth < 1220){
			$("#main-nav li a").css("padding","11px 18px 10px");
			$("#main-nav #searchform #s").blur().css({"width":"49px","text-align":"left"});
		} else if(window.innerWidth > 1220){
			$("#main-nav li a").css("padding","11px 18px 10px");
			$("#main-nav #searchform #s").blur().css({"width":"209px","text-align":"right"});
		}
	});

	$("#main-nav #searchform #s").focus(function(){
		if(window.innerWidth >= 1060 && window.innerWidth < 1220){
			$("#main-nav li a").css("padding","11px 9px 10px");
			$(this).css("width","+=144");
		}
		if(window.innerWidth > 1220){
			$(this).css("text-align","left");
		}
	});
	$("#main-nav #searchform").on("blur", "#s", function(){
		if(window.innerWidth >= 1060 && window.innerWidth < 1220){
			$("#main-nav li a").css("padding","11px 18px 10px");
			$(this).css("width","-=144");
		}
		if(window.innerWidth > 1220){
			$(this).css("text-align","right");
		}
	});

	
	//Smooth scrolling to anchors from anchor links on same page.
	$(function() {
	  $('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		  var target = $(this.hash);
		  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		  if (target.length) {
			$('html,body').animate({
			  scrollTop: target.offset().top - 79
			}, 1000);
			return false;
		  }
		}
	  });
	});

	$(window).scroll(function() {

		$(window).resize();

	});

});