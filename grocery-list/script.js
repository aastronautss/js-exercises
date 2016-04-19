$(function() {
  var $list = $("#list");

  function resetForm(f) {
    f.reset();
  }

  $("form").on('submit', function(e) {
    e.preventDefault();
    var name = $("[name=name]").val(),
        quantity = $("[name=quantity]").val() || "1",
        item = {
          name: name,
          quantity: quantity
        };

    $list.append('<li>' + quantity + ' ' + name + '</li>')
    resetForm(e.target);
  });
});
