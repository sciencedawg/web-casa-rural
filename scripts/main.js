function toggleSideNav() {
  const sideNavBar = document.getElementById('sidenavbar');
  if (sideNavBar.style.left === '0px') {
    sideNavBar.style.left = '-420px';
    document.getElementById('menuicon').classList = 'fas fa-bars';
  } else {
    sideNavBar.style.left = '0px';
    document.getElementById('menuicon').classList += 'fas fa-caret-left';
  }
}
