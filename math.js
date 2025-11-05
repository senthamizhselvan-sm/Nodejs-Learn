const add = (...numbers) =>{
 return  numbers.reduce((a,b) => a + b , 0);
}

const subtract = (...numbers) =>{
   return numbers.reduce((a,b) => a - b );
}

const multiply = (...numbers) =>{
   return numbers.reduce((a,b) => a * b , 1);
}

const Division = (...numbers) =>{
   return numbers.reduce((a,b) => a / b );
}

module.exports = {add,subtract,multiply,Division}