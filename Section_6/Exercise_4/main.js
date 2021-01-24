let red = 100;
let green = 100;
let blue = 100;

document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;

const changeColor = e => {
  console.log(e.keyCode);
  switch (e.keyCode) {
    case 38:
      if (red < 255) {
        red += 5;
        green += 5;
        blue += 5;
      }
      break;

    case 40:
      if (red >= 0) {
        red -= 5;
        green -= 5;
        blue -= 5;
      }
      break;
  }
  document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;
};
window.addEventListener('keydown', changeColor);
