const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

const createTimerAnimator = () => {
  return (seconds) => {
    let inputNumber = seconds;
    
    const timer = setInterval(() => {
      let secondsNum = inputNumber % 60,
          minutesNum = Math.floor((inputNumber / 60) % 60),
          hoursNum = Math.floor(inputNumber / (60 * 60));
      
      secondsNum = secondsNum < 10 ? '0' + secondsNum : secondsNum;
      minutesNum = minutesNum < 10 ? '0' + minutesNum : minutesNum;
      hoursNum = hoursNum < 10 ? '0' + hoursNum : hoursNum;
        
      timerEl.innerHTML = `${hoursNum}:${minutesNum}:${secondsNum}`;

      inputNumber--;

      if (inputNumber < 0) {
        clearInterval(timer);
      }
    }, 1000)

  }
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', (event) => {
  const value = event.target.value;

  const cleanedValue = value.replace(/[^\d]/g, '');
  event.target.value = cleanedValue;
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = '';
});