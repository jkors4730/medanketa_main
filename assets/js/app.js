document.addEventListener('DOMContentLoaded', function() {


  /* Consts */

  const header = document.querySelector('.header');
  const burger = document.querySelector('.header__burger');
  const nav = document.querySelector('.header__nav');
  const layout = document.querySelector('.global-layout');
  const body = document.querySelector('body');
  const handbookExamples = document.querySelectorAll('.handbook-example');
  const openFormButtons = document.querySelectorAll('.btn-open[data-open-form]');
  const closeFormButtons = document.querySelectorAll('.btn-close[data-close-form]');


  /* Accordeon */

  handbookExamples.forEach(function(example) {
    example.addEventListener('click', function() {
      this.classList.toggle('active');
    });
  });


  /* Burger click events*/

  burger.addEventListener('click', function() {
    this.classList.toggle('active');
    nav.classList.toggle('active');
    layout.classList.toggle('active');
    body.classList.toggle('active');
    header.classList.toggle('active');
  });


  /* Scroll page events*/

  window.addEventListener('scroll', function() {
    if (window.scrollY > 250) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });


  /* Open modal forms */

  openFormButtons.forEach(button => {
    button.addEventListener('click', function() {
      const formClass = this.getAttribute('data-open-form');
      document.querySelector('.' + formClass).classList.toggle('active');
      layout.classList.toggle('active');
      body.classList.toggle('active');
    });
  });

  /* Close modal forms */


  closeFormButtons.forEach(button => {
    button.addEventListener('click', function() {
      const formClass = this.getAttribute('data-open-form');
      document.querySelector('.' + formClass).classList.remove('active');
      layout.classList.remove('active');
      body.classList.remove('active');
    });
  });

  /* SHIT CODE */

  /* -- Layout control click */

  layout.addEventListener('click', function() {
    if (nav.classList.contains('active')) {
      burger.classList.remove('active');
      nav.classList.remove('active');
      layout.classList.remove('active');
      body.classList.remove('active');
      header.classList.remove('active');
    }
  
    if (document.querySelector('.form--modal.active')) {
      document.querySelector('.form--modal.active').classList.remove('active');
      layout.classList.remove('active');
      body.classList.remove('active');
    }
  });

    
});