export const tabLife = () => {
   const ctx = document.getElementById('canvas').getContext('2d');

   const heartImg = new Image();
   heartImg.src = '../Images/heart-regular.svg';
   heartImg.alt = 'life';
   ctx.drawImage(heartImg, 1100, 10);
}