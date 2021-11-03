import { rules } from "../rules.js";

export const displayRules = () => {
   const infoBtn = document.querySelector('#infoBtn');
   infoBtn.addEventListener('click', openRules);
   
   const closeRulesBtn = document.querySelector('#closeRulesBtn');
   closeRulesBtn.addEventListener('click', closeRules);   
}
rules();

const openRules = () => {
   const bgRules = document.querySelector('.bgRules');
   bgRules.hidden = false;
   
   const main = document.querySelector('main');
   main.hidden = true;
}

const closeRules = () => {
   const bgRules = document.querySelector('.bgRules');
   bgRules.hidden = true;

   const main = document.querySelector('main');
   main.hidden = false;
}