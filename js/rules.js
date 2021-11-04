export const rules = () => {
   const body = document.querySelector('body');

   const bgRules = document.createElement('div');
   bgRules.classList.add('bgRules');
   bgRules.hidden = true;

   const closeRulesBtn = document.createElement('button');
   closeRulesBtn.id = 'closeRulesBtn';
   const crossImg = document.createElement('img');
   crossImg.classList.add('crossImg');
   crossImg.src = '../../images/close.svg';

   const h2 = document.createElement('h2');
   h2.innerHTML = 'Game rules';

   const p1 = document.createElement('p');
   p1.innerHTML = 
   "Hi there! Move the paddle from left to right with keyboard to prevent the ball from falling below it. Be careful to keep the ball in the zone or you will lose a life ! <br>\
   Break all the bricks and make a maximum of point to win and pass a higher level."

   const p2 = document.createElement('p');
   p2.innerHTML = "Point by brick:<br>\
   - White = 4pts<br>\
   - Green = 8pts<br>\
   - Blue = 12pts<br>\
   - Red = 20pts"

   const p3 = document.createElement('p');
   p3.innerHTML = "The game is over when there are no more bricks or the ball has died under the racket and there is no more life to save you.<br>\
   <br>\
   The ball and the paddle accelerate each time a brick is hit."

   const p4 = document.createElement('p');
   p4.innerHTML = "You'll find picking up bonuses when these appear.<br>\
   BONUS:"

   const p5 = document.createElement('p');
   p5.classList.add('p-bonus');
   p5.innerHTML = "- Point multiplier (x1.5 for each brick).<br>\
   - Point multiplier (x2 for each brick).<br>\
   - Point multiplier (x2.5 for each brick).<br>\
   - Speed ​​reducer: Restart the incrementation of zero(for 15 seconds). <br>\
   - Laser cannon: Shoot the bricks with a laser(for 15 seconds).<br>\
   - Glue pot: Glue the ball to the paddle, click to relaunch(for 20 seconds).<br>\
   - SuperBall: The ball ignites and crosses all the bricks in its path(for 15 seconds).<br>\
   - BONUS 50 Points<br>\
   - BONUS 100 Points<br>\
   - BONUS 200 Points<br>\
   - ADDITIONAL LIFE BONUS"

   const p6 = document.createElement('p');
   p6.innerHTML = "Watch out for the Malus !!!<br>\
   PENALTY:"

   const p7 = document.createElement('p');
   p7.classList.add('p-penalty')
   p7.innerHTML = "- Braking out: Significantly reduces the movement of the paddle(for 20 seconds)."
   
   const p8 = document.createElement('p');
   p8.innerHTML = "Bonuses and Maluses can appear on any brick and randomly.<br>\
   <br>\
   Save the ball and BREAK EVERYTHING!";

   closeRulesBtn.append(crossImg);
   bgRules.append(closeRulesBtn);
   bgRules.append(h2);
   bgRules.append(p1, p2, p3, p4, p5, p6, p7, p8);

   body.append(bgRules);
}

/*
Hi there! Move the paddle from left to right with keyboard to prevent the ball from falling below it.
Be careful to keep the ball in the zone or you will lose a life !
Break all the bricks and make a maximum of point to win and pass a higher level.

Point by brick:
- White = 4pts
- Green = 8pts
- Blue = 12pts
- Red = 20pts

The game is over when there are no more bricks or the ball has died under the racket and there is no more life to save you.

The ball and the racket accelerate each time a brick is hit.

You'll find picking up bonuses when these appear.
BONUS:
- Point multiplier (x1.5 for each brick).
- Point multiplier (x2 for each brick).
- Point multiplier (x2.5 for each brick).
- Speed ​​reducer: Restart the incrementation of zero. // for 15 seconds
- Laser cannon: Shoot the bricks with a laser. // for 15 seconds
- Glue pot: Glue the ball to the paddle, click to relaunch. // for 20 seconds
- SuperBall: The ball ignites and crosses all the bricks in its path // 15 seconds
- BONUS 50 Points
- BONUS 100 Points
- BONUS 200 Points
- ADDITIONAL LIFE BONUS

Watch out for the Malus !!!
PENALTY:
- Braking out: Significantly reduces the movement of the paddle. // 20 seconds

Bonuses and Maluses can appear on any brick and randomly.

Save the ball and BREAK EVERYTHING!
*/