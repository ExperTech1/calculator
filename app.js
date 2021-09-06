function getHistory(){
	return document.getElementById("history-value").innerText;
}
function printHistory(num){
	return document.getElementById("history-value").innerText=num;
}
function getOutput(){
    return document.getElementById("output-value").innerText;
}
function printOutput(num){
	if (num == ""){
		return document.getElementById("output-value").innerText=num;
	}
	else{
          return document.getElementById("output-value").innerText=getFormattedNumber(num)
	}
}
function getFormattedNumber(num){
	var n = Number(num);
	var value= n.toLocaleString ("en");
	return value;
}
function reverseFormattedNumber(num){
	return Number(num.replace (/,/g, ''))
}

var number = document.getElementsByClassName("number");
 for ( var i=0;i<number.length;i++){
 	number[i].addEventListener('click', function(){
 		var output= reverseFormattedNumber(getOutput());
  			if(output != NaN){
               output = output+this.id;
               printOutput(output);
  			}
 	})
 }

  var operator=document.getElementsByClassName("operator");
  for (var i=0;i<operator.length; i++){
  	operator[i].addEventListener('click', function(){
  		if(this.id=="clear"){
  			printHistory("");
  			printOutput("");
  		}
  		else if(this.id=="backspace"){
  			var output=reverseFormattedNumber(getOutput()).toString();
  			if (output){
  				output=output.substr(0,output.length-1);
  				printOutput(output)
  			}
  		}
  		else{
  			var output=getOutput();
  			var history=getHistory();
  			if (output !=""){
  				output=reverseFormattedNumber(output);
  				history=history+output;
  				if (this.id=="="){
  					var result=eval (history);
  					printOutput(result);
  					printHistory("");
  				}
  				else{
  					 var history= history  + this.id;
  					printHistory(history);
  					printOutput("");
  				}
  			}
  		}

  })

  }