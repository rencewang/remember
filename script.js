// shuffle the array of objects
const shuffle = (array) => {
  const shuffled = array.sort(() => Math.random() - 0.5);
  return shuffled;
};

const prepContainer = document.querySelector('#prep');
const lineContainer = document.querySelector('#line');
const translationContainer = document.querySelector('#translation');
const attributionContainer = document.querySelector('#attribution');

// on window load, shuffle the content of remember
window.onload = () => {
  const shuffled_remember = shuffle(remember);
  // inject prep, line, translation, and attribution into the containers
  const first_element = shuffled_remember[0];
  prepContainer.innerHTML += `${first_element.prep}`;
  lineContainer.innerHTML += `${first_element.line}`;
  translationContainer.innerHTML += first_element.translation
    ? `${first_element.translation}`
    : '';
  attributionContainer.innerHTML += first_element.attribution
    ? `${first_element.attribution}`
    : '';
};

// on click, change prep, line, translation, and attribution to the next element in the shuffled_remember
window.onclick = () => {};
