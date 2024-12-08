/* eslint-disable no-undef */
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

  const closeModal = () => {
    document.querySelector('#support_form').classList.remove('active');
    layout.classList.remove('active');
    body.classList.remove('active');
  }

  document.querySelector('#support_form_close').addEventListener('click', (event) => {
    event.preventDefault();

    closeModal();
  });

  document.querySelector('#support_form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const data = {
      name: document.querySelector('#support_user_name').value,
      email: document.querySelector('#support_user_email').value,
      phone: document.querySelector('#support_user_phone').value,
      message: document.querySelector('#support_user_message').value,
    };

    if ( data.email && data.message ) {
      const res = await axios.post( '/api/email', data );
      console.log( res );

      document.querySelector('#support_form').reset();
      closeModal();

      alert('Сообщение в поддержку отправлено!');
    }
    else {
      alert('Email и Сообщение - обязательные поля!')
    }
  });

    
});