function toggleSideNav() {
  const sideNavBar = $('#sidenavbar')[0];
  if (sideNavBar.style.left === '0px') {
    sideNavBar.style.left = '-420px';
    $('#menuicon')[0].classList = 'fas fa-bars';
  } else {
    sideNavBar.style.left = '0px';
    $('#menuicon')[0].classList += 'fas fa-caret-left';
  }
}
function closeSideNav() {
  const sideNavBar = $('#sidenavbar')[0];
  if (sideNavBar.style.left === '0px') {
    toggleSideNav();
  }
}
function change_sidenav(tabname, doc) {
  $('#sidenavmenu_u')[0].innerHTML = "";
  for (var i = 0; i < doc['sidenavmenu'][tabname].length; i++) {
    let contentdiv = doc['sidenavmenu'][tabname];
    let item = "<a href='#"+ contentdiv[i] +"'><li class='sidenavmenuitem'>" + contentdiv[i] + "</li></a>";
    $('#sidenavmenu_u')[0].innerHTML += item;
    }
}
function change_content(tabname, doc) {
  var i, elmnt, file, xhttp;
  file = 'contents/' + doc['content'][tabname]['file'];
  $('#content').fadeOut(150, function() {
    $('#content')[0].innerHTML = "";
    $('#content').load(file);
  });
}
function change_tab(tabname) {
  let tabname_a = tabname.replace('<span class="topnavmenuitem">','').replace('</span>', '');
  let doc = page_lang['html'];
  change_sidenav(tabname_a, doc);
  change_content(tabname_a, doc);
  setTimeout(function(){
    for (var i = 0; i < $('.heading').length; i++) {
      $('.heading')[i].innerHTML = doc['sidenavmenu'][tabname_a][i];
      $('.heading')[i].setAttribute('id', doc['sidenavmenu'][tabname_a][i]);
    }
    $('#content').fadeIn(150);
  }, 200);

}
function build_page(lang) {
  page_lang = lang;
  let doc = lang['html'];
  $('title')[0].innerHTML = doc['title'];
  $('.maintitle_a')[0].innerHTML = doc['maintitle_a'];
  for (var i = 0; i < $('.topnavmenuitem').length; i++) {
    $('.topnavmenuitem')[i].innerHTML = doc['topnavmenu'][i];
  }
  change_tab($('.topnavmenuitem')[0].innerHTML);
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
