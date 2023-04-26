import { Modal } from "./modal.js"

// export const modalCreate = (event) => {
//   const modal = Modal();
//   modal.modalTitle.textContent = 'Create House';
//   modal.modalBtn.textContent = 'Create';
//   document.body.append(modal.modalTitle);
//   console.log(modal.modalBtn, modal.modalContainer, modal.modalTitle);

// вместо этого
// деструктуризация:
export const modalCreate = () => {
  const { modalTitle, modalBtn, modalContainer } = Modal();
  console.log(modalTitle, modalBtn, modalContainer);

  modalTitle.textContent = 'Create House';
  modalBtn.textContent = 'Create';

  //сделать так, чтобы окно закрывалось при клике на фон:
  document.addEventListener('click', (event) => { // добавляем слушатель событий, который отлавливает клик
    if (event.target == modalContainer) {
      modalContainer.remove()
    }
  });

  document.body.append(modalContainer);
}