// shuffle the array of objects
const shuffle = (array) => {
  const shuffled = array.sort(() => Math.random() - 0.5);
  return shuffled;
};

const throttle = (delay, fn) => {
  let lastCall = 0;
  return function wrapper(...args) {
    const now = new Date().getTime();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    return fn(...args);
  };
};

let currentIndex = -1;
const shuffled_remember = shuffle(remember);
const contentContainer = document.querySelector('#content');

// inject prep, line, translation, and attribution into the containers given object
const inject = (element) => {
  document.querySelector(`#prep`).innerHTML = `${element.prep}`;
  document.querySelector(`#line`).innerHTML = `${element.line}`;
  document.querySelector(`#translation`).innerHTML = element.translation
    ? `${element.translation}`
    : '';
  document.querySelector(`#attribution`).innerHTML = element.attribution
    ? `-${element.attribution}-`
    : '';
};

// change prep, line, translation, and attribution to the next element in the shuffled_remember array
const changeContent = () => {
  currentIndex == shuffled_remember.length - 1
    ? (currentIndex = 0)
    : (currentIndex += 1);
  const next_element = shuffled_remember[currentIndex];
  inject(next_element);
};

// on throttle clicks by 500ms, change the content
window.addEventListener('click', throttle(500, changeContent));
