const editor = document.getElementById('editor');

let boldTrue = true;
document.getElementById('bold').addEventListener('click', function () {
  // console.log(editor.value);
  if (boldTrue) {
    editor.style = 'font-weight: bold';
    boldTrue = false;
  }
  else {
    editor.style = 'font-weight: none';
    boldTrue = true;
  }
});

let italicTrue = true;
document.getElementById('italic').addEventListener('click', function () {
  // console.log(editor.value);
  if (italicTrue) {
    editor.style = 'font-style: italic';
    italicTrue = false;
  }
  else {
    editor.style = 'font-style: none';
    italicTrue = true;
  }
});

let underlineTrue = true;
document.getElementById('underline').addEventListener('click', function () {
  // console.log(editor.value);
  if (underlineTrue) {
    editor.style = 'text-decoration: underline';
    underlineTrue = false;
  }
  else {
    editor.style = 'text-decoration: none';
    underlineTrue = true;
  }
});

document.getElementById('left-align').addEventListener('click', function () {
  // console.log(editor.value);
  editor.style = 'text-align: left';
});

document.getElementById('center-align').addEventListener('click', function () {
  // console.log(editor.value);
  editor.style = 'text-align: center';
});

document.getElementById('right-align').addEventListener('click', function () {
  // console.log(editor.value);
  editor.style = 'text-align: right';
});

document.getElementById('justify-align').addEventListener('click', function () {
  // console.log(editor.value);
  editor.style = 'text-align: justify';
});

document.getElementById('lower-upper-transform').addEventListener('click', function () {
  // console.log(editor.value);
  let text = editor.value;
  if (text === text.toUpperCase()) {
    editor.value = text.toLowerCase();
  }
  else {
    editor.value = text.toUpperCase();
  }
});

document.getElementById('color-picker').addEventListener('click', function () {
  // console.log(editor.value);
  editor.style.color = document.getElementById('color-picker').value;
});