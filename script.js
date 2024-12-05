// Анимация появления секций при прокрутке (для остальных блоков)
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.section'); // Секции для анимации

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Добавляем класс видимости
            }
        });
    }, {
        threshold: 0.1 // Порог видимости (10% элемента)
    });

    sections.forEach(section => {
        observer.observe(section); // Отслеживаем каждую секцию
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper(".swiper", {
      // Опции Swiper
      loop: true, // Бесконечный слайдер
      navigation: {
        nextEl: ".swiper-button-next", // Кнопка "вперед"
        prevEl: ".swiper-button-prev", // Кнопка "назад"
      },
      pagination: {
        el: ".swiper-pagination", // Индикаторы
        clickable: true, // Возможность клика по точкам
      },
      effect: "slide", // Эффект перехода
      speed: 600, // Скорость анимации (в мс)
    });
  });
  