$(function() {
  var list = "<ul>" +
             "<li><a class=\"tab\" href=\"#\">Menu</a></li>" +
             "<li><a class=\"tab\" href=\"#\">About</a></li>" +
             "<li><a class=\"tab\" href=\"#\">Contact</a></li>" +
             "<ul>",
      articles = "<section>" +
                 "<article><p>" +
                 "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer magna quam, congue vel tempus non, aliquam ut lacus. Aenean magna urna, consectetur ac magna sit amet, luctus dapibus felis. Vivamus sit amet velit blandit, tempor dui nec, venenatis mi. Vestibulum rutrum sollicitudin lorem in mollis. Mauris euismod erat ac ipsum imperdiet bibendum. Nunc in augue in nibh fermentum convallis. Vivamus sagittis nunc at mauris suscipit euismod. Nunc eget tempor neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis pharetra pulvinar mauris at rhoncus. Nunc pretium, tortor id tempus vehicula, ligula dui tristique dolor, at facilisis ex tellus a diam. Etiam semper cursus neque ac gravida. Vestibulum enim urna, mattis vel ligula et, vehicula lacinia leo." +
                 "</p></article>" +
                 "<article><p>" +
                 "Praesent porta facilisis lacus, id cursus ante sagittis non. Morbi pretium, risus a ullamcorper consequat, urna turpis bibendum mi, ut tincidunt ligula urna id felis. Vivamus nibh arcu, ornare pulvinar ex eu, imperdiet laoreet dolor. Fusce sit amet sapien vitae lectus euismod vestibulum ac eu massa. Integer at lacus eu mauris venenatis facilisis non non sapien. Curabitur nec nisl eu massa tincidunt maximus. Nam egestas efficitur tortor quis elementum. Nulla facilisi." +
                 "</p></article>" +
                 "<article><p>" +
                 "Vestibulum tristique nulla at malesuada lacinia. Nam gravida diam vel sem finibus, at dapibus arcu cursus. Sed dapibus arcu nec vulputate gravida. Duis in quam non eros luctus molestie. Morbi mauris libero, ultrices eu dignissim at, faucibus convallis erat. Pellentesque at facilisis justo, vitae semper est. Vestibulum cursus euismod enim quis venenatis. Quisque sit amet vestibulum urna. Sed vitae metus a mi fermentum scelerisque. Sed bibendum erat quis varius condimentum." +
                 "</p></article>" +
                 "</section>";

  $("#content").append("<h1>Bob's Food Place</h1>");
  $("#content").append("<p>This is a pretty good place to eat</p>");
  $("#content").append(list);
  $("#content").append(articles);

  var $tabs = $(".tab");
  var $articles = $("article");

  var tab_interface = {
    bind: function() {
      $tabs.on("click", function(e) {
        e.preventDefault();
        var $target = $(e.target);
        var idx = $target.closest("li").index();

        $(".active").removeClass('active');
        $target.addClass('active');
        $articles.hide().eq(idx).show();
      });
    },

    init: function() {
      $tabs.eq(0).addClass('active');
      $articles.hide().eq(0).show();
      this.bind();
    }
  }

  tab_interface.init();
});
