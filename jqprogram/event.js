// Alex -  - JS
'use strict';

$(document).ready(function() {
	//first
	let clicker1 = $('#first');
	clicker1.on('click', clickHandler1);

	function clickHandler1() {
		let box = $('#message-box1');

		if (box.hasClass('hidden')) {
			box.attr('class', '');
		} else {
			box.attr('class', 'hidden');
		}
		
		$(box).text(' a round fruit with firm, white flesh and a green, red, or yellow skin.');
	}

	//second
	let clicker2 = $('#second');
	clicker2.on('click', clickHandler2);

	function clickHandler2() {
		let box = $('#message-box2');

		if (box.hasClass('hidden')) {
			box.attr('class', '');
		} else {
			box.attr('class', 'hidden');
		}
		
		$(box).text('  an organization where people and businesses can invest or borrow money, change it to foreign money, etc., or a building where these services are offered.');
	}

	//third
	let clicker3 = $('#third');
	clicker3.on('click', clickHandler3);

	function clickHandler3() {
		let box = $('#message-box3');

		if (box.hasClass('hidden')) {
			box.attr('class', '');
		} else {
			box.attr('class', 'hidden');
		}
		
		$(box).text(' a small animal with fur, four legs, a tail, and claws, usually kept as a pet or for catching mice.');
	}
	
	//forth
	let clicker4 = $('#forth');
	clicker4.on('click', clickHandler4);

	function clickHandler4() {
		let box = $('#message-box4');

		if (box.hasClass('hidden')) {
			box.attr('class', '');
		} else {
			box.attr('class', 'hidden');
		}
		
		$(box).text(' a common animal with four legs, especially kept by people as a pet or to hunt or guard things.');
	}

	//fifth
	let clicker5 = $('#fifth');
	clicker5.on('click', clickHandler5);

	function clickHandler5() {
		let box = $('#message-box5');

		if (box.hasClass('hidden')) {
			box.attr('class', '');
		} else {
			box.attr('class', 'hidden');
		}
		
		$(box).text(' a large, strong bird with a curved beak that eats meat and can see very well.');
	}
});














