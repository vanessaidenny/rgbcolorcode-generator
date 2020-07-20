window.addEventListener('load', start);

//input range
let rValueRange = document.querySelector('#rValueRange');
let gValueRange = document.querySelector('#gValueRange');
let bValueRange = document.querySelector('#bValueRange');

//input text
let rValueInput = document.querySelector('#rValueInput');
let gValueInput = document.querySelector('#gValueInput');
let bValueInput = document.querySelector('#bValueInput');

//rgb description
let rgbInput = document.querySelector('#rgbInput');

//canvas background color
let finalColor = document.querySelector('.finalColor');

function start() {
  rValueRange.addEventListener('input', rValueChange);
  gValueRange.addEventListener('input', gValueChange);
  bValueRange.addEventListener('input', bValueChange);
}

function rValueChange(event) {
  rValueInput.value = rValueRange.value;
  changeColorBg();
}

function gValueChange(event) {
  gValueInput.value = gValueRange.value;
  changeColorBg();
}

function bValueChange(event) {
  bValueInput.value = bValueRange.value;
  changeColorBg();
}

function changeColorBg() {
  let getRgb =
    'rgb(' +
    rValueRange.value +
    ', ' +
    gValueRange.value +
    ', ' +
    bValueRange.value +
    ')';

  finalColor.style.backgroundColor = getRgb;
  rgbInput.value = getRgb;
}
