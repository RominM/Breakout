export const createPaddle = () => {
   const ctx = document.getElementById('canvas').getContext('2d');
   // CREATE PADDLE   
   let padWid = 100; // paddle wisth
   let padHei = 10; // paddle height
   let posX = (canvas.width - padWid) / 2; // position on horizontal axe (abcisse)600
   let posY = (canvas.height - padHei) - 35; // position on horizontal axe (abcisse)600

   
   const paddle = (() => {
      ctx.beginPath();
      ctx.rect(posX, posY, padWid, padHei);
      ctx.fillStyle = '#C3C3C3';
      ctx.fill();
      ctx.closePath();
   })()

   let mvtRight = false;
   let mvtLeft = false;

   const keyDownHandler = (e) => {
      if(e.key == "Right" || e.key == "ArrowRight") {
          mvtRight = true;
          console.log('go right');
      }
      else if(e.key == "Left" || e.key == "ArrowLeft") {
          mvtLeft = true;
          console.log('go left');
      }
  }
  
  const keyUpHandler = (e) => {
      if(e.key == "Right" || e.key == "ArrowRight") {
          mvtRight = false;
      }
      else if(e.key == "Left" || e.key == "ArrowLeft") {
          mvtLeft = false;
      }
  }
  
  if(mvtRight) {
   posX += 7;
   if (posX + padWid > canvas.width){
       posX = canvas.width - padWid;
   }
}else if(mvtLeft) {
   posX -= 7;
   if (posX < 0){
       posX = 0;
   }
}

   document.addEventListener("keydown", keyDownHandler, false);
   document.addEventListener("keyup", keyUpHandler, false);
}