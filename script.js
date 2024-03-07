'use strict'

const openModal = document.querySelector('[data-action="open-modal"]');
const closeModal = document.querySelector('[data-action="close-modal"]');
const modal = document.querySelector('.modal');

openModal.addEventListener('click', toggleModal);
closeModal.addEventListener('click', toggleModal);

function toggleModal() {
    const body = document.body;
    body.classList.toggle('.show-modal');
}

openModal.addEventListener('click', toggleModal);
closeModal.addEventListener('click', toggleModal);
