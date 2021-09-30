export const rules = () => {
   const body = document.querySelector('body');

   const bgRules = document.createElement('div');
   bgRules.classList.add('bgRules');
   bgRules.hidden = true;

   const closeRulesBtn = document.createElement('button');
   closeRulesBtn.id = 'closeRulesBtn';
   const crossImg = document.createElement('img');
   crossImg.classList.add('crossImg');
   crossImg.src = '../Images/close.svg';

   const h2 = document.createElement('h2');
   h2.innerHTML = 'Game rules';

   const p = document.createElement('p');
   p.innerHTML = 'The player moves the racket from right to left to prevent the ball from falling into the area below. Each time the ball hits a brick, it disappears and the score increases by 1 point. The game ends if the ball falls below the racket or if all the bricks have been broken.'
   //The ball and racket speeds are 5 at the start and increase by 0.25 each time the ball hits the racket.//
   'The score is displayed when the game is over.'

   closeRulesBtn.append(crossImg);
   bgRules.append(closeRulesBtn);
   bgRules.append(h2);
   bgRules.append(p);

   body.append(bgRules);
}

// Les règles du jeu :
//  Le joueur déplace la raquette de droite à gauche pour empêcher la balle de tomber dans
// la zone en dessous
//  A chaque fois que la balle touche une brique, elle disparaît et le score augmente de 1
// point.
//  Le jeu s’arrête si la balle tombe en dessous de la raquette ou si toutes les briques ont été
// cassées.
//  Les vitesses de la balle et de la raquette sont de 5 au départ et augmentent de 0.25 à
// chaque fois que la balle touche la raquette.
//  Le score s’affiche lorsque le jeu est fini.