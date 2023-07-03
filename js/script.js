const tema = localStorage.getItem("tema");
const form = document.getElementById('login_form');
const mode = document.getElementById('mode_icon');

    
console.log(tema)
if(tema === 'dark') {
  form.classList.add('dark')
  mode.classList.remove('fa-moon');
    mode.classList.add('fa-sun');
}
  else 
  if(tema==='light') {
    form.classList.remove('dark')
    mode.classList.add('fa-moon');
  mode.classList.remove('fa-sun');
  }

  mode.addEventListener('click', () => {
    
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


