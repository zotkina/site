document.addEventListener('DOMContentLoaded', function () {
  const menuLinks = document.querySelectorAll('.menu-items a');

  menuLinks.forEach(link => {
      link.addEventListener('click', function (e) {
          e.preventDefault(); // Предотвращаем стандартное поведение ссылки
          const targetId = this.getAttribute('href').substring(1); // Получаем id раздела
          const targetSection = document.getElementById(targetId);

          if (targetSection) {
              // Плавный скролл к разделу
              targetSection.scrollIntoView({ behavior: 'smooth' });
          }
      });
  });
});

document.addEventListener('scroll', function() {
  const sections = document.querySelectorAll('.fade-in');

  sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight * 0.8) {
          section.classList.add('active');
          const words = section.querySelectorAll('span');
          words.forEach((word, index) => {
              setTimeout(() => {
                  word.classList.add('active');
              }, index * 100); // Задержка для каждого слова
          });
      } else {
          section.classList.remove('active');
          const words = section.querySelectorAll('span');
          words.forEach(word => {
              word.classList.remove('active');
          });
      }
  });
});

// Разбиваем текст на слова и оборачиваем каждое слово в span
document.querySelectorAll('.fade-in').forEach(paragraph => {
  const words = paragraph.textContent.split(' ');
  paragraph.innerHTML = words.map(word => `<span>${word}</span>`).join(' ');
});

const row1 = document.getElementById('row1');
const row2 = document.getElementById('row2');
const row3 = document.getElementById('row3');

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;

  // Первый ряд двигается вправо
  row1.style.transform = `translateX(${scrollTop / 2}px)`;

  // Второй ряд двигается влево
  row2.style.transform = `translateX(-${scrollTop / 2}px)`;

  // Третий ряд двигается вправо
  row3.style.transform = `translateX(${scrollTop / 2}px)`;
});


// Инициализация Swiper для блока "Преимущества"
document.addEventListener('DOMContentLoaded', () => {
  const swiperContainer = document.querySelector('.swiper-container');
  const elContainer = document.querySelector('.cont');

  // Проверяем ширину экрана
  if (window.innerWidth <= 720) {
      // Скрываем карточки и показываем слайдер
      elContainer.style.display = 'none';
      swiperContainer.style.display = 'block';

      // Инициализация Swiper
      const swiper = new Swiper('.swiper-container', {
          loop: true,
          navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
          },
          autoplay: {
              delay: 5000,
          },
          slidesPerView: 1,
          spaceBetween: 20,
      });
  } else {
      // Показываем карточки и скрываем слайдер
      elContainer.style.display = 'block';
      swiperContainer.style.display = 'none';
  }
});

// Переключение между карточками и слайдером при изменении размера окна
window.addEventListener('resize', () => {
  const swiperContainer = document.querySelector('.swiper-container');
  const elContainer = document.querySelector('.cont');

  if (window.innerWidth <= 720) {
      elContainer.style.display = 'none';
      swiperContainer.style.display = 'block';
  } else {
      elContainer.style.display = 'block';
      swiperContainer.style.display = 'none';
  }
});


var $cont = document.querySelector('.cont');
var $elsArr = [].slice.call(document.querySelectorAll('.el'));
var $closeBtnsArr = [].slice.call(document.querySelectorAll('.el__close-btn'));

setTimeout(function() {
$cont.classList.remove('s--inactive');
}, 200);

$elsArr.forEach(function($el) {
$el.addEventListener('click', function() {
  if (this.classList.contains('s--active')) return;
  $cont.classList.add('s--el-active');
  this.classList.add('s--active');
});
});

$closeBtnsArr.forEach(function($btn) {
$btn.addEventListener('click', function(e) {
  e.stopPropagation();
  $cont.classList.remove('s--el-active');
  document.querySelector('.el.s--active').classList.remove('s--active');
});
});

const text1 = document.querySelector('.text1');
const text2 = document.querySelector('.text2');

document.addEventListener('DOMContentLoaded', () => {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
      const toggleButton = item.querySelector('.faq-toggle');
      const answer = item.querySelector('.faq-answer');

      toggleButton.addEventListener('click', () => {
          item.classList.toggle('active');

          if (item.classList.contains('active')) {
              answer.style.maxHeight = answer.scrollHeight + 'px'; // Устанавливаем высоту равную содержимому
          } else {
              answer.style.maxHeight = '0'; // Скрываем содержимое
          }
      });
  });
});

// Инициализация Swiper
document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.swiper-container', {
      loop: true,
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
      autoplay: {
          delay: 5000,
      },
      slidesPerView: 1,
      spaceBetween: 20,
      breakpoints: {
          768: {
              slidesPerView: 2,
          },
          1024: {
              slidesPerView: 3,
          },
      },
  });
});

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.querySelectorAll(".mySlides");
  var dots = document.querySelectorAll(".dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}