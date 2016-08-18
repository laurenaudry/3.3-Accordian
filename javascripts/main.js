"use strict";

($(function () {
  var $bodyElement = $("[data-js=body]");

  $(function() {
  	$('.accordion-title').on('click',function() {
  		$('.accordion-content').slideUp('fast');
  		$(this).next('.accordion-content').slideDown('fast');
  	});
  });
}));
