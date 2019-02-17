function setLang(lang) {
  let nav_lang = navigator.language.substr(0,2);
  if (lang) {
    page_lang = lang;
  }
  else if (nav_lang == 'en' || nav_lang == 'es' || nav_lang == 'fr') {
    page_lang = eval(nav_lang);
  }
  else {
    page_lang = es;
  }
}

function toggleSideNav(mode) {
  // Mode 0: toggle. Mode 1: close.
  const sideNavBar = $('#sidenavbar')[0];
  if (sideNavBar.style.left == '0px' || mode == 1) {
    sideNavBar.style.left = '-420px';
    $('#menuicon')[0].classList = 'fas fa-bars';
  } else if (sideNavBar.style.left == '-420px' && mode != 1){
    sideNavBar.style.left = '0px';
    $('#menuicon')[0].classList += 'fas fa-caret-left';
  }
}

function changeTab(tab_temp) {
  let tab = tab_temp.replace('<span class="topnavmenuitem">', '').replace('</span>', '')
  let tab_st = page_lang['html']['structure'][tab];
  let tab_n = tab_st['n'];
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

function build_page() {
  let doc = page_lang['html'];
  $('title')[0].innerHTML = doc['title'];
  $('.maintitle_a')[0].innerHTML = doc['maintitle_a'];
  for (var i = 0; i < $('.topnavmenuitem').length; i++) {
    $('.topnavmenuitem')[i].innerHTML = Object.keys(doc['structure'])[i];
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
