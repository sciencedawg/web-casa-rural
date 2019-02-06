function build_page(jsonfile) {
  $.getJSON(jsonfile, function(data) {
    doc = data['html'];
    $('title')[0].innerHTML = doc['title'];
    $('.maintitle_a')[0].innerHTML = doc['maintitle_a'];
    for (var i = 0; i < $('.topnavmenuitem').length; i++) {
      $('.topnavmenuitem')[i].innerHTML = doc['topnavmenu'][i];
    }
  })
}
build_page('es.json')
