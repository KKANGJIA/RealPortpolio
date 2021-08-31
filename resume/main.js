"use strict"

const $$detail = document.querySelectorAll('.show-detail');
const $imgHome = document.querySelector('.img-home');
const $imgAT = document.querySelector('.img-aT');
const $imgToy = document.querySelector('.img-toy');
const HOME_URL = ['./imgs/project1-1.JPG', './imgs/project1-2.JPG', './imgs/project1-4.JPG'];
const AT_URL = ['./imgs/project2-1.JPG', './imgs/project2-2.JPG', './imgs/project2-3.JPG'];
const TOY_URL = ['./imgs/project3-1.JPG'];
const $$dots = document.querySelectorAll('.dot');
const $aboutMe = document.querySelector('.about-me');



//각 프로젝트 토글 기능
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
      clicks[i].addEventListener('click', () => {
        $imgHome.src = HOME_URL[i]; //클릭 버튼에 따라서 이미지 변경
        $imgAT.src = AT_URL[i];
        $imgToy.src = TOY_URL[i];
      })
    })
  })
})



const first_line = '안녕하세요. 저는 강지아입니다. 웹 개발 분야의 프론트엔드 직무를 희망하며 하루하루 꿈을 코딩하고 있습니다.';
const second_line = "4차산업 시대 속에서 IT의 무한한 '성장 가능성'과 새로운 'IT 트렌드'에 관심이 있습니다.";
const third_line = '제 목표는 안다고 단언하지않고 내부의 동작원리를 알고 기본에 집중하는 겸손한 개발자가 되는 것 입니다.';

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
  second_line.split('').map((v, i) => {
    setTimeout(() => {
      $aboutMe.children[1].append(v);
    }, (i+65) * 130)
  });
  third_line.split('').map((v, i) => {
    setTimeout(() => {
      $aboutMe.children[2].append(v);
    }, (i+125) * 130)
  });
}




