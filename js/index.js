
import { Header } from './header.js';
import { SearchAndSort } from './searchAndSort.js';

// Точка входа в app
const createApp = () => {
  const header = Header();
  const searchSort = SearchAndSort();
  document.body.append(header, searchSort);

}
// Запуск app
createApp();





















// С Арсеном делали:

// // document.body.style.background = 'red'; // меняет background
// // setTimeout(() => document.body.style.background = 'green', 2000); // меняет background со временем
// // setInterval(() => document.body.style.background = 'blue', 4000); // меняет background со временем, но меняется через интевал
// // setInterval(() => document.body.style.background = 'yellow', 6000);

// const form = document.querySelector('#form');
// const nameInp = form.querySelector('#name');

// console.log(form);
// console.log(nameInp);

// nameInp.addEventListener('change', (event) => {
//   console.log(event.target.value);
// })

// let obj = {
//   mane: '',
//   airbnbURL: '',
//   imgURL: '',
//   price: 0,
//   summary: '',
// }

// let formHandler = () => {

// };

// let newCard = (imgURL, name, summary, airbnbURL, price) => {
//   return `
//   <div class="chank">
//           <img src="${imgURL}" alt="house">
//           <h2 class="chank-title">${name}</h2>
//           <div class="chank-summary">
//             <h3 class="summary-title">Summary</h3>
//             <p class="summary-description">${summary}</p>
//           </div>
//           <div class="chank-references">
//             <h3 class="references-title">References</h3>
//             <ul class="references-list">
//               <li class="references-item">
                // <a href="${airbnbURL}">👉🏿 airbnb</a>
//               </li>
//               <li class="references-item">$${price} night</li>
//             </ul>
//           </div>
//         </div>`
// }
