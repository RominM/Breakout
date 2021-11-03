import { createBody } from './js/View/createBody.js';
import { displaySound } from './js/View/displaySound.js';
import { canvasCtx } from './js/canvasCtx.js';
import { tabScores } from './js/View/GamerState/tabScores.js';
import { tabLevel } from './js/View/GamerState/tabLevel.js';
import { tabLife } from './js/View/GamerState/tabLife.js';
import { displayRules } from './js/View/displayRules.js';

createBody();
displaySound();
tabScores();
tabLevel();
tabLife();
canvasCtx();
displayRules();

