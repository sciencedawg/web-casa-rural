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
    }};

const en = {"html":{
  "title":"Las Jordanas - Rural Retreat House",
  "maintitle_a":"Rural Retreat",
  "topnavmenu":[
    "Home",
    "Pictures",
    "Information",
    "Contact"],
  "sidenavmenu":{
    "Home":["Welcome", "Who we are", "Why pick us?"],
    "Pictures":["House", "Rooms", "Shared Spaces", "Outside", "Views nearby"],
    "Information":["How to get here", "Prices", "Weather", "Activities", "Other"],
    "Contact":["Contact Info", "Twitter", "Web Page Credits"]
  },
  "content":{
    "Home":
      "html",
    "Pictures":
      "html",
    "Information":
      "html",
    "Contact":
      "html"}
  }};

const fr = {"html":{
  "title":"Las Jordanas - Maison Rurale",
  "maintitle_a":"Maison Rurale",
  "topnavmenu":[
    "Accueil",
    "Images",
    "Infos pratiques",
    "Nous contacter"],
  "sidenavmenu":{
    "Accueil":["Bienvenue", "À propos de nous", "Pourquoi nous choisir?"],
    "Images":["Notre maison", "Nos chambres", "Nos espaces communs", "Notre terrasse", "Paysages"],
    "Infos pratiques":["Comment y aller", "Tarif", "Météo", "Activités", "Autre"],
    "Nous contacter":["Information de contact", "Twitter", "Crédits de la page web"]
  },
  "content":{
    "Accueil":
      "html",
    "Images":
      "html",
    "Infos pratiques":
      "html",
    "Nous contacter":
      "html"}
  }};

let page_lang;

function change_tab(tabname) {
  let tabname_a = tabname.replace('<span class="topnavmenuitem">','').replace('</span>', '');
  let doc = page_lang['html'];
  $('#sidenavmenu_u')[0].innerHTML = "";
  for (var i = 0; i < doc['sidenavmenu'][tabname_a].length; i++) {
    let contentdiv = doc['sidenavmenu'][tabname_a];
    let item = "<a href='#" + contentdiv[i] + "'><li class='sidenavmenuitem'>" + contentdiv[i] + "</li></a>";
    $('#sidenavmenu_u')[0].innerHTML += item;
    }
}

function build_page(lang) {
  page_lang = lang;
  let doc = lang['html'];
  $('title')[0].innerHTML = doc['title'];
  $('.maintitle_a')[0].innerHTML = doc['maintitle_a'];
  for (var i = 0; i < $('.topnavmenuitem').length; i++) {
    $('.topnavmenuitem')[i].innerHTML = doc['topnavmenu'][i];
  }
  change_tab($('.topnavmenuitem')[1].innerHTML);
}

// Select all links with hashes
function scrolltopage() {
  var target = $('#topnavbar')[0];
  let targettop;
  window.pageYOffset != '0' ? targettop = -(target.offsetTop) : targettop = target.offsetTop;
  $('html, body').animate({
    scrollTop: targettop
  }, 1000, function() {
    if (window.pageYOffset != '0'){
      target.focus();
    }
    else {
      $('#head')[0].focus();
    }

  });
}

build_page(es)
