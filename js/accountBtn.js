'use strict';

export const headerAccountSection = document.querySelector('.header__btn--wrapper');

export const getActiveBtn = (targetButton) => {
  const activeButton = headerAccountSection.querySelector('.active__btn');
  if (!activeButton) {
    targetButton.classList.add('active__btn');
  } else {
    activeButton.classList.toggle('active__btn');
    targetButton.classList.toggle('active__btn');
  }
}