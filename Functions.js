// ### Convert
const sayHello = name=> console.log(`Hi, ${name}!`);


const getOlder= age =>{
    console.log(age+50)
}

// ### Debug
// add parameter into brackets ()
const multiply = (num1,num2) => console.log(num1 * num2); 

// missing curly brackets
const subtractFive = num => {
	const diff = 5 - num; 
	console.log(diff);
}
// missing > after name  and remove function()
const printName = name => console.log(name);


module.exports ={
    sayHello : sayHello,
    getOlder : getOlder,
    // i Export it to check if i solve debug
    multiply : multiply ,
    subtractFive : subtractFive,
    printName : printName 

}