let slideIndex = 0;
const slides = document.querySelectorAll('.photo-frame img');
const dots = document.querySelectorAll('.dot');

// Функция для отображения слайда по индексу
function showSlide(index) {
    const totalSlides = slides.length;

    // Убираем все классы active, prev и next с предыдущих слайдов
    slides.forEach((slide) => {
        slide.classList.remove('active', 'prev', 'next');
        slide.style.zIndex = 0; // Сбрасываем z-index
    });

    // Текущий слайд
    slides[index].classList.add('active');
    slides[index].style.zIndex = 3; // Текущий слайд на переднем плане

    // Предыдущий слайд
    slides[(index - 1 + totalSlides) % totalSlides].classList.add('prev');
    slides[(index - 1 + totalSlides) % totalSlides].style.zIndex = 2; // За текущим

    // Следующий слайд
    slides[(index + 1) % totalSlides].classList.add('next');
    slides[(index + 1) % totalSlides].style.zIndex = 1; // За предыдущим

    // Обновляем активные точки
    dots.forEach((dot, i) => {
        dot.classList.remove('active');
        if (i === index) {
            dot.classList.add('active');
        }
    });
}

// Функция для перехода к следующему слайду
function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
}

// Функция для перехода к предыдущему слайду
function prevSlide() {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide(slideIndex);
}

// Функция для перехода на конкретный слайд по точке
function currentSlide(n) {
    slideIndex = n;
    showSlide(slideIndex);
}

// Инициализация с первого слайда
showSlide(slideIndex);


// Навешиваем события для точек
dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        currentSlide(i);
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.photo-frame');
    let startX = 0;
    let endX = 0;

    slider.addEventListener('touchstart', (event) => {
        startX = event.touches[0].clientX;
    });

    slider.addEventListener('touchend', (event) => {
        endX = event.changedTouches[0].clientX;
        handleSwipe();
    });

    function handleSwipe() {
        const swipeThreshold = 50;
        if (startX - endX > swipeThreshold) {
            nextSlide();  // Свайп влево
        } else if (endX - startX > swipeThreshold) {
            prevSlide();  // Свайп вправо
        }
    }
});


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
