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
