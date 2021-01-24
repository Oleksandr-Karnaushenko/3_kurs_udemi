const btn = document.querySelector('button');
let fontSize = 10;
const listLi = document.querySelectorAll('li');
const changeLi = function () {
  //   for (let i = 0; i < listLi.length; i++) {
  //     listLi[i].style.display = 'block';
  //     listLi[i].style.fontSize = `${fontSize}px`;
  //   }
  listLi.forEach(li => {
    li.style.display = 'block';
    li.style.fontSize = `${fontSize}px`;
  });
  fontSize++;
};

btn.addEventListener('click', changeLi);
