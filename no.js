function whosgreat(num1, num2) {
    const diff = num1 - num2;
 
     const sign  = Math.sign(diff)
 
     switch (sign) {
         case -1:
             console.log(`${num2} is greater than  ${num1}`)
             break;
         case 1:
             console.log(`${num1} is greater than  ${num2}`)
             break;
         case 0:
           console.log(`${num2} is equal to  ${num1}`)
         break;
         default:                        
             break;
     }    
 }