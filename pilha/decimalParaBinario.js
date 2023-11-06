//exemplo aplicação de pilha em real 

function decimalToBinarie(decimalNumber){
    var restStack = []
    var rest, binarieString = ''
  
    while (decimalNumber > 0) {
       rest = Math.floor(decimalNumber % 2)
       restStack.push(rest)
       decimalNumber = Math.floor(decimalNumber / 2)
       
    }
   

     while (restStack.length > 0) {
 
          binarieString += restStack.pop().toString() 
         console.log(binarieString);
     }
  
  
     return binarieString
  
  }
  
  console.log(decimalToBinarie(10));