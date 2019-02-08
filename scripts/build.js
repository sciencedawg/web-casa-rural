const es = {"html":{
  "title":"Las Jordanas - Casa Rural",
  "maintitle_a":"Casa Rural",
  "topnavmenu":[
    "Bienvenidos",
    "Galería",
    "Información",
    "Contacto"],
  "sidenavmenu":{
    "Bienvenidos":["Inicio", "¿Quienes somos?", "¿Por qué elegirnos?"],
    "Galería":["Casa", "Habitaciones", "Espacios Comunes", "Terraza", "Paisajes"],
    "Información":["Como Llegar", "Precios", "Tiempo", "Actividades", "Otros"],
    "Contacto":["Información de Contacto", "Siguenos en Twitter", "Página Web"]
  },
  "content":{
    "Bienvenidos":
      "html",
    "Galería":
      "html",
    "Información":
      "html",
    "Contacto":
      "html"}
  }}

function change_tab(jsonfile, tabname) {
  console.log(tabname);
  let tabname_a = tabname.replace('<span class="topnavmenuitem">','').replace('</span>', '');
  console.log(tabname_a);
  $.getJSON(jsonfile, function(data) {
    doc = data['html'];
    console.log(doc);
    $('#sidenavmenu_u')[0].innerHTML = "";
    console.log(doc['sidenavmenu'][tabname_a]);
    for (var i = 0; i < doc['sidenavmenu'][tabname_a].length; i++) {
      let contentdiv = doc['sidenavmenu'][tabname_a];
      let item = "<a href='#" + contentdiv[i] + "'><li class='sidenavmenuitem'>" + contentdiv[i] + "</li></a>";
      console.log(item);
      $('#sidenavmenu_u')[0].innerHTML += item;
    }
  })
}

function build_page(jsonfile) {
  let lang_json = jsonfile;
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
