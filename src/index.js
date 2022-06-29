import './style.css';
import displayIcons from './displayIcons.js';
import createRecipePage from './createPage.js';

// Select icon placeholders on page

const logoImg = document.getElementById('logo-icon');
const breakfastImg = document.getElementById('breakfast-icon');
const vegetarianImg = document.getElementById('vegetarian-icon');
const dessertImg = document.getElementById('dessert-icon');
const heartEmptyImgs = document.querySelectorAll('.heart-empty-icon');
const heartFilledImgs = document.querySelectorAll('.heart-filled-icon');

// Display icons

logoImg.src = logoIcon;
breakfastImg.src = breakfastIcon;
vegetarianImg.src = vegetarianIcon;
dessertImg.src = dessertIcon;
heartEmptyImgs.forEach((img) => {
  img.src = heartEmptyIcon;
});
heartFilledImgs.forEach((img) => {
  img.src = heartFilledIcon;
});