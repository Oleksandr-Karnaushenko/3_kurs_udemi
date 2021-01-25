const btn = document.querySelector('button');
const names = ['Asia', 'Daria', 'Marija', 'Anastazja'];

btn.addEventListener('click', () => {
  document.querySelector('div').textContent =
    names[Math.floor(Math.random() * names.length)];
});
