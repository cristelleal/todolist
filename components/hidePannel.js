export default function hidePanel() {
  const emptyBox = document.querySelector('#empty');
  emptyBox.classList.remove('show');
  emptyBox.classList.add('hide');
}
