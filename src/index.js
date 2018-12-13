"use strict";

import './scss/main.scss';
import { request } from 'https';

const url='http://nit.tron.net.ua/api/product/list';

window.onload=function(){
	$.get('http://nit.tron.net.ua/api/product/list', data => {
		for (var i = 0; i < data.length; ++i) {
			var currentTovar = data[i];

			var nameDiv = $('<div class="tovar_title"></div>');
			nameDiv.text(currentTovar.name);
			
			var img = $('<img class="someclass" />');
			img.attr('src', currentTovar.image_url);

            var priceDiv = $('<div class="tovar_price"></div>');
            priceDiv.text(currentTovar.price);

            var addButton = $('<div class="buy_button">buy</div>');
            addButton.click(() => {
                // make an order
                var request = `token=TjAEyKM7zro3FcZlFO4N`
                    + `&name=${prompt('name')}`
                    + `&phone=${prompt('phone')}`
                    + `&email=${prompt('email')}`
                    + `&products[${currentTovar.id}]=${prompt('how much?')}`;
                $.ajax({
                    type: "POST",
                    url: 'http://nit.tron.net.ua/api/order/add',
                    data: request,
                    success: data => {
                        alert(JSON.stringify(data));
                    }
                });
            });

            var div = $('<div class="tovar_cell"></div>');
			div.append(nameDiv);
			// div.append(descriptionDiv);
            div.append(img);
            div.append(priceDiv);
            div.append(addButton);

			$('#tovar_view').append(div);
		}
	});
}