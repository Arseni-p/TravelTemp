'use strict';

export const menuBtn = document.querySelector('.menu__btn');
export const clickMenuBtn = () => {
  const headerContent = document.querySelector('.header__content');
  menuBtn.classList.toggle('menu__btn--close');
  headerContent.classList.toggle('header__content--open')
}