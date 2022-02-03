const buttons = document.querySelectorAll('.button');
const modal = document.querySelector('.modal-outer');
const closeButton = document.querySelector('.close-button');
const modalInner = document.querySelector('.modal-inner');

buttons.forEach(button => {
  button.addEventListener('click', modalOpen);
})

modal.addEventListener('click', modalCloseFromOverlay);

closeButton.addEventListener('click', modalClose);

window.addEventListener('keydown', closeModalByEscape);

function closeModalByEscape(event) {
  if (event.key == 'Escape') {
    modalClose();
  };
}

function modalOpen(event) {
  const card = event.target.closest('.card');
  const cardImage = card.querySelector('img');
  const desc = card.dataset.description;
  console.log(desc);
  console.log(cardImage.src);
  const modalImage = modalInner.querySelector('img');
  modalImage.src = cardImage.src.replace;
  const modalDetails = modalInner.querySelector('.details');
  modalDetails.innerHTML = desc;
  modal.classList.add('open');
}

function modalClose() {
  modal.classList.remove('open');
}

function modalCloseFromOverlay(event) {
  const isClickExactlyOnOuter = !event.target.closest(".modal-inner");
  if (isClickExactlyOnOuter) {
    modalClose();
  }
}