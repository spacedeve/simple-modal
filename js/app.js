const modal = document.querySelector('.modal');
const openBtn = document.querySelector('.hero__btn');
const closeBtn = document.querySelector('.modal__btn');

openBtn.addEventListener('click', () => {
  modal.classList.add('open-modal');
});

closeBtn.addEventListener('click', () => {
  modal.classList.remove('open-modal');
});