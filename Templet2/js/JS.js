/* global $ , alert , console */
var myheader = $('.header');
$(function(){
	'use strict';
	myheader.height($(window).height());

	$(window).resize(function(){
		myheader.height($(window).height());
			$('.slider').each(function(){

			$(this).css('paddingTop',($(window).height() - $('.slider div').height()-30)/2);
			});
	});

	$(".links li a").click(function(){
		$(".links li a").removeClass("active");
		$(this).addClass("active");
	});

	$('.slider').each(function(){

		$(this).css('paddingTop',($(window).height() - $('.slider div').height()-30)/2);
	});


	$('.slider').bxSlider({

		pager :false,
	});



	$(".links li a").click(function(){
		$("html , body").animate({
			scrollTop: $('#'+$(this).data("val")).offset().top
			},1000);
	});


	$(window).on('beforeunload',function(){
   		$(this).scrollTop(0);
	});


		$('#Container').mixItUp();

		$('.shuffle li').click(function(){
			$(this).addClass("selected").siblings().removeClass("selected");
		});


		$('html').niceScroll({
			cursorcolor:"cyan",
			cursorwidth:'8px',
			cursorborder:'1px solid cyan'
		});
});

