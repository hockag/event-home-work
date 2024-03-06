window.addEventListener("DOMContentLoaded",() => {
    const openModal = document.querySelector('[data-action="open-modal"]');
    const closeModal = document.querySelector('[data-action="close-modal"]');
    const modal = document.querySelector('.modal');
    const backdrop = document.querySelector('.backdrop');

    openModal.addEventListener('click', toggleModal);
    closeModal.addEventListener('click', toggleModal);

    function toggleModal() {
        backdrop.style.opacity = "1";
        backdrop.style.visibility = "visible";
    }

})