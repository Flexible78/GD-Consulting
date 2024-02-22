'use strict';

document.querySelector('.burger').addEventListener('click', function () {
   this.classList.toggle('active');
   const burgerMenu = document.querySelector('.burger__menu');
   const burgerContacts = document.querySelector('.burger-contacts');

   if (burgerMenu && burgerContacts) {
      burgerMenu.classList.toggle('open');
      burgerContacts.classList.toggle('open');

      if (burgerMenu.classList.contains('open')) {
         burgerMenu.classList.remove('close');
         burgerContacts.classList.remove('close');
      } else {
         setTimeout(() => {
            burgerMenu.classList.add('close');
            burgerContacts.classList.add('close');
         }, 300);
      }
   }
});
