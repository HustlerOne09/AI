document.addEventListener('DOMContentLoaded', () => {
    
    // Обработка отправки форм бронирования
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); // Предотвращаем перезагрузку страницы
            
            // Собираем данные (для примера)
            const formData = new FormData(form);
            const name = form.querySelector('input[type="text"]').value;
            const phone = form.querySelector('input[type="tel"]').value;
            
            // Проверка на заполнение (базовая)
            if(name && phone) {
                alert(`Спасибо, ${name}! Ваша заявка принята. Мы свяжемся с вами по номеру ${phone} для подтверждения брони.`);
                form.reset(); // Очищаем форму после отправки
            } else {
                alert('Пожалуйста, заполните имя и телефон.');
            }
        });
    });

    // Плавный скролл для якорных ссылок (например, кнопка "Забронировать" в хедере)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Эффект изменения хедера при скролле (опционально для главной)
    // Если хедер прозрачный, при скролле можно сделать его плотным
    const header = document.querySelector('.header--transparent');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.style.backgroundColor = 'var(--bg-main)';
                header.style.position = 'fixed';
                header.style.color = 'var(--text-main)';
                // Меняем цвет текста и иконок
                header.querySelectorAll('.logo__text, .nav__link, .header__phone').forEach(el => {
                    el.style.color = 'var(--text-main)';
                });
            } else {
                header.style.backgroundColor = 'transparent';
                header.style.position = 'absolute';
                header.style.color = 'var(--white)';
                header.querySelectorAll('.logo__text, .nav__link, .header__phone').forEach(el => {
                    el.style.color = 'var(--white)';
                });
            }
        });
    }
});