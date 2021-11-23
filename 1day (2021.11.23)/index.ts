let 이름 :string[] = ['kim', 'park'];
// 간단한 변수 - 변수에서 내가 원하는 변수 선언
// object
// 속성이 불안정 할 때에, ?를 붙힌다.
let 이름2 :{name? : string} = { name: 'kinm',};
// 여러개 속성 넣기
let 이름3 :string | number = 123;


// 변수 만들기
type 내타입 = string | number;
let 이름4 :내타입 = 123;

//파라미터 변수 넣기
// 변수에 넘버 넣기, 리턴도 넘버로
function 함수(x : number) :number{
    return x * 2;
}

//tuple 타입
type Member = [number, boolean];
let john:Member = [123, true];

type Member2 = {
    name : string,
    //모든 오브젝트 속성
    [key :string] : string,
}

let john2:Member2 = { name: 'kim', }

//class
class User {

    name:string;

    constructor(name:string) {
        this.name = name;
    }
    
}

// 변수 같은 경우 선언을 하게 되면 자동으로 변수를 지정해준다
let test = "text";

// 과제
// 이름, 나이, 출생지역 변수로 저장
let my_name = "jinhyeon";
let my_age = 28;
let my_country = "TongYeong";

// 가장 좋아하는 곡과 가수 이름을 변수에 object 자료형으로 담아보기
type song_type = {
    singer :string | number,
    song :string | number
}
let my_song :song_type = {
    singer : '윤하',
    song : '우산'
}

// 변수 지정
type my_project = {
    member :string[],
    days :number,
    started :boolean,
}

let project :my_project = {
    member : ['kim', 'park'],
    days : 30,
    started : true,
}