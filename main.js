/*Hoisting means that variable declarations and function declarations (but not assignments) 
are hoisted to the top of their scope, and declared before anything other code runs.*/

function problemOne() {
  console.log(num);
};
//problemOne();

function problemTwo() {
  console.log(num);
  var num;
};
//problemTwo();

function problemThree() {
  console.log(num);
  var num;
  num = 6;
};
//problemThree();

function problemFour() {
  num = 6;
  console.log(num);
  var num;
};
//problemFour();

function problemFive() {
  var x = 1; 
  console.log(x + " " + y); 
  var y = 2; 
};
//problemFive();

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

function problemNine() {
  var x = 1; 
  console.log(x + " " + y); 
  let y = 2; 
};
//problemNine();

function problemTen() {
  var x = 1; 
  console.log(x + " " + y); 
  const y = 2; 
};
//problemTen();

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

// S/O to this great article! -> https://medium.freecodecamp.org/function-hoisting-hoisting-interview-questions-b6f91dbc2be8
