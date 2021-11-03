export const tabLife = () => {
   const gamerState = document.querySelector('.gamer-state');

   const divLife = document.createElement('div');
   divLife.classList.add('div-life');

   const nmbLife = document.createElement('span');
   nmbLife.innerHTML = '3';

   const imgLife = document.createElement('img');
   imgLife.src = '../Images/heart-regular.svg';
   imgLife.alt = 'heart';

   divLife.append(nmbLife, imgLife);
   gamerState.append(divLife);
}