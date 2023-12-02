'use strict';

import { destinationInfoList } from "./dataInfo.js";
import { headerAccountSection, getActiveBtn } from "./activeBtn.js";

console.log(destinationInfoList);

const destinationImagesItems = document.querySelectorAll('.destination__item');

destinationImagesItems.forEach((item, index) => {
  const destinationImage = item.querySelector('.destination__image');
  const destinationCity = item.querySelector('.destination__city');
  const destinationCountry = item.querySelector('.destination__country');
  //if else
  destinationImage.style.backgroundImage = `url(./images/${destinationInfoList[index].image}.webp)`;
  destinationCity.innerHTML = `${destinationInfoList[index].city}`;
  destinationCountry.innerHTML = `${destinationInfoList[index].country}`;
});

headerAccountSection.addEventListener('click', event => getActiveBtn(event.target))



