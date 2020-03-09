// Alex -  - JS
'use strict';

$(document).ready(function() {
	
	let i=0;
	
	let sWord= new Array();
	sWord[0]='apple';
	sWord[1]='bank';
	sWord[2]='cat';
	sWord[3]='dog';
	sWord[4]='eagle';

	
	let sText = new Array();
	sText[0] = ' a round fruit with firm, white flesh and a green, red, or yellow skin.';
	sText[1] = '  an organization where people and businesses can invest or borrow money, change it to foreign money, etc., or a building where these services are offered.';
	sText[2] = ' a small animal with fur, four legs, a tail, and claws, usually kept as a pet or for catching mice.';
	sText[3] = ' a common animal with four legs, especially kept by people as a pet or to hunt or guard things.';
	sText[4] = ' a large, strong bird with a curved beak that eats meat and can see very well.';
	
	function runScreen(){ 
		i++;
		if (i >=sText.length){i=0;}
			
		$("p").text(sWord[i]);
		$("div").text(sText[i]);
	
	}; 	
	
	let timer = setInterval(runScreen, 3000);
	
});














