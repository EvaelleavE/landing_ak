$(function() {
	$("#contacts__form").submit(function() {
		$.ajax({
			type: "POST",
			url: "php/post.php",
			data: $(this).serialize()
		}).done(function() {
			$(".contacts__massage").addClass("active").css('display', 'flex').hide().fadeIn(); 
			setTimeout(function(){ 
				jQuery("#contacts__form").trigger("reset"); 
				$(".contacts__massage").removeClass('active').fadeOut(); 
			}, 3000); 
		});
		return false;
	});

	var telInp = $('input[type="tel"]');
	telInp.each(function(){
		$(this).mask("+7 (999) 999-99-99");
	});

});