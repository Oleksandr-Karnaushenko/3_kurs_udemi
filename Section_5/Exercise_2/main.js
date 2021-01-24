const btn = document.createElement('button');
btn.textContent = 'Click';
document.body.appendChild(btn);
const ul = document.createElement('ul');
document.body.appendChild(ul);
let number = 1;
let fontSize = 5;
btn.addEventListener('click', () => {
  const li = document.createElement('li');
  li.textContent = `Elenent nr ${number}`;
  li.style.fontSize = fontSize + 'px';
  ul.appendChild(li);
  number++;
  fontSize += 3;
});
