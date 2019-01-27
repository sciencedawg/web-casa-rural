function toggleSideNav() {
  if (document.getElementById('sidenavbar').style.marginLeft == '0px'){
    document.getElementById('sidenavbar').style.marginLeft = '-480px';
    document.getElementById('menuicon').classList = 'fas fa-bars';

  }
  else {
    document.getElementById('sidenavbar').style.marginLeft = '0px';
    document.getElementById('menuicon').classList += 'fas fa-caret-left';
  }
}
