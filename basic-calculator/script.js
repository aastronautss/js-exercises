$(function() {
  function calculate(num1, num2, opr) {
    if (opr === "+") {
      return num1 + num2;
    }
    else if (opr === "-") {
      return num1 - num2;
    }
    else if (opr === "*") {
      return num1 * num2;
    }
    else if (opr === "/") {
      return num1 / num2;
    }
  }

  $("form").on('submit', function(e) {
    e.preventDefault();

    var $nums = $("[type=number]"),
        num1 = +$nums.eq(0).val(),
        num2 = +$nums.eq(1).val(),
        operation = $("#operation").val();

    var result = calculate(num1, num2, operation);
    $("#result").html(result);
  });
});
