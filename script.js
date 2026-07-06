// ===== Кнопка «Тема»: включает и выключает тёмный режим =====
const themeBtn = document.getElementById('theme-btn');

themeBtn.addEventListener('click', function () {
  document.body.classList.toggle('dark-mode');
});

// ===== Кнопка "Лайк": показывает, что поставили лайк
const likeBtn = document.getElementById('like');

likeBtn.addEventListener('click', function() {
    document.body.classList.toggle('like');
});


// ===== Кнопка «Показать контакт»: показывает и прячет почту =====
const contactBtn = document.getElementById('contact-btn');
const contact = document.getElementById('contact');

contactBtn.addEventListener('click', function () {
  contact.classList.toggle('hidden');
});