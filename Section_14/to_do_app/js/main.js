const form = document.querySelector('form');
const ul = document.querySelector('ul');
const tasksNumber = document.querySelector('h2 span.all');
const tasksDoneNumber = document.querySelector('h2 span.numberDone');
const input = document.querySelector('input');
const allTasks = document.getElementsByClassName('task');
const doneTasks = document.getElementsByClassName('doneTask');

const toDoList = [];

const render = () => {
  ul.textContent = '';
  toDoList.forEach((task, key) => {
    ul.appendChild(task);
    task.dataset.key = key;
  });
  tasksNumber.textContent = allTasks.length;
  tasksDoneNumber.textContent = doneTasks.length;
};

const remove = e => {
  const index = e.target.parentNode.dataset.key;
  toDoList.splice(index, 1);
  render();
};

const done = e => {
  const index = e.target.parentNode.dataset.key;
  toDoList[index].querySelector('p').classList.toggle('doneTask');
  toDoList[index].querySelector('button.done').classList.toggle('rework');
  if (e.target.textContent === 'done') {
    e.target.textContent = 'rework';
  } else e.target.textContent = 'done';
  tasksDoneNumber.textContent = doneTasks.length;
};

const addTask = e => {
  e.preventDefault();
  if (input.value === '') return;
  const li = document.createElement('li');
  li.className = 'task';
  li.innerHTML = `<p>${input.value}</p><button class="done">done</button><button class="remove">remove</button>`;
  toDoList.push(li);
  render();
  li.querySelector('button.remove').addEventListener('click', remove);
  li.querySelector('button.done').addEventListener('click', done);
  input.value = '';
};

form.addEventListener('submit', addTask);
tasksNumber.textContent = allTasks.length;
tasksDoneNumber.textContent = doneTasks.length;
