// shuffle the array of objects
const shuffle = (array) => {
  const shuffled = array.sort(() => Math.random() - 0.5);
  return shuffled;
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

// on click, change prep, line, translation, and attribution to the next element in the shuffled_remember array
window.addEventListener('click', () => {
  currentIndex == shuffled_remember.length - 1
    ? (currentIndex = 0)
    : (currentIndex += 1);
  const next_element = shuffled_remember[currentIndex];
  inject(next_element);
});
