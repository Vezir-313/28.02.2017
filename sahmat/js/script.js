function firstWhite(){

	for(var i = 1; i<= 8; i++){
		if (i%2!=0) { document.write('<div></div>'); }

		else{ document.write('<div class="black"></div>'); }
	}
}

function firstBlack(){
	for(var j = 1; j<= 8; j++){
		if (j%2==0) {document.write('<div></div>');}
		else{document.write('<div class="black"></div>');}
	}	
}

document.write('<div class="taxta">');
	for(var z = 1; z<= 8; z++){
		if (z%2!=0) { firstWhite(); }

		else { firstBlack(); }
      }
document.write('</div');


