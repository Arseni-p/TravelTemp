'use strict';

export const headerAccountSection = document.querySelector('.header__btn--wrapper');

export const getActiveBtn = (targetButton) => {
  const activeButton = headerAccountSection.querySelector('.active__btn');

  if (targetButton && targetButton !== activeButton) {
    targetButton.classList.add('active__btn')
    activeButton.classList.toggle('active__btn')
  } 
}