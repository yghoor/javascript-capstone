import logoIcon from './logo-icon.png';
import breakfastIcon from './breakfast-icon.png';
import vegetarianIcon from './vegetarian-icon.png';
import dessertIcon from './dessert-icon.png';

// Select icon placeholders on page

const logoImg = document.getElementById('logo-icon');
const breakfastImg = document.getElementById('breakfast-icon');
const vegetarianImg = document.getElementById('vegetarian-icon');
const dessertImg = document.getElementById('dessert-icon');

export default function displayIcons() {
  logoImg.src = logoIcon;
  breakfastImg.src = breakfastIcon;
  vegetarianImg.src = vegetarianIcon;
  dessertImg.src = dessertIcon;
}