const es = {"html":{
  "title":"Las Jordanas - Casa Rural",
  "maintitle_a":"Casa Rural",
  "topnavmenu":[
    "Bienvenidos",
    "Galería",
    "Información",
    "Contacto"],
  "sidenavmenu":{
    "Bienvenidos":["Inicio", "¿Quiénes somos?", "¿Por qué elegirnos?"],
    "Galería":["Casa", "Habitaciones", "Espacios Comunes", "Terraza", "Paisajes"],
    "Información":["Cómo Llegar", "Precios", "Tiempo", "Actividades", "Otros"],
    "Contacto":["Información de Contacto", "Síguenos en Twitter", "Página Web"]
  },
  "content":{
    "Bienvenidos":{
      'file':'bienvenidos.html',
      'text': [

      ]},
    "Galería":{
      'file':'galeria.html',
      'text': [

      ]},
    "Información":{
      'file':'informacion.html',
      'text': [

      ]},
    "Contacto":{
      'file':'contacto.html',
      'text': [

      ]}}}};

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
    "Home":{
      'file':'bienvenidos.html',
      'text': [

      ]},
    "Pictures":{
      'file':'galeria.html',
      'text': [

      ]},
    "Information":{
      'file':'informacion.html',
      'text': [

      ]},
    "Contact":{
      'file':'contacto.html',
      'text': [

      ]}}}};

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
    "Accueil":{
      'file':'bienvenidos.html',
      'text': [

      ]},
    "Images":{
      'file':'galeria.html',
      'text': [

      ]},
    "Infos pratiques":{
      'file':'informacion.html',
      'text': [

      ]},
    "Nous contacter":{
      'file':'contacto.html',
      'text': [

      ]}}}};

let page_lang;

function includeHTML() {
 var z, i, elmnt, file, xhttp;
 /* Loop through a collection of all HTML elements: */
 z = $('#content')[0];
 file = z.getAttribute("w3-include-html");
 if (file) {
   /* Make an HTTP request using the attribute value as the file name: */
   xhttp = new XMLHttpRequest();
   xhttp.onreadystatechange = function() {
     if (this.readyState == 4) {
       if (this.status == 200) {z.innerHTML = this.responseText;}
       if (this.status == 404) {z.innerHTML = "Page not found.";}
       /* Remove the attribute, and call this function once more: */
       z.removeAttribute("w3-include-html");
       includeHTML();
     }
   }
   xhttp.open("GET", file, true);
   xhttp.send();
   /* Exit the function: */
   return;
 }
}

function change_tab(tabname) {
  let tabname_a = tabname.replace('<span class="topnavmenuitem">','').replace('</span>', '');
  let content = $('#content')[0]
  let doc = page_lang['html'];
  content.setAttribute('w3-include-html', doc['content'][tabname_a]['file']);
  includeHTML();
  $('#sidenavmenu_u')[0].innerHTML = "";
  for (var i = 0; i < doc['sidenavmenu'][tabname_a].length; i++) {
    let contentdiv = doc['sidenavmenu'][tabname_a];
    let item = "<a href='#"+ contentdiv[i] +"'><li class='sidenavmenuitem'>" + contentdiv[i] + "</li></a>";
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
    }});}
function scrolltopage_alt(){
  if (window.pageYOffset == '0'){
    scrolltopage();
  }}

build_page(es)
