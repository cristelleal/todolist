export default function keyup(inputElement, button) {
  inputElement.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      button.click();
    }
  });
}
