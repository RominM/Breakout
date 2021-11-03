export const displaySound = () => {
   const soundBtn = document.querySelector('#soundBtn');
   
   soundBtn.addEventListener('click', () => {
   const soundOn = document.querySelector('.soundOn');
   const soundOff = document.querySelector('.soundOff');
   const audio = document.querySelector('audio')
   
      if(audio.muted == false){
         audio.muted = true;
         soundOff.hidden = false;
         soundOn.hidden = true;
      }else{
         audio.muted = false;
         soundOff.hidden = true;
         soundOn.hidden = false;
      }
   })
}