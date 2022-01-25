/* union type */
let 회원 :number | string = 123;
회원 = '회원';

let 회원들 :(number | string)[] = [1,'2',3];
let 오브젝트 :{ a: (number | string) } = { a:  '123'};

/* any : 모든 타입을 할당할 수 있다 - 단 typescript를 쓰는 이유가 없어진다. typescript라는 쉴드를 없애준다. */ 
/* unknown : any랑 같은 문법 any보다 안전한 문법 why? type 쉴드가 없어준다. 연산자 같은 경우에는 쉴드를 없애주지 않기 때문에 오류가 나타난다. */ 
let 애니 : any = 123;
애니 = '123';

let 언노운 :unknown = '123';

let test : number = 애니 - 1;
// let test2 :number = 언너운;   -> X

let 나이 :string | number;
// 나이 + 1; -> X why? 타입스크립트는 타입에 아주 엄격하기 때문에, string number 하나만 했을 때는 되지만, 둘 중 하나를 선택하면 되지 않는다. unknown 타입 같은 경우에도 정확한 타입이지 않기 때문에 연산자 에러가 난다.

/* 문제 */
// Q1 : 다음 변수 4개에 타입을 지정해 봅시다
let user :string = 'kim';
let age_day2 :unknown | number = undefined;
let married :boolean = false;
let 철수 :(string | boolean | number | unknown)[] = [user, age_day2, married];

// Q2 : 학교라는 변수의 타입을 지정해 보십시오
let 학교 : { 
    score: (number | boolean)[],
    teacher :string,
    friend: string | string[] 
} = {
    score : [100, 97, 84],
    teacher : 'Phil',
    friend : 'John'
}

학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher];

/* function */
// 변수에 아무것도 부여하지 않으면 any타입의로 타입 선언이 된다.

function 함수(x:number) :number{
    return x * 2;
};

함수(2);

// return 하는 것을 하지 않는 함수는 옆에 타입 부분에 void를 적어준다.
function 함수보이드 (x:number) :void {
    // return 1 + 1;
    1 + 1;
}

함수보이드(2);

// 함수 변수에 null값도 넣고 싶다면?
// 파라미터에 ?를 넣어준다는건 | undefinded 를 넣어주는 거와 같다.
// 즉, 변수 선언을 내가 넣어준 거 이외에 undefinded를 하나 더 넣어주는 것이다.

function 함수파라미터 (x? :number) :void{
    console.log(x);
}

함수파라미터();
함수파라미터(1);

// 주의
function 함수유닝온(x :number | string) :void{
    // console.log(x + 3);
}

// 왜 이때 에러가 날까? 타입스크립트는 타입에 대해 엄격하므로 union타입에 바로 연산자를 할려면 narrowing을 써야한다.

// 숙제
// Q1 : 이름을 파라미터로 입력하면 콘솔창에 "안녕하세요 홍길동"을 출력해주고, 아무것도 파라미터로 입력하지 않고 함수를 사용하면 "이름이 없습니다"를 출력하는 합수를 만들어 봅시다.
function 인사(x? : string) :string{
    if(x){
        return '안녕하세요 ' + x;
    }else{
        return '이름이 없습니다.';
    }
}

// Q2 : 함수에 숫자 또는 문자를 집어넣으면 자릿수를 세어 출력해주는 함수를 만들어 보십시오.
function 글자수(x: number | string ) :number{
    return x.toString().length;
}

// Q3 : 결혼 가능 확률을 알려주는 함수를 만들어 봅시다.
// x : 연봉(만단위) - 만원당 1점씩
// y : 자가 여부 있으면 500점
// z : 매력점수 - '상' '중' '하' 세가지로만 가능하고, 상일 경우에만 100
function 결혼가능하냐(x :number, y: boolean, z: string) :string | void{
    let score :number = x;
    if(y === true) score = score + 500;
    if(z === '상') score = score + 100;
    if(score >= 600){
        return "결혼가능";
    }
}