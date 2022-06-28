import './style.css';
import logoIcon from './logo-icon.png';
import breakfastIcon from './breakfast-icon.png';
import vegetarianIcon from './vegetarian-icon.png';
import dessertIcon from './dessert-icon.png';
import heartEmptyIcon from './heart-empty-icon.png';
import heartFilledIcon from './heart-filled-icon.png';

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