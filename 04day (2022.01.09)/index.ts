// literal types
// 더 엄격한 정의한 문자만 들어오게 한다
// 장점 : 내가 원하는 것만 넣어서 엄격히 관리 가능
// 자동 완성 힌트까지 준다

let 이름 :123;
이름 = 123;
// 이름 = 234;

let 접니다 : '대머리' | '솔로';
접니다 = '솔로';

function 함수(a: 'hello') : 1 | 0{
    return 1;
}

함수('hello');

// 원하는 값의 배열형 함수 같은 경우에는 ()[] 이렇게 넣으면 된다.
function rcp(b: '가위' | '바위' | '보') : ('가위' | '바위' | '보')[] {
    return ['가위']
}

rcp('가위');

// const 변수의 한계
// literal type 함수를 쓰면 지정되면서 여러 가지 데이터를 사용할 수 있다
// 쉽게 const 변수의 업그레이드
var 자료 = {
    name : 'kim' as 'kim',
}
console.log(자료.name); // kim

function 내함수(a : 'kim'){

}
// literal type은 무조건 이것만 들어올 수 있습니다 라고 해놓으면
// 아래와 같은 경우엔 문자의 타입은 kim이 아니므로 사용하지 못한다...; 
// 자료.name은 string이기 때문에, 즉, kim이 아닌 다른 것이 들어올 수도 있다.
// 오류 예시
// 내함수 (자료.name);

// solution 01: object를 만들 때 타입 지정을 확실히 한다
// var solution01 : 'kim' { name : 'kim' }

// solution 02: as 문법으로 타입을 속인다 (*assertion)
// var 자료 = { name : 'kim' as 'kim', }

// solution 03 : as const
//object를 value 값 그대로 지정해준다
// 그리고 readonly로 바뀐다.
// var 자료 = { name : 'kim' as 'kim', } as const