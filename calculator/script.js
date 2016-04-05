$(function() {
  var $number = $(".number"),
      $clear = $(".clear"),
      $equals = $(".equals"),
      $operator = $(".operator"),
      num1 = "",
      num2 = "",
      operator;

  var add = function(num1, num2) { return num1 + num2; }
  var subtract = function(num1, num2) { return num1 - num2; }
  var multiply = function(num1, num2) { return num1 * num2; }
  var divide = function(num1, num2) { return num1 / num2; }

  var reset = function() {
    num1 = "";
    num2 = "";
    operator = "";
  }

  var handleNumberInput = function(val) {
    if (!operator) {
      num1 = +(num1 + "" + val);
      console.log(num1);
    } else {
      num2 = +(num2 + "" + val);
      console.log(num2);
    }
  }

  var handleOperatorInput = function(val) {
    operator = val;
    console.log(operator);
  }

  var calculateResult = function() {
    var result;

    switch (operator) {
      case "+":
        result = add(num1, num2);
        break;
      case "-":
        result = subtract(num1, num2);
        break;
      case "*":
        result = multiply(num1, num2);
        break;
      case "/":
        result = divide(num1, num2);
        break;
      default:
        result = num1;
    }

    console.log(result);
    reset();
  }

  $number.click(function(e) {
    e.preventDefault();

    handleNumberInput($(e.target).text());
  });

  $operator.click(function(e) {
    e.preventDefault();

    handleOperatorInput($(e.target).text());
  });

  $equals.click(function(e) {
    e.preventDefault();

    calculateResult();
  });

  $clear.click(function(e) {
    e.preventDefault();

    reset();
  });
});
