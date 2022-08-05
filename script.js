// shuffle the array of objects
const shuffle = (array) => {
  const shuffled = array.sort(() => Math.random() - 0.5);
  return shuffled;
};

let currentIndex = 0;
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

// on window load, shuffle the content of remember
window.onload = () => {
  const first_element = shuffled_remember[currentIndex];
  inject(first_element);
};

// on click, change prep, line, translation, and attribution to the next element in the shuffled_remember array
window.addEventListener('click', () => {
  currentIndex == shuffled_remember.length - 1
    ? (currentIndex = 0)
    : (currentIndex += 1);
  const next_element = shuffled_remember[currentIndex];

  contentContainer.classList.add('hidden');
  setTimeout(() => {
    inject(next_element);
    contentContainer.classList.remove('hidden');
  }, 500);
});
