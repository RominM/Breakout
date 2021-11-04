export const tabLevel = () => {
   const gamerState = document.querySelector('.gamer-state');

   const divLevel = document.createElement('div');
   divLevel.classList.add('div-level');

   const nmbLevel = document.createElement('span');
   nmbLevel.innerHTML = '1';

   const imgLevel = document.createElement('img');
   imgLevel.src = '../../images/star-regular.svg';
   imgLevel.alt = 'star';

   divLevel.append(nmbLevel, imgLevel)
   gamerState.append(divLevel);
}