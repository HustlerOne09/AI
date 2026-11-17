document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Логика работы фильтров на странице Меню (menu.html)
    const filterButtons = document.querySelectorAll('.filter-btn');
    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
            });
        });
    }

    // 2. Обработка клика по кнопкам (Забронировать, Купить и т.д.)
    const actionBtns = document.querySelectorAll('.btn--primary, .barista-card__add');
    
    actionBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Отменяем стандартный переход, если это ссылка (href="#")
            if (btn.tagName === 'A' && btn.getAttribute('href') === '#') {
                e.preventDefault();
            }
            
            const btnText = btn.textContent.trim();

            if (btnText.includes('Забронировать')) {
                alert('Открываем форму бронирования столика...');
            } else if (btnText.includes('Купить')) {
                alert('Переходим в каталог для покупки зерна...');
            } else if (btnText.includes('Добавить')) {
                alert('Товар добавлен в корзину!');
            }
        });
    });

    // 3. Плавный скролл (если в будущем добавите якорные ссылки)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});