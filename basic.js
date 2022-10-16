 /*
The JS concepts we’ll be looking at:
Scope
IIFE
MVC
Async/await
Closure
Callback

Scope:- Two types of scope local scope, global scope;
Why is this relevant?
1. Separates logic
2. Narrows down the focus;
3. Improves readability


ES5
Global scope
const name1 = "Sanjay Murmu"

function returnName() {
 // local scope
 return name1;
}

returnName() //


//ES6

const showName = () => {
 return name1;
}

showName()
*/

/*
2. IIFE (immediately invoked function expression)
this mean that the function is immediately Invoked when it is created.
Why it is relevent?  
1. Immediately executes code;
2. Avoids global scope from getting polluted;
3. support async function/structure 
4. Improves readability


let colorCode = 'blue';

const car = (function () {
  return {
      changeColorToRed: function () {
          colorCode = 'red'
          return colorCode;
      },
      changeColorToBlack: function () {
          colorCode = 'black'
          return colorCode
      }
  }

})()

console.log(car.changeColorToBlack()) //

//ES6

const car1 = (() => {
  return {
      chageColorCode: () => {
          colorCode = 'red1'
          return colorCode
      },
      changeColorToBlack: () => {
          colorCode = 'black1';
          return colorCode;
      }
  }
})()

console.log(car1.changeColorToBlack())//

*/
/*
3. MVC; Model view controller is design framework; not programming language
85% of web based application into real world structure.
Why Relevent:-
1. Long-term scalability and maintainability
2.Easy to improve, update, and debug (based on personal
3. Easy to setup
4. Provides structure and overview

// ES5

const view = (function () {
  // code here
}())

const model = (function () {
  // code here
}())

const controller = (function (viewCtrl, modelCtrl) {
  //code here
})(view, model)

//ES6
const view1 = (() => {

})()

const model1 = (() => {

})();

const controller1 = ((viewCtrl, modelCtrl) => {

})(view1, model1)
*/
/*
4. Async / await: stop and wait untill something is resolved; way to maintain asyncronous processing in more synchronomus fashion;
Why relevent
1. asynchronous processing in a more synchronous fashion
2. Controls the behavior
3. Reduces “callback hell”

ES5        
async function showUsers() {
  const response = fetch('https://jsonplaceholder.typicode.com/users');

  const users = await response.json();
  console.log(users)
}

showUsers()

// ES6
const showUsers1 = async () => {
  const response = fetch('https://jsonplaceholder.typicode.com/users');

  const users = await response.json();
  console.log(users)
}

showUsers1()
*/

/*
/5. Closure: function inside another function;
used to extend behavior such as pass variable, methods or arrays
value from outer func to inner func

Why relevent
  1.Extends behaviors
  2. Usefull when working with events

function showInfo() {
  const carType = 'volvo XC90';
  // closure
  function showName() {
      return carType;
  }

  return showName();
}

console.log(showInfo())

// ES6

const showInfo1 = () => {
  const carType = 'volvo XC90';
  showName = () => {
      return carType;
  }

  return showName();

}

console.log(showInfo1())
*/

/*
 CallBack ; A callback is a function that executes after another function has executed;
  In js world, function that waits for another function to execute or return a value(array, object) is referred to as a callback.
  It is way to make asynchronous operation more synchronous (sequential order).

 Why relevent
    1. Wait for an event to execute.
    2. Provides synchronous capabilities.
    3. Practical way to chain functionalities (If A is completed, then execute B, and so forth)
    4. Provides code structure and control
    5. Be aware, you may have heard about callback hell. It basically means that you have a recursive structure of callbacks (callbacks within callbacks within callbacks and so forth). This is not practical.


function pressButton(callback) {
    console.log('Button is pressed')
    callback()
};

function fireUpEngine() {
    console.log('Fire up engine!');
}

pressButton(fireUpEngine)



// ES6

const pressButton1 = (callback) => {
    console.log('button is pressed2')
    callback();
}

fireUpEngine1 = () => {
    console.log('fire up engine2!')
}

pressButton1(fireUpEngine1);

*/