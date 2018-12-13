;const url='http://nit.tron.net.ua/api/product/list';

window.onload=function(){
	$.get('http://nit.tron.net.ua/api/product/list', function( data ) {
		for (var i = 0; i < data.length; ++i) {
			var currentTovar = data[i];

			var nameDiv = $('<div></div>');
			nameDiv.text(currentTovar.name);
			
			var descriptionDiv = $('<div></div>');
			descriptionDiv.text(currentTovar.description);

			var img = $('<img class="someclass" />');
			img.attr('src', currentTovar.image_url);

            var priceDiv = $('<div></div>');
            priceDiv.text(currentTovar.price);

			var div = $('<div class="tovar_cell"></div>');
			div.append(nameDiv);
			div.append(descriptionDiv);
            div.append(img);
            div.append(priceDiv);

			$('#tovar_view').append(div);
		}
	});

	// make an order
	$.post(
		'http://nit.tron.net.ua/api/order/add',
		{
			'token': 'TjAEyKM7zro3FcZlFO4N',
			'name': $('#name_field').value,
			'phone': '999',
			'email': 'asd@gmail.com',
		},
		data => {
			console.log(data);
		}
	);
}

console.log(`The time is ${new Date()}`);