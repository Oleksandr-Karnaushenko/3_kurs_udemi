const div = document.querySelector('div');
let divX = 150;
let divY = 50;
div.style.left = `${divX}px`;
div.style.top = `${divY}px`;
let draw = false;
let insDivX;
let insDivY;
div.addEventListener('mousedown', e => {
  div.style.backgroundColor = '#888';
  draw = !draw;
  insDivX = e.offsetX;
  insDivY = e.offsetY;
});
div.addEventListener('mousemove', e => {
  if (draw) {
    div.style.left = `${e.clientX - insDivX}px`;
    div.style.top = `${e.clientY - insDivY}px`;
  }
});
div.addEventListener('mouseup', () => {
  div.style.backgroundColor = '#000';
  draw = !draw;
});
