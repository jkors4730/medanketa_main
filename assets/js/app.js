document.addEventListener('DOMContentLoaded', function() {
    const handbookExamples = document.querySelectorAll('.handbook-example');

    handbookExamples.forEach(function(example) {
      example.addEventListener('click', function() {
        this.classList.toggle('active');
      });
    });

    const burger = document.querySelector('.header__burger');
    const nav = document.querySelector('.header__nav');
    const layout = document.querySelector('.global-layout');
    const body = document.querySelector('body');

    burger.addEventListener('click', function() {
      this.classList.toggle('active');
      nav.classList.toggle('active');
      layout.classList.toggle('active');
      body.classList.toggle('active');
    });
});