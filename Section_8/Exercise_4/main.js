const options = ['Option 1', 'Option 2'];
const addBtn = document.querySelector('button.add');
const cleanBtn = document.querySelector('button.clean');
const showAdviceBtn = document.querySelector('button.showAdvice');
const showOptionsBtn = document.querySelector('button.showOptions');

addBtn.addEventListener('click', e => {
  e.preventDefault();
  const input = document.querySelector('input');
  if (input.value) {
    options.push(input.value);
    input.value = '';
  }
  console.log(options);
});

cleanBtn.addEventListener('click', e => {
  e.preventDefault();
  options.length = 0;
});

showAdviceBtn.addEventListener('click', () => {
  document.querySelector('h1').textContent =
    options[Math.floor(Math.random() * options.length)];
});

showOptionsBtn.addEventListener('click', () => {
  alert(options);
});
