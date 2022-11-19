// let input;
// function addingEventListener() {
//     input = document.getElementById('button');

// function clickAlert() {
//   alert('I was clicked!');
// }

// input.addingEventListener('click', clickAlert);
// }
// addingEventListener();

let input = document.getElementById('button');

function addingEventListener()  {
  alert('I was clicked!');
input.addEventListener('input', addingEventListener);
}