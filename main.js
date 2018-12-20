$(document).ready(function(){
	
	//filters 3 letter words or greater
	var word = commonWords.filter(index => index.length >= 3)
	
  var selectWord = word[Math.floor(Math.random() * word.length)]
		console.log(selectWord)
	
  var wordLength = selectWord.length
 
  var answer = ""
  
  for (i = 0; i < wordLength; i++) {
    	answer += '_'
  	} 
  	document.getElementById("blankSpaces").innerHTML = answer;
  	 
     var alphabetButtons = document.querySelector('.buttons')

  	 alphabet.map(function(letter){

  			var buttonTemplate =`
  								<button class ="alphabet" id=${letter}>${letter}</button>
  								`
                  
  			alphabetButtons.innerHTML += buttonTemplate
  
  	var response = $(".alphabet").on("click", function(){
       var val = $(this).text()
       console.log($(this))
       if (selectWord == val){
        answer += val
        }  
       document.getElementById("blankSpaces").innerHTML = answer;
      })
   


  })
})

