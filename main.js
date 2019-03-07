/*Hoisting means that variable declarations and function declarations (but not assignments) 
are hoisted to the top of their scope, and declared before anything other code runs.*/

/*INSTRUCTIONS: 
1: Fill in prediction with what you think will happen.
2: Uncomment the invocation, and run the code.
3: Write in actual what really happened. 

If it matches, GREAT! If not, review tomorrow! */


function problemOne() {
  console.log(num);
};
//problemOne();    
//Prediction:
//Actual:

function problemTwo() {
  console.log(num);
  var num;
};
//problemTwo();
//Prediction:
//Actual:

function problemThree() {
  console.log(num);
  var num;
  num = 6;
};
//problemThree();
//Prediction:
//Actual:

function problemFour() {
  num = 6;
  console.log(num);
  var num;
};
//problemFour();
//Prediction:
//Actual:

function problemFive() {
  var x = 1; 
  console.log(x + " " + y); 
  var y = 2; 
};
//problemFive();
//Prediction:
//Actual:

function problemSix() {
  function bar() {
    return 3;
  }
  console.log(bar()) 
  function bar() {
    return 8;
  }  
};
//problemSix();
//Prediction:
//Actual:

function problemSeven() {
  var bar = function() {
    return 3;
  }
  console.log(bar()) 
  var bar = function() {
    return 8;
  }
};
//problemSeven();
//Prediction:
//Actual:

function problemEight() {
  var a = 1;
  function b() {
    a = 10;
    return;
    function a() {}
  }
  b();
  console.log(a);
}
//problemEight();
//Prediction:
//Actual:

function problemNine() {
  var x = 1; 
  console.log(x + " " + y); 
  let y = 2; 
};
//problemNine();
//Prediction:
//Actual:

function problemTen() {
  var x = 1; 
  console.log(x + " " + y); 
  const y = 2; 
};
//problemTen();
//Prediction:
//Actual:

function problemEleven() {
  function parent() {
    var hoisted = "I'm a variable";
    function hoisted() {
        return "I'm a function";
    }
    return hoisted(); 
  }
  console.log(parent());
};
//problemEleven();
//Prediction:
//Actual:

// S/O to this great article! -> https://medium.freecodecamp.org/function-hoisting-hoisting-interview-questions-b6f91dbc2be8
