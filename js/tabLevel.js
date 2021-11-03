export const tabLevel = () => {
   const gamerState = document.querySelector('.gamer-state');

   const starImg = document.createElement('img');
   starImg.src = '../Images/star-regular.svg';
   starImg.alt = 'star';

   gamerState.append(starImg);
}