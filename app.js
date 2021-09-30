import { bground } from './js/bground.js';
import { displaySound } from './js/displaySound.js';
import { canvasCtx } from './js/canvasCtx.js';
import { tabScores } from './js/tabScores.js';
import { tabLevel } from './js/tabLevel.js';
import { tabLife } from './js/tabLife.js';
import { displayRules } from './js/displayRules.js';

bground();
displaySound();
canvasCtx();
tabScores();
tabLevel();
tabLife();
displayRules();


//  //init canvas
//  const canvas = document.querySelector('canvas');
//  const ctx = canvas.getContext('2d');
//  //create elem:paddle & ball
//  const paddle = () => {
//     ctx.fillStyle = '#C3C3C3';
//     ctx.fillRect = (10, 10, 25, 5);
//  }
//  paddle()