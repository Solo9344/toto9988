'use strict';

{
  const images=[
    '01.jpg',
    '02.jpg',
    '03.jpg',
    '04.jpg',
    '05.jpg',
    '06.png',
    '07.jpg',
    '08.jpg',
    '09.jpg',
    '10.jpg',
  ];

  let currentNum = 0;

  function setMainImage(image){
    document.querySelector('main img').src = image;
  }

  setMainImage(images[currentNum]);

  function removeCurrentClass(){
    document.querySelectorAll('.thumnails li')[currentNum]
    .classList.remove('current');
  }

  function addCurrentClass(){
    document.querySelectorAll('.thumnails li')[currentNum]
    .classList.add('current');
  }

  const thumnails = document.querySelector('.thumnails');
  images.forEach((image, index) => {
    const li = document.createElement('li');
    if (index === currentNum) {
      li.classList.add('current');
    }

    li.addEventListener('click',() => {
      setMainImage(image);
      removeCurrentClass();
      currentNum = index;
      addCurrentClass();
    });

    const img = document.createElement('img');
    img.src = image;
    li.appendChild(img);
    thumnails.appendChild(li);
  });

  const next = document.getElementById('next');
  next.addEventListener('click',() => {
    removeCurrentClass();
    currentNum++;
    if(currentNum === images.length){
      currentNum = 0;
    }
    addCurrentClass();
    setMainImage(images[currentNum]);
  });

  const prev = document.getElementById('prev');
  prev.addEventListener('click',() => {
    removeCurrentClass();
    currentNum--;
    if(currentNum <0){
      currentNum = images.length - 1;
    }
    addCurrentClass();
    setMainImage(images[currentNum]);
  });

  let timeoutId;

  function playSlideshow(){
    timeoutId = setTimeout(()=>{
      next.click();
      playSlideshow();
    },1200);
  }

  const play = document.getElementById('play');
  const pause = document.getElementById('pause');

  play.addEventListener('click',()=>{
    play.classList.add('hidden');
    pause.classList.remove('hidden');
    playSlideshow();
  });

  pause.addEventListener('click',()=>{
    play.classList.remove('hidden');
    pause.classList.add('hidden');
    clearTimeout(timeoutId);
  });

}
