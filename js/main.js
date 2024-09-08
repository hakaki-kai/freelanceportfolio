const btn = document.querySelector('.dark-mode-btn');


// Проверка темной темы в system settings
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('dark');
    btn.classList.add('dark-mode-btn--active');
}

// проверка темной темы в localStorage
if (localStorage.getItem('darkMode') === 'dark') {
    document.body.classList.add('dark');
    btn.classList.add('dark-mode-btn--active');
}else if (localStorage.getItem('darkMode') === 'light') {
    document.body.classList.remove('dark');
    btn.classList.remove('dark-mode-btn--active');
}

//включение/выключение темной темы по времени суток
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
    if (event.matches) {
        document.body.classList.add('dark');
        btn.classList.add('dark-mode-btn--active');
        localStorage.setItem('darkMode', 'dark');
    } else {
        document.body.classList.remove('dark');
        btn.classList.remove('dark-mode-btn--active');
        localStorage.setItem('darkMode', 'light');
    }
})

// включение/выключение темной темы
btn.onclick = function() {
    btn.classList.toggle('dark-mode-btn--active');
    const isDark = document.body.classList.toggle('dark');

    if (isDark) {
        localStorage.setItem('darkMode', 'dark');
    } else {
        localStorage.setItem('darkMode', 'light');
    }
}