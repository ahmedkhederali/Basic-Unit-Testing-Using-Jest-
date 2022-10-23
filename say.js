function sayHello(){
    return `Hello Jest`
}
//Writer A description of the method using JSDoc
/*
[1] if no number Return 0
[2] if one number return the number
[3] if there any numbers then Will Return The Sum 
*/
function sum(...numbers){
    if (numbers.length===0) return 0
   return numbers.reduce((pv,cv)=>pv+cv,0)
}



module.exports={sayHello,sum};