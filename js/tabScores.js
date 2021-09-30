export const tabScores = () => {
   const draw = (() => {
      const ctx = document.getElementById('canvas').getContext('2d');
      ctx.font = '15px PressStart2P-Regular';
      ctx.fillText('SCORE: ', 15, 35);
    })();
}