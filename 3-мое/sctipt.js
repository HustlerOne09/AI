document.addEventListener('DOMContentLoaded', () => {
    const decBtn = document.querySelector('.btn-dec');
    
    if (decBtn) {
        decBtn.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Светлая память Децлу! 🕊️');
        });
    }
});