$(function() {
  var catalog = [
      {
        "id": 1,
        "name": "Banana",
        "category": "Fruit"
      },
      {
        "id": 2,
        "name": "Apple",
        "category": "Fruit"
      },
      {
        "id": 3,
        "name": "Carrot",
        "category": "Vegetable"
      },
      {
        "id": 4,
        "name": "Broccoli",
        "category": "Vegetable"
      },
      {
        "id": 5,
        "name": "Strawberry",
        "category": "Fruit"
      },
      {
        "id": 6,
        "name": "Pork",
        "category": "Meat"
      },
      {
        "id": 7,
        "name": "Chicken",
        "category": "Meat"
      },
      {
        "id": 8,
        "name": "Cabbage",
        "category": "Vegetable"
      }
    ],
    $list = $("main > ul"),
    $form = $("fieldset ul"),
    $items,
    $categories;

  // Handlebars Templates

  var category_list = Handlebars.compile($("#category_list").html()),
      item_list = Handlebars.compile($("#item_list").html()),
      category_template = Handlebars.compile($("#category_template").html()),
      item_template = Handlebars.compile($("#item_template").html());

  Handlebars.registerPartial("category_template", $("#category_template").html());
  Handlebars.registerPartial("item_template", $("#item_template").html());

  // Functions

  function populateCategories() {
    var categories = _.uniq(_.pluck(catalog, "category"));
    $form.append(category_list({ categories: categories }));
  }

  function populateList() {
    $list.append(item_list({ items: catalog }));
  }

  function bind() {
    $categories.on('change', function() {
      var $checkbox = $(this),
          checked = $checkbox.is(":checked"),
          category = $checkbox.val(),
          category_items;

      category_items = catalog.filter(function(item) {
        return item.category === category;
      });

      category_items.forEach(function(item) {
        $items.filter("[data-id=" + item.id + "]").toggle(checked);
      });
    });
  }

  function init() {
    populateCategories();
    populateList();
    $items = $("main > ul li");
    $categories = $(":checkbox");
    bind();
  }

  // Execution code

  init();
});
