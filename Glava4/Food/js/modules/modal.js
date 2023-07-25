//Modal

const modalTriggers = document.querySelectorAll('[data-modal]'),
modal = document.querySelector('.modal');

function openModal() {
modal.classList.add('show');
modal.classList.remove('hide');
document.body.style.overflow = 'hidden'; //Заморозить страницу при октрытии окна
}

modalTriggers.forEach(btn => {
btn.addEventListener('click', openModal);
});

function openModal() {
modal.classList.add('show');
modal.classList.remove('hide');
document.body.style.overflow = 'hidden'; //Заморозить страницу при октрытии окна
clearInterval(modalTimerId);
}

function closeModal() {
modal.classList.add('hide');
modal.classList.remove('show');
// modal.classList.toggle('show');
document.body.style.overflow = ''; //Разморозить страницу при закрытии окна
}

modal.addEventListener('click', (e) => { //Закрыть окно при нажатии на фон
if (e.target === modal || e.target.getAttribute('data-close') == '') {
closeModal();
}
});

document.addEventListener('keydown', (e) => {
if (e.code === "Escape" && modal.classList.contains('show')) {
closeModal();
}
});

const modalTimerId = setTimeout(openModal, 50000);

function showModalByScroll() {
if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
openModal();
window.removeEventListener('scroll', showModalByScroll); //Удаляет обработчик события при повторном опускании вниз
}
}

window.addEventListener('scroll', showModalByScroll); 

