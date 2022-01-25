// public, private, protected, static 
class User {
    // public : 생략가능
    // 모든 자식들 이용 가능
    name :string;

    // private : 자식들이 사용할 수 없음
    // 내부에서만 사용가능
    private familyName :string = '김';

    constructor(a:string){
        this.name = a + ' ' + this.familyName
    }

    public 함수(){

    }

    // private 변경
    이름변경함수() {
        this.familyName = '박'
    }

}

let user1 = new User('민수');
// user1.name = '안뇽';
// user1.familyName = 'park';
console.log(user1)

user1.이름변경함수()
console.log(user1)

class Person {
    // name;
    // constructor parameter쪽에 public일 사용하게 되면
    // 이 자리에 들어온 파라미터는 자식의 name속성에 기입해주세요
    // 축약어를 사용하면 보다 편리하게 class를 만들 수 있다
    constructor(public name :string) {

    }
}

let 자식 = new Person('kim')
console.log(자식);

// class 복사하기
// extends를 이용해서 복사가 가능하다
class User2 {
    // protected는 class 안에서만 사용가능
    // 단 private 보다 가용성이 높다 -> 자식을 사용할 수 없다
    // protected는 extends 된 자식에서는 사용가능하다
    protected x = 10;
    private y = 10;

    // static -> 부모만 가져다 쓸 수 있다. 자식들은  아예 가질 수 없다. -> 물려주기 X
    // static 은 private proected public + static 사용이 가능하다
    static z = 20;
    private static g = 22;
}

class NewUser extends User2 {
    doThis(){
        this.x = 20
    }
}

let 자식2 = new User2()
let 사람 = new NewUser()
console.log(사람)
console.log(자식2)
console.log(User2.z)

class User3 {
    private static skill = 'js';
    // static 은 this를 사용할 수 없고, 자기 자신을 불러와야 한다
    // this 를 사용하게 되면 찾을 수 없으니깐
    // 에러 메시지 해석 
    // 'skill' 속성이 'User3' 형식에 없습니다. 대신 정적 멤버 'User3.skill'에 액세스해야한다
    intro = User3.skill + ' 전문가입니다';

}

let 철수 = new User3()
console.log(철수)

// private는 class 안에서만 바뀌니깐
// User3.skill = 'ts'

let 철수2 = new User3()
console.log(철수2)

// (숙제1) 다음 x, y, z 속성의 특징을 설명해보십시오.
// (숙제2) x 속성에 숫자를 더해주는 함수가 필요합니다.
class User4 {
    private static x :number = 10; // class안에서만 수정이 가능하고, 자식에게 물려주지 않는 x
    public static y :number = 20; // 자식에게 물려주지 않지만 class내부가 아니더라도 수정이 가능한 y
    protected z :number = 30; // class 안에서만 수정이 가능하고, 자식에게 물려주어 수정 가능한 protected

    static addOne( a :number){
        User4.x = User4.x + a;
    }

    static printX(){
        console.log(User4.x);
    }
}

// 함수 앞에 static이 없다면 자식을 만들어 사용해야 하지만, static 이 있다면 자기 자신을 불러내 사용할수 있다.
User4.addOne(3);
User4.addOne(4);
User4.printX();

// (숙제3) 이런거 어떻게 만들게요 

class Square {
    width : number;
    height : number;
    color : string;
    constructor(width : number, height : number, color : string){
        this.width = width;
        this.height = height;
        this.color = color;
    }
    // 풀이 버전 : pulic 을 선언하여 바꾼다
    // constructor(public width : number, public height : number, public color : string){

    // }

    draw(){
        let square = document.createElement('div');
        
        square.style.width = this.width + 'px';
        square.style.height = this.height + 'px';
        square.style.background = this.color;
        square.style.position = 'absolute';
        square.style.top = Math.random() * 400 + 'px';
        square.style.left = Math.random() * 400 + 'px';

        // insertAdjacentElement : 엘러먼트에서 특정 위치 노드 삽입
        // beforebegin : element 앞에
        // afterbegin : element 안에 가장 첫번째 child
        // beforeend : element 안에 가장 마지막 child
        // afterend : element 뒤에

        document.body.insertAdjacentElement('beforeend', square);
    }

    // 풀이버전
    draw2(){
        let a = Math.random();
        let square = `<div style = " position : relative;
            top : ${a * 400}px;
            let : ${a * 400}px;
            width : ${this.width}px;
            height : ${this.height}px;
            background : ${this.color};
            "></div>`;

        // insertAdjacentHTML
        // HTML or XML 같은 특정 텍스트를 파싱하고, 특정 위치에 DOM tree 안에 원하는 node들을 추가 한다. 
        // insertAdjacentText
        // HTML 문자열을 지정위치에 삽입 (IE4 이상) -> 안이 아니라 태그 뒤에
        document.body.insertAdjacentHTML('beforeend', square);
    }

}

let 네모 = new Square(30, 30, 'red');
네모.draw();
네모.draw();
네모.draw();
네모.draw();
네모.draw2();
네모.draw2();
네모.draw2();
네모.draw2();