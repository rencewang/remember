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
const rememberContainer = document.querySelector('#remember');

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

// inject prep, line, translation, and attribution into a newly created div
const injectNew = (element) => {
  document.querySelector('#content').remove();

  const newElement = document.createElement('section');
  newElement.id = 'content';
  const attribution = element.attribution ? `-${element.attribution}-` : '';
  const translation = element.translation ? `${element.translation}` : '';

  newElement.innerHTML = `
    <div id="prep">${element.prep}</div>
    <div id="translation">${translation}</div>
    <div id="line">${element.line}</div>
    <div id="attribution">${attribution}</div>
    `;
  rememberContainer.appendChild(newElement);
};

// change prep, line, translation, and attribution to the next element in the shuffled_remember array
const changeContent = () => {
  currentIndex == shuffled_remember.length - 1
    ? (currentIndex = 0)
    : (currentIndex += 1);
  const next_element = shuffled_remember[currentIndex];

  document.querySelector('#header').style.opacity = 0;
  document.querySelector('#content').style.opacity = 0;

  setTimeout(() => {
    injectNew(next_element);
    setTimeout(() => {
      document.querySelector('#content').style.opacity = 1;
      document.querySelector('#header').style.opacity = 1;
    }, 100);
  }, 500);
};

// on throttle clicks of circle by 500ms, change the content
const circle = document.querySelector('#circle');
circle.addEventListener('click', throttle(1000, changeContent));
circle.addEventListener('touchstart', throttle(1000, changeContent));

// add spotlight effect as mouse moves
const spotlight = document.querySelector('#spotlight');

const handleMouseMove = (e) => {
  const { clientX, clientY } = e;
  spotlight.style.background = `radial-gradient(circle at ${clientX}px ${clientY}px, #1e22fa 50px, #f8f8f8 450px)`;
};

document.addEventListener('mousemove', handleMouseMove);
