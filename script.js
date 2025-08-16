let but1 = document.getElementById('but1');
let but2 = document.getElementById('but2');
let moon = document.getElementById('moon');
let suny = document.getElementById('suny');

but1.addEventListener('click', function() {
  const body = document.querySelector('body');
  body.style.backgroundColor = "#DBF0FF";
  moon.style.display = "none";
  suny.style.display = "block";
});

but2.addEventListener('click', function() {
  const body = document.querySelector('body');
  body.style.backgroundColor = "#1C1C1C";
  suny.style.display = "none";
  moon.style.display = "block";
});