// const pageTopBtn = document.getElementById('js-scroll-top');

// window.addEventListener("scroll", () => {
//     const currentY = window.pageYOffset;
//     if (currentY > 100) {
//         setTimeout(function () {
//             pageTopBtn.style.opacity = 1;
//         }, 1);
//         pageTopBtn.classList.remove('is-hide');
//     } else {
//         setTimeout(function () {
//             pageTopBtn.style.opacity = 0;
//         }, 1);
//         pageTopBtn.classList.add('is-hide');
//     }
// });

// // スクロールトップボタン
// scrollTop('js-scroll-top', 150); // 遅すぎるとガクガクになるので注意

// function scrollTop(el, duration) {
//     const target = document.getElementById(el);
//     target.addEventListener('click', function () {
//         let currentY = window.pageYOffset; // 現在のスクロール位置を取得
//         let step = duration / currentY > 1 ? 10 : 100; // 三項演算子
//         let timeStep = duration / currentY * step; // スクロール時間
//         let intervalId = setInterval(scrollUp, timeStep);
//         // timeStepの間隔でscrollUpを繰り返す。
//         // clearItervalのために返り値intervalIdを定義する。

//         function scrollUp() {
//             currentY = window.pageYOffset;
//             if (currentY === 0) {
//                 clearInterval(intervalId); // ページ最上部に来たら終了
//             } else {
//                 scrollBy(0, -step); // step分上へスクロール
//             }
//         }
//     });
// }

// const setVw = function () {
//     const vw = document.documentElement.clientWidth / 100;
//     document.documentElement.style.setProperty('--vw', `${vw}px`);
// }
// window.addEventListener('DOMContentLoaded', setVw);
// window.addEventListener('resize', setVw);

function scrollbarCheck(){
    const doc = document.documentElement;
    if (window.innerWidth !== doc.clientWidth){
        doc.classList.add('has-scrollbar');
    }else{
        doc.classList.remove('has-scrollbar');
    }
    doc.style.setProperty('--viewWidth', `${doc.clientWidth}px`)
}

document.addEventListener("DOMContentLoaded", () => {
    scrollbarCheck();
});
window.addEventListener('resize', ()=> {
    scrollbarCheck();
})
