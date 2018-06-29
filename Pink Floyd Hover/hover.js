$(document).ready(function() {

	// function for swapping attr values
	// must be passed a jquery object
	function swap(img) {
		var temp = img.attr('src');
		img.attr('src', img.attr('data-alt-src'));
		img.attr('data-alt-src', temp);
	}

	$('img').hover(function(){
		swap($(this));
	}, function(){
		swap($(this));
	});


});