let intro = Symbol('introduce');
class Person{
    constructor(nickname, age){
        this.nickname = nickname;
        this.age = age;
    }
    [intro]() {
        console.log(`大家好，我是${this.nickname},今年${this.age}岁`)
    }
};