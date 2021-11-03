export const createBall = () => {
   const ctx = document.getElementById('canvas').getContext('2d');
   // CREATE BALL
   let deltaV = -4; // speed
   let ray = 10; // rayon
   let dx = 1;
   let dy = -1;
   let posY = (canvas.height) - 50; // position on vertical axe (ordonnée)665
   let posX = (canvas.width) / 2; // position on horizontal axe (abcisse)600

   const ball = () => {
      requestAnimationFrame(ball); // recursivity 60x/sc
      ctx.clearRect(0, 50, canvas.width, 605); // supp old ball

      ctx.fillStyle = '#C3C3C3';
      ctx.beginPath();
      ctx.arc(posX, posY, ray, 0, Math.PI * 2, false);
      ctx.fill();
      posX += dx;
      posY += dy;
      // bounce
      if (posY + dy > (canvas.height) || posY + dy < ray) {
         dy = -dy;
         deltaV = -deltaV;
      }
      if (posX + dx > (canvas.width)-ray || posX + dx < ray) {
         dx = -dx;
      }
      if (posY + dy > (canvas.height) || posY + dy < ray) {
         dy = -dy;
      }
      posY += deltaV;
   };
   // ball()
   canvas.addEventListener('click', ball);
}