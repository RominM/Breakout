export const bground = () => {
   const body = document.querySelector('body');
   const canvas = document.querySelector('canvas');

   const main = document.createElement('main');
   main.hidden = false;

   const h1 = document.createElement('h1');
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
   // audio.src = '../Sounds/periphery-alpha-intro-loop-for-ringtone-alarm.mp3';
   audio.autoplay = true;
   audio.loop = true;

   soundBtn.append(soundOff);
   soundBtn.append(soundOn);

   infoBtn.append(infoImg);

   main.append(h1);
   main.append(canvas);
   main.append(soundBtn);
   main.append(infoBtn);
   main.append(audio);

   body.append(main);
}