
# Javascript is scripting langauge create, dynamically update content.

var arr =[1,'sanjay',3]
var a = arr[1]
// console.log(a) // sanjay;
var a = arr[1] = "Murmu"
// console.log(a) //Murmu;


// #Object are unordered collection of key value pairs;
let person = {
    firstName:"Sanjay",
    lastName:"Murmu",
    isExist:false
}
// console.log(person) //{ firstName: 'Sanjay', lastName: 'Murmu',isExist:false }
//change isExist: false to true;
person.isExist = true;
// console.log(person) //{ firstName: 'Sanjay', lastName: 'Murmu', isExist: true }

//delete lastName;
delete person.lastName;
// console.log(person) //{ firstName: 'Sanjay', isExist: true }

//add field;
person.address = [{add:'kadma',po:'kadma',ps:'kathikund',pin :'814101'}]
//console.log(person) //{ firstName: 'Sanjay',isExist: true,address: [ { add: 'kadma', po: 'kadma', ps: 'kathikund', pin: '814101' } ] }


Object.assign(person,{Hello:'world'})
console.log(person) // {...,Hello:'world'}

// Functional Programm :- design to handle function in a better way mainly  pure function. It also can be used in Object oriented procedural and in function programming paradigms all at the same time.

// Imperative                   Vs                      Declarative 
// How to go about prgram:                    What to achieve from the problem
//     1. Approach
//     2. Structure
//     3. logic
    
//     Ex:-Given a number, find out square of the is Even or odd;
 // Imperative    
let isEven;
let number = 3;
let numSq = number * number
if(numSq %2 ==0){
    isEven = true
}else{
    isEven = false
}

console.log(isEven)

//  Declarative 
const checkSquare=(n)=>{
    return (n*n)%2 ==0 ? true : false
    
}
 console.log(checkSquare(4))
