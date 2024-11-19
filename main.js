 function displayContent(content){
    result.value +=content
 }
 function clr(){
  result.value = ""
 }

 //result
 function claOut(){
    result.value=eval(result.value)
 }
 // back space 
 function removeDigit(){
  result.value = result.value.slice(0,-1)
 }