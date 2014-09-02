$(document).ready(function (){
	$("[data-toggle='tooltip']").tooltip();

	$('.spinner').each(function(){
		var mod = $(this).data('mod');
		$(this).spinner({
			max: '99999',
			min: '0',
			value: mod,
			step: mod
		})
		.tooltip({
			trigger: 'hover',
			placement: 'bottom',
			container: 'body',
			title: 'Для данного товара кратность равна ' + mod + ' и было произведено увеличение количества товаров в большую сторону'
		});
	});
	$('.spinner').on('focusout click', function(event){
		var spinner = $(this);
		var value = spinner.spinner('value');
		var mod = spinner.data('mod');
		var isMod = value % mod;
		var unmod = mod - isMod;
		if (isMod != 0) {
			spinner.spinner('value', value + unmod);
		}
	});

	// Textarea autosize plugin
	$('textarea[data-textarea="autosize"]').autosize();

	bootbox.setDefaults({
		locale: 'ru'
	});

	$('.remove').click(function(){
		bootbox.dialog({
			message: "Вы увелены что хотите удалить элемент?",
			title: "Удаление элемента",
			buttons: {
				danger: {
					label: "Да",
					className: "btn-danger",
					callback: function() {
						console.log("uh oh, look out!");
					}
				},
				main: {
					label: "Нет",
					className: "btn-primary",
					callback: function() {
						console.log("Primary button");
					}
				}
			}
		});
		return false;
	});
	

	$('.bill').click(function(){
		bootbox.dialog({
			message: "Ожидайте оплаты, максимальное время 30 секунд",
			title: "Производится оплата",
			buttons: {
				main: {
					label: "Продолжить",
					className: "btn-primary",
					callback: function() {
						console.log("Primary button");
					}
				}
			}
		});
		return false;
	});


	$('.dropdown-toggle').dropdown();
	$(".collapse").collapse();

	$('[rel=href]').click(function(){
		location.href = $(this).data('href');
	});
	// tiny carousel-x
	$('.tiny-carousel-x').tinycarousel();
});