export const tabScores = () => {
   const gamerState = document.querySelector('.gamer-state');

   const scoreSpan = document.createElement('span');
   scoreSpan.innerHTML = 'SCORE: ';

   gamerState.append(scoreSpan);
}