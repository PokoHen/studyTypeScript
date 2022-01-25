"use strict";
//html 조작
//union 타입이므로 바로 변경을 하지 못한다.
// 그러므로 narrowing 을 해주어야 한다.
// narrowing null인지 먼자 확인하기
let 제목 = document.querySelector('#title');
if (제목 != null) {
    제목.innerHTML = '반가워요';
}
// narrowing 방법
// instanceof -> 가장 많이 쓰는 방법
if (제목 instanceof Element) { }
// 왼쪽에 있는 요소를 element 라고 해주세요.
// as 키워드 비상이나 확신할 때 사용하자 -> 이거 그냥 쓰면 왜 typescript를 쓰냐..
제목 = document.querySelector('#title');
// ?를 붙히게 되면 innerHTML이 있으면 출력 아니면 undefined -> optional chaining
if ((제목 === null || 제목 === void 0 ? void 0 : 제목.innerHTML) != undefined) { }
// 마지막 방법은 strict ( 혹은 strictNullChecks)를 false로 바꿔준다
// link는 바꿀수 있을 것인가?
// typescript가 만든 element 타입이 있다
// 안에 HTML을 정확히 바꿔주기 위해 나온 타입이다.
// HTMLHeadingElement -> h1, h2, ////
// HTMLButtonElement -> button
// HTMLAnchorElement -> a
let 링크 = document.querySelector('.link');
if (링크 instanceof HTMLAnchorElement) {
    링크.href = 'https://kakao.com';
}
// 이벤트 리스터 달기
let 버튼 = document.querySelector('#button');
// eventListener 또한 narrowing이 필요하다
// 뒤에 ?를 붙히게 되면 ?를 넣으면 없으면 undefined를 뺏어낸다.
버튼 === null || 버튼 === void 0 ? void 0 : 버튼.addEventListener('click', function () {
});
// (숙제1) 버튼을 누르면 이미지를 바꿔봅시다.
let my_image = document.querySelector('#image');
if (my_image instanceof HTMLImageElement) {
    my_image.src = 'new.jpg';
}
//(숙제2) 바꾸고 싶은 html 요소가 많습니다.
let my_page = document.querySelectorAll('.naver');
my_page.forEach((a) => {
    if (a instanceof HTMLAnchorElement) {
        a.href = 'https://kakao.com';
    }
});
