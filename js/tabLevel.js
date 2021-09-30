export const tabLevel = () => {
   const ctx = document.getElementById('canvas').getContext('2d');

   const starImg = new Image();
   starImg.src = '../Images/star-regular.svg';
   starImg.alt = 'star';
   ctx.drawImage(starImg, 575, 10);
}