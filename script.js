const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');
const modalClose = document.getElementById('modal-close');
const portfolioItems = document.querySelectorAll('.portfolio-item');

portfolioItems.forEach(item => {
    item.addEventListener('click', function() {
    const imageUrl = this.getAttribute('data-image');
    const imageAlt = this.querySelector('img').getAttribute('alt');
    modalImage.src = imageUrl;
    modalImage.alt = imageAlt;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    modalClose.focus();
    });
});

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    modalImage.src = '';
}

modalClose.addEventListener('click', closeModal);

modal.addEventListener('click', function(e) {
    if (e.target === modal) {
    closeModal();
    }
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
    closeModal();
    }
});
