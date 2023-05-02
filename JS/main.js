// main_updated.js
window.addEventListener('load', ()=>{
// 주메뉴
const gnb = document.querySelector('nav.gnb');
const gnbList = gnb.querySelectorAll('ul>li');
gnbList.forEach((listItem) => {
  const subMenu = listItem.querySelector('div'); //nav.gnb>ul>li>div
  listItem.addEventListener('mouseover', () => {
    subMenu.classList.add('on');
    subMenu.style.height = `${subMenu.scrollHeight}px`;
  });
  listItem.addEventListener('mouseout', () => {
    subMenu.classList.remove('on');
    subMenu.style.height = 0;
  });
});

// 검색창
const searchButton = document.querySelector('div.btn_srch > a');
const searchBox = document.querySelector('div.srch_wrap');

// 새로고침했을시 box가안보이고 버튼이보이게
searchBox.style.display = 'none';
searchButton.style.display = 'block';


// search 버튼 클릭시 버튼안보이고 box가보이게
searchButton.addEventListener('click', () => {
  searchBox.style.display = 'block';
  searchButton.style.display = 'none';
  document.body.style.overflow = 'hidden';
});


//close 버튼 클릭시 box 안보이고 button 이 보이게
const closeButton = document.querySelector('a.btn_srch_close');
closeButton.addEventListener('click', () => {
  searchBox.style.display = 'none';
  searchButton.style.display = 'block';
  document.body.style.overflow = 'auto';
});



// 탑버튼 
const TopBtn = document.querySelector('a.top_btn');
TopBtn.addEventListener('click', e => {
  e.preventDefault();
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })
})

window.addEventListener('scroll', () => {
  let scroll = document.querySelector('html').scrollTop;
  let topMenu = document.querySelector('.top_menu');

  if (scroll <= 0) {
    TopBtn.classList.remove("on", "ab");
    topMenu.classList.remove("on"); 
  } else if (scroll > 2700) {
    TopBtn.classList.add("ab");
    TopBtn.classList.add("on");
    topMenu.classList.add("on"); 
  } else {
    TopBtn.classList.remove("ab");
    TopBtn.classList.add("on");
    topMenu.classList.add("on");
  }
})
})


// 뉴스룸 
document.addEventListener('DOMContentLoaded', function () {
const newsItems = document.querySelectorAll('.news_list li');
const newsroomSection = document.querySelector('.newsroom_sec');

function onIntersection(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
}
const observerOptions = {
  root: null,
  threshold: 0.1,
};
const observer = new IntersectionObserver(onIntersection, observerOptions);
newsItems.forEach((item) => {
  observer.observe(item);
});
});

// 뉴스 레터 newsletter_box
document.addEventListener('DOMContentLoaded', function () {
  const newsletterBox = document.querySelector('.newsletter_box');

  function onIntersection(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('slide-in');
      } else {
        entry.target.classList.remove('slide-in');
      }
    });
  }

  const observerOptions = {
    root: null,
    threshold: 0.1,
  };

  const observer = new IntersectionObserver(onIntersection, observerOptions);
  observer.observe(newsletterBox);
});


// prhall
document.addEventListener('DOMContentLoaded', function () {
  const prhall = document.querySelector('.prhall');

  function onIntersection(entries) {
    entries.forEach((entry) => {
      if(entry.isIntersecting) {
        entry.target.classList.add('sliding');
      }else{
        entry.target.classList.remove('sliding');
      }
    })
  }

  const observerOptions = {
    root: null,
    threshold: 0.1,
  };

  const observer = new IntersectionObserver(onIntersection, observerOptions);
  observer.observe(prhall);
})


//  제품정보
document.addEventListener("DOMContentLoaded", function () {
  const targets = document.querySelectorAll(".target, .target.right");
  const productSection = document.querySelector(".product");

  function resetAnimation(target, animationClass) {
    target.classList.remove(animationClass);

    void target.offsetWidth; 

    target.classList.add(animationClass);
  }

  function applyAnimation(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        targets.forEach((target) => {
          const animationClass = target.classList.contains("right") ? "slide-in-right" : "slide-in-left";
          resetAnimation(target, animationClass);
        });
      }
    });
  }

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  const observer = new IntersectionObserver(applyAnimation, observerOptions);
  observer.observe(productSection);
});

