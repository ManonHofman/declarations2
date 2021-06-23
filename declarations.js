// declarations
function add(number1, number2) {
    return number1 + number2;
  }
  
  add(5, 6); // 11


//expressions
  const add = function (number1, number2) {
    return number1 + number2;
  };
  
  add(5, 6); // 11

  //arrow function
  const add = (number1, number2) => {
    return number1 + number2;
  };
  add(5, 6); // 11


  function squared(2x2){console.log (squared)
}
function squared2(4x4){console.log (squared2)
}
const add = (squared, squared2) => {
    return squared + squared2;
    


    function doSquareCalculation(number1, number2) {
        const number1Squared = number1 * number1;
        const number2Squared = number2 * number2;
        const sum = number1Squared + number2Squared;
        const sumSquared = sum * sum;
        return sumSquared;
    }

    const doSquareCalculation = function(number1, number2) {
        const number1Squared = number1 * number1;
        const number2Squared = number2 * number2;
        const sum = number1Squared + number2Squared;
        const sumSquared = sum * sum;
        return sumSquared;
    };

    const doSquareCalculation = (number1, number2) => {
        const number1Squared = number1 * number1;
        const number2Squared = number2 * number2;
        const sum = number1Squared + number2Squared;
        const sumSquared = sum * sum;
        return sumSquared;
    };
//calling
const scream = function () {
    console.log("Aaaaaaa!");
  };
  
  // Calling scream outside of a function
  scream();
  
  // Here we call scream inside of a function
  const makeNoise = function () {
    scream();
  };
  
  makeNoise();

  //return
  const add = function(numberA, numberB) {
    return numberA + numberB;
};

// The add function returns to this line, which is outside of a function.
const eight = add(3, 5);
console.log(eight);

const doCalculation = function() {
    // The add function returns to this line, which is inside of a function.
    const six = add(2, 4);
    console.log(six);
};

doCalculation();

//debugging
const makePositive = function(number) {
    console.log("Entering makePositive..");
    if (number < 0) {
        return Math.abs(number);
    }
    return number;
};

const makeBigger = function(number) {
    console.log("Entering makeBigger..");
    if (number < 10) {
        return 10 + number;
    }
    return number;
};

const square = function(number) {
    console.log("Entering square..");
    return number * number;
};

const doComplexCalculation = function(number) {
    console.log("Entering doComplexCalculation..");
    const positiveNumber = makePositive(number);
    const bigNumber = makeBigger(positiveNumber);
    const squaredNumber = square(bigNumber);
    return squaredNumber;
};

console.log(doComplexCalculation(-1));