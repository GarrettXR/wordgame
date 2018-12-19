$(document).ready(function(){
	
	//filters 3 letter words or greater
	var word = commonWords.filter(index => index.length >= 3)
	var selectWord = word[Math.floor(Math.random() * word.length)]
		console.log(selectWord)
	var blankSpaces = "";
	var wordLength = selectWord.length

	for (i = 0; i < wordLength; i++) {
    	var a = selectWord

    		if (a === " " ) {
      			blankSpaces += "_"
   			 }
  	}
  	document.getElementById("blankSpaces").innerHTML = blankSpaces;

  	var alphabetButtons = document.querySelector('.buttons')

  	alphabet.map(function(letter){

  			var buttonTemplate =`
  								<button class="alphabet">${letter}</button>
  								`
  			alphabetButtons.innerHTML += buttonTemplate
  	

  		})
  })


