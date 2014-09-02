$(document).ready(function() {
	//Comment textarea for items in order
	$('textarea.comment').focus(function() {
		$(this).removeClass('comment-blur').attr('placeholder','...');
	}).blur(function() {
		$(this).addClass('comment-blur').attr('placeholder','Введите название заявки');
		$(this).val($.trim($(this).val()).replace(/\s*[\r\n]+\s*/g, '\n')
		.replace(/(<[^\/][^>]*>)\s*/g, '$1')
		.replace(/\s*(<\/[^>]+>)/g, '$1'));
	});
});