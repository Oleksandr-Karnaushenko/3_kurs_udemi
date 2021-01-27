// http://websamuraj.pl/examples/js/projekt11/
const btnStartStop = document.querySelector('button.main');
const btnReset = document.querySelector('button.reset');
const div = document.querySelector('div.time div');

let startTime;
let indexInterval;
let mSecunds = 0;
let mS = 0;

const reset = () => {
  div.textContent = '---';
  clearInterval(indexInterval);
  startTime = new Date().getTime();
  btnStartStop.textContent = 'Start';
  secunds = 0;
  mSecunds = 0;
};

const showTime = () => {
  const nowTime = new Date().getTime();
  mS = Math.floor(nowTime / 10 - startTime / 10);
  div.textContent = `${((mSecunds + mS) / 100).toFixed(0)}.${
    (mSecunds + mS) % 100 < 10
      ? '0' + ((mSecunds + mS) % 100)
      : (mSecunds + mS) % 100
  }`;
};
const button = () => {
  if (btnStartStop.textContent === 'Start') {
    btnStartStop.textContent = 'Pause';
    startTime = new Date().getTime();
    indexInterval = setInterval(showTime, 10);
  } else {
    btnStartStop.textContent = 'Start';
    clearInterval(indexInterval);
    //secunds += s;
    mSecunds += mS;
  }
};

btnReset.addEventListener('click', reset);
btnStartStop.addEventListener('click', button);
