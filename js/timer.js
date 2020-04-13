window.addEventListener('DOMContentLoaded', function(){

  'use strict';

  let deadline = '2020-04-20';

  function getTimeremeined(endtime){
   let t = Date.parse(endtime) - Date.parse(new Date()),
   seconds = Math.floor((t/1000) % 60 ),
   minutes = Math.floor((t/1000/60) % 60 ),
   hours = Math.floor((t/(1000*60*60)));  
   
   
   return {
     'total': t,
     'seconds': seconds,
     'minutes': minutes,
     'hours': hours,

   };
  
 
 }

   function setClock(id, endtime) {
     let timer = document.getElementById(id),
     hours = timer.querySelector('.hours'),
     seconds = timer.querySelector('.seconds'),
     minutes = timer.querySelector('.minutes'),
     timeInterval = setInterval(updateClock, 1000);
     function updateClock() {
       let t = getTimeremeined(endtime);
       hours.textContent = t.hours ;
       seconds.textContent = t.seconds ;
       minutes.textContent = t.minutes;
       if(t.total <= 0){
         clearInterval(timeInterval);
       }
     }
   }


   setClock('timer', deadline);

});
    