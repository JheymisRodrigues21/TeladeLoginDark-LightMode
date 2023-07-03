const tema = localStorage.getItem("tema");
console.log(tema)

const mode = document.getElementById('mode_icon');
  mode.addEventListener('click', () => {
    const form = document.getElementById('login_form');
    if(tema === 'dark') {
      form.classList.add('dark')
    }
      else{form.classList.remove('dark')}
    if(mode.classList.contains('fa-moon')) {
    mode.classList.remove('fa-moon');
    mode.classList.add('fa-sun');

      form.classList.add('dark');
    localStorage.setItem("tema", "dark");
    return;
  }
  mode.classList.add('fa-moon');
  mode.classList.remove('fa-sun');
  form.classList.remove('dark');
  localStorage.setItem("tema", "light");
});


