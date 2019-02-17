function setLang() {
  let nav_lang = navigator.language.substr(0,2);
  if (nav_lang == 'en' || nav_lang == 'es' || nav_lang == 'fr') {
    page_lang = nav_lang;
  }
  else {
    page_lang = 'es';
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
// function build_page(lang) {
//   page_lang = lang;
//   let doc = lang['html'];
//   $('title')[0].innerHTML = doc['title'];
//   $('.maintitle_a')[0].innerHTML = doc['maintitle_a'];
//   for (var i = 0; i < $('.topnavmenuitem').length; i++) {
//     $('.topnavmenuitem')[i].innerHTML = doc['topnavmenu'][i];
//   }
//   change_tab($('.topnavmenuitem')[0].innerHTML);
// }

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
