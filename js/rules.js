export const rules = () => {
   const bgRules = document.createElement('div');
   bgRules.classList.add('bgRules');

   const title = document.createElement('span');
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