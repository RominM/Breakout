export const tabLife = () => {
   const gamerState = document.querySelector('.gamer-state');

   const heartImg = document.createElement('img');
   heartImg.src = '../Images/heart-regular.svg';
   heartImg.alt = 'heart';

   gamerState.append(heartImg);
}