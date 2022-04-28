function snapCrackle (maxValue){
   let resultado = ""
   for (let i = 1; i <= maxValue; i++){
       if (i % 2 !==0 && i % 5 == 0){
           resultado += "SnapCrackle, "
       } else if (i % 5 == 0) {
        resultado += "Crackle, " 
   } else if (i % 2 !==0){
    resultado += "Snap, "
} else {   
resultado +=  i + ", "
   }
   }
return resultado 
}

console.log (snapCrackle(12))


                                       

