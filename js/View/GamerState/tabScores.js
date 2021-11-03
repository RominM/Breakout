export const tabScores = () => {
   const gamerState = document.querySelector('.gamer-state');

   const divScore = document.createElement('div');
   divScore.classList.add('div-score');

   const spanScoreTxt = document.createElement('span');
   spanScoreTxt.innerHTML = 'SCORE: ';

   const nmbScore = document.createElement('span');
   nmbScore.innerHTML = '0';

   divScore.append(spanScoreTxt, nmbScore);
   gamerState.append(divScore);
}