"use strict"

const $$detail = document.querySelectorAll('.show-detail');
const $imgShopping = document.querySelector('.img-shopping');
const $imgAT = document.querySelector('.img-aT');
const $imgDiary = document.querySelector('.img-diary');
const $imgYoutube = document.querySelector('.img-youtube');
const AT_URL = ['./imgs/project2-1.JPG', './imgs/project2-2.JPG', './imgs/project2-3.JPG'];
const DIARY_URL = ['./imgs/project3-1.JPG'];
const SHOPPING_URL = ['./imgs/shoppingList1.jpg', './imgs/shoppingList2.jpg'];
const YOUTUBE_URL = ['./imgs/youtube1.JPG'];
// const STUDY_URL = ['./imgs/project2-1.JPG', './imgs/project2-2.JPG', './imgs/project2-3.JPG'];
// const JOLJACK_URL = ['./imgs/project3-1.JPG'];
// const MOTION_URL = ['./imgs/project3-1.JPG'];
const $$dots = document.querySelectorAll('.dot');
const $aboutMe = document.querySelector('.about-me');



// //각 프로젝트 토글 기능
Array.from($$detail).forEach((v,i) => {
  const detailTag = v.querySelector('.detail');
  v.addEventListener('click', (event) => {
    const mainline = event.target.parentNode.parentNode.parentNode; // project-mainline
    if(!detailTag.classList.contains('hidden')){ //클릭 시 숨겨지게
      detailTag.classList.add('hidden');
      mainline.children[1].classList.add('hidden');
    } else { //클릭 시 보이게
      detailTag.classList.remove('hidden');
      mainline.children[1].classList.remove('hidden');
    }
  })  
})

//이미지 슬라이드바
Array.from($$dots).forEach((v,i) => {
  $$dots[i].addEventListener('click', ()=> {
    const clicks = $$dots[i].querySelectorAll('.click');
    Array.from(clicks).forEach((v,i) => {
      clicks[i].addEventListener('click', () => { //클릭 버튼에 따라서 이미지 변경
        $imgAT.src = AT_URL[i];
        $imgDiary.src = DIARY_URL[i];
        $imgShopping.src = SHOPPING_URL[i];
        $imgYoutube.src =  YOUTUBE_URL[i];
      })
    })
  })
})



const first_line = '안녕하세요. 저는 강지아입니다. 웹 개발 분야의 프론트엔드 직무를 희망하며 하루하루 꿈을 코딩하고 있습니다.';

//타이핑 효과 적용
setTimeout(() => {
  startEffect()
}, 2000);

function startEffect(){
  first_line.split('').map((v, i) => {
    setTimeout(() => {
      $aboutMe.children[0].append(v);
    }, i * 130)
  });
  // second_line.split('').map((v, i) => {
  //   setTimeout(() => {
  //     $aboutMe.children[1].append(v);
  //   }, (i+65) * 130)
  // });
  // third_line.split('').map((v, i) => {
  //   setTimeout(() => {
  //     $aboutMe.children[2].append(v);
  //   }, (i+125) * 130)
  // });
}




