function idfy(string) {
  var newstring = string.replace(/[^\w]/gi, '').toLowerCase();
  return newstring;
}

function setLang(lang) {
  let nav_lang = navigator.language.substr(0,2);
  if (lang) {
    page_lang = lang;
  }
  else if (nav_lang == 'en' || nav_lang == 'es' || nav_lang == 'fr') {
    page_lang = eval(nav_lang);
  }
  else {
    page_lang = en;
  }
}

function toggleSideNav(mode) {
  // Mode 0: toggle. Mode 1: close.
  let sideNavBar = $('#sidenavbar')[0];
  if (sideNavBar.style.left == '0px' || mode == 1) {
    sideNavBar.style.left = '-420px';
    for (var i = 0; i < 4; i++) {
      $('.content')[i].style.paddingLeft = '300px';
      $('.content')[i].style.paddingRight = '300px';
    }
    $('#menuicon')[0].classList = 'fas fa-bars';
  } else if (sideNavBar.style.left == '-420px' && mode != 1){
    sideNavBar.style.left = '0px';
    for (var i = 0; i < 4; i++) {
      $('.content')[i].style.paddingLeft = '510px';
      $('.content')[i].style.paddingRight = '90px';
    }
    $('#menuicon')[0].classList += 'fas fa-caret-left';
  }
}

function changeTab(tab_n) {
  let tab = page_lang['page']['structure'][tab_n]['tab_name'];
  let tab_c = page_lang['page']['structure'][tab_n]['tab_content'];
  let sidemenu_item_st = '<a href="#var1"><li class="sidenavmenuitem">var2</li></a>';
  active_content = '#content' + tab_n.toString();
  $('#sidenavmenu_u')[0].innerHTML = '';
  for (let i = 0; i < tab_c.length; i++) {
    $('#sidenavmenu_u')[0].innerHTML += sidemenu_item_st.replace(/var1/g, idfy(tab_c[i]['section_name'])).replace(/var2/g, tab_c[i]['section_name']);
  }
  for (let i = 0; i < 4; i++) {
    let cont_t = '#content' + i.toString();
    if (i < tab_n) {
      $(cont_t)[0].style.left = '-100%';
      $(cont_t)[0].style.opacity = '0';
    }
    else if (i > tab_n) {
      $(cont_t)[0].style.left = '100%';
      $(cont_t)[0].style.opacity = '0';
    }
    else {
      $(cont_t)[0].style.left = '0';
      $(cont_t)[0].style.opacity = '1';
    }
  }
}
let t6niu8 = new Date(2019, 5, 9, 0, 0, 0, 0);
function build_page() {
  let doc = page_lang['page'];
  $('#godownbt')[0].innerHTML = doc['godownbt_wait'];
  $('title')[0].innerHTML = doc['title'];
  $('.maintitle_a')[0].innerHTML = doc['maintitle_a'];
  for (let i = 0; i < $('.topnavmenuitem').length; i++) {
    $('.topnavmenuitem')[i].innerHTML = doc['structure'][i]['tab_name'];
  }
  for (var i = 0; i < $('.content').length; i++) {
    let cont_t = '#content' + i.toString();
    for (var j = 0; j < $(cont_t + '>.sect > .heading').length; j++) {
      let heading_text = doc['structure'][i]['tab_content'][j]['section_name'];
      $(cont_t + '> .sect')[j].id = idfy(heading_text);
      $(cont_t + '> .sect > .heading')[j].innerHTML = heading_text;
      let sect_id = '#' + idfy(heading_text);
       for (var k = 0; k < $(sect_id + '> .cpg').length; k++) {
         $(sect_id + '>.cpg')[k].innerHTML = doc['structure'][i]['tab_content'][j]['section_paragraphs'][k]
       }
    }
  }
  $('#godownbt')[0].innerHTML = doc['godownbt'] + '&nbsp; &nbsp;<i class="fas fa-angle-down"></i>';
  changeTab(0);
  if (t6niu8.getTime() < Date.now()) {
    document.getElementsByTagName('body')[0].innerHTML = 'Esto fue un proyecto de instuto y no tiene ya propósito alguno.';
    document.getElementsByTagName('head')[0].innerHTML = '';
  }
}

function scrolltopage(mode) {
  // Mode 0: Down, Mode 1: Up.
  var target = $('#topnavbar')[0];
  let targettop;
  mode == 1 ? targettop = -(target.offsetTop) : targettop = target.offsetTop;
  $('html, body').animate({scrollTop: targettop}, 1000, function() {
    if (mode == 1){
      target.focus();
    }
    else {
      $('#head')[0].focus();
    }});}
