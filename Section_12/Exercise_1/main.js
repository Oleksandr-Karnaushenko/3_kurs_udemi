const showTime = () => {
  let number = 0;
  const add = () => {
    number++;
    document.body.textContent = `${number} secund`;
  };
  return add;
};

const start = showTime();

setInterval(start, 1000);
