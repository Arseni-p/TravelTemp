'use strict';

import { destionationInfoList } from "./dataInfo.js"

console.log(destionationInfoList);

const destionationImagesItems = document.querySelectorAll('.destionation__item');

destionationImagesItems.forEach((item, index) => {
  const destionationImage = item.querySelector('.destionation__image');
  const destionationCity = item.querySelector('.destionation__city');
  const destionationCountry = item.querySelector('.destionation__country');
  
  destionationImage.style.backgroundImage = `url(./images/${destionationInfoList[index].image}.webp)`;
  destionationCity.innerHTML = `${destionationInfoList[index].city}`;
  destionationCountry.innerHTML = `${destionationInfoList[index].country}`;
});