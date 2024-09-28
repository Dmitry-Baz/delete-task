
const div = document.querySelector("div");
div.addEventListener("click", (event) => {
  const p = event.target.closest("p");
  if (p) {
    p.style.color = "red";
  }
});


function createModal() {
    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'modal-overlay';

    const deleteModal = document.createElement('div');
    deleteModal.className = 'delete-modal';

    const question = document.createElement('h3');
    question.className = 'delete-modal__question';
    question.textContent = 'Вы действительно хотите удалить эту задачу?';

    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'delete-modal__buttons';

    const cancelButton = document.createElement('button');
    cancelButton.className = 'delete-modal__button delete-modal__cancel-button';
    cancelButton.textContent = 'Отмена';
    cancelButton.onclick = function() {
        modalOverlay.remove(); // Закрыть модальное окно при нажатии на "Отмена"
    };

    const confirmButton = document.createElement('button');
    confirmButton.className = 'delete-modal__button delete-modal__confirm-button';
    confirmButton.textContent = 'Удалить';
    confirmButton.onclick = function() {
        alert('Задача удалена!'); // Логика удаления задачи
        modalOverlay.remove(); // Закрыть модальное окно после удаления
    };

    // Собираем модальное окно
    buttonContainer.appendChild(cancelButton);
    buttonContainer.appendChild(confirmButton);
    deleteModal.appendChild(question);
    deleteModal.appendChild(buttonContainer);
    modalOverlay.appendChild(deleteModal);

    // Добавляем модальное окно в body
    document.body.appendChild(modalOverlay);
}

// Обработчик события для кнопки открытия модального окна
document.getElementById('openModalButton').onclick = createModal;