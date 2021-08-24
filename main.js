"use strict"

const you = "프론트엔드 개발자를 찾고 계신가요?";
const me = "저와 함께 성장할 회사를 찾고 있습니다!";
const youTag = document.querySelector('#you');
const meTag = document.querySelector('#me');
const saTriggerMargin = 200;
const saElementList = document.querySelectorAll('.sa');
const tel = document.querySelector('#tel');
const email= document.querySelector('#email');


function onTypingEffect(){
  you.split('').map((v, i) => 
    setTimeout(() => {
      youTag.append(v)
    }, i * 150)
  );

  me.split('').map((v, i) => 
    setTimeout(() => {
      meTag.append(v)
    }, (i + 20) * 150)
  );
}
onTypingEffect();


// Scroll Animation (sa, 스크롤 애니메이션)
const saFunc = function() {
  for (const element of saElementList) {
    if (!element.classList.contains('show')) {
      if (window.innerHeight > element.getBoundingClientRect().top + saTriggerMargin) {
        element.classList.add('show');
      }
    }
  }
}

window.addEventListener('scroll', saFunc);


// const hide = document.querySelector('#hide');
// const buttons3 = document.querySelector('.buttons3');
// function clickButton() {
//   tel.addEventListener('click', () => {
//     hideTel.classList.remove('hideTel');
//     buttons3.setAttribute('id', 'show');
//   })
  
//   email.addEventListener('click', () => {
    
//   })
// }
// clickButton();
