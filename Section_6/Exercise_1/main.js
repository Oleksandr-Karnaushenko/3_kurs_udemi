document.body.addEventListener('mousemove', event => {
  document.querySelector('h1').textContent =
    event.clientX + ' , ' + event.clientY;

  const red = (event.clientX / window.innerWidth) * 100;
  const green = (event.clientY / window.innerHeight) * 100;
  const blue = (red + green) / 2;
  console.log(red, green, blue);
  document.body.style.backgroundColor = `rgb(${red}%,${green}%,${blue}%)`;
});
