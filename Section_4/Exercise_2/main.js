const div = document.createElement('div');
document.body.appendChild(div);
let height = 10;
let grow = true;
window.addEventListener('scroll', function () {
  if (grow) {
    div.style.backgroundColor = 'green';
    height += 10;
  } else {
    div.style.backgroundColor = 'red';
    height -= 10;
  }
  if (height >= window.innerHeight / 2) grow = !grow;
  else if (height == 10) grow = !grow;
  div.style.height = `${height}px`;
});
