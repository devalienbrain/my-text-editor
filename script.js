const editor = document.getElementById('editor');
const boldButton = document.getElementById('bold-button');
const alignmentSelect = document.getElementById('alignment-select');
const colorPicker = document.getElementById('color-picker');

boldButton.addEventListener('click', () => {
  const selection = window.getSelection();
  const selectedText = selection.toString();
  const boldText = `<strong>${selectedText}</strong>`;
  const modifiedContent = editor.value.replace(selectedText, boldText);
  editor.value = modifiedContent;
});

alignmentSelect.addEventListener('change', () => {
  const alignmentValue = alignmentSelect.value;
  editor.style.textAlign = alignmentValue;
});

colorPicker.addEventListener('input', () => {
  const colorValue = colorPicker.value;
  editor.style.color = colorValue;
});
