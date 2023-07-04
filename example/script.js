const toggleBtn = document.getElementById('toggle-btn');
const navDrawer = document.getElementById('nav-drawer');

toggleBtn.addEventListener('click', () => {
  navDrawer.classList.toggle('open');
});
