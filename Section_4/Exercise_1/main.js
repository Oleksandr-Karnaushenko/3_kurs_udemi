const square = document.createElement('div');
document.body.appendChild(square);
square.style.width = '10px';
square.style.height = '10px';
let n = 10;
let grow = true;
window.addEventListener('scroll', function () {
  if (n >= window.innerWidth * 0.5) {
    grow = false;
  } else if (n == 10) grow = true;
  if (grow) n += 5;
  else n -= 5;
  square.style.width = `${n}px`;
  square.style.height = `${n}px`;
});
