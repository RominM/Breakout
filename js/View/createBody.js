export const createBody = () => {
   const canvas = document.querySelector('canvas');

   const header = document.querySelector('header');

   const main = document.querySelector('main');
   main.hidden = false;

   const h1 = document.querySelector('h1');
   h1.innerHTML = 'BREAKOUT';

   const infoBtn = document.createElement('button');
   infoBtn.id = 'infoBtn';
   const infoImg = document.createElement('img');
   infoImg.classList.add('infoImg');
   infoImg.src = '../Images/info-circle-solid.svg';

   const soundBtn = document.createElement('button');
   soundBtn.id = 'soundBtn';
   const soundOn = document.createElement('img');
   const soundOff = document.createElement('img');
   soundOn.classList.add('soundOn');
   soundOn.src = '../Images/volume-up-solid.svg';
   soundOff.classList.add('soundOff');
   soundOff.src = '../Images/volume-mute-solid.svg';
   soundOff.hidden = true;
   const audio = document.createElement('audio');
   // audio.src = '../../Sounds/alpha-periphery_introLoop.mp3';
   audio.autoplay = true;
   audio.loop = true;

   soundBtn.append(soundOff);
   soundBtn.append(soundOn);

   infoBtn.append(infoImg);

   header.append(h1);
   header.append(soundBtn);
   header.append(infoBtn);
   header.append(audio);
   main.append(canvas);
}