//1

class Human{
    constructor(obj){
        this.name = obj.name
        this.age  = obj.age
    }
    sayHello(){
        console.log(`Hello, my name is ${this.name}, i am ${this.age} years old`)
    }
};

class AlevelStudent extends Human{
    constructor(obj){
        super(obj)
        this.marks = obj.marks
    }
    averageMark(){
        return (this.marks.reduce((sum, mark)=> sum +=  mark ,0))/this.marks.length
          }
};

//2

class Calculator{
    constructor(){
        this.res = 0;
    }
    reset(){
        this.res = 0;
        return this
    }
    add(num){
        this.res += num;
        return this
    }
    sub(num){
        this.res -= num;
        return this
    }
    mul(num){
        this.res *= num;
        return this
    }
    div(num){
        this.res /= num;
        return this
    }
    pow(num){
        this.res = Math.pow(this.res, num)
        return this
    }
    sqrt(){
        this.res = Math.sqrt(this.res)
        return this
    }
    getResult(){
        return this.res
    }
};

//3

class Point{
    constructor(x, y){
        this.x = x;
        this.y = y
    }
    toString(){
        return `Point[${this.x} ${this.y}]`
    }
    set(x, y){
        this.x = x;
        this.y = y
        return this
    }    
    getX(){
        return this.x
    }
    getY(){
        return this.y
    }
};

class Line{
    constructor(point1, point2){
        this.point1 = point1;
        this.point2 = point2
    }
    toString(){
        return `Line(${this.point1.toString()} - ${this.point2.toString()})`
    }
    length(){
        return Math.sqrt(Math.pow((this.point2.getX() - this.point1.getX()),2)+Math.pow((this.point2.getY() - this.point1.getY()),2))
    }
}

class WeightedPoint extends Point{
    constructor(x, y, weight){
        super(x, y);
        this.weight = weight;
    }
    toString(){
        return `${this.weight}&${super.toString()}`;
    }
    set(x, y, weight){
        super.x = x;
        super.y = y
        this.weight = weight;
        return this
    }
    getWeight(){
        return this.weight;
    }
}


//4*

class CalculatorExtended extends Calculator{
    constructor(){
        super();
        this.str = '';
    }
    toString(){
        return `${this.str} = ${this.res}`
    }
    reset(){
        this.res = 0;
        this.str = '0';
        return this
    }
    add(num){
        this.str += ` + ${num}`
        return super.add(num)
    }    
    sub(num){
        this.str += ` - ${num}`
        return super.sub(num)
    }
    mul(num){
        this.str = (this.str.length >4)? `(${this.str}) * ${num}` : `${this.str} * ${num}`;
        return super.mul(num)
    }
    div(num){
        this.str = (this.str.length >4)? `(${this.str}) / ${num}` : `${this.str} / ${num}`;
        return super.div(num)
    }
    pow(num){
        this.str = `(${this.str}) ^ ${num}`
        return super.pow(num)
    }
    sqrt(){
        this.str = `√(${this.str})`
        return super.sqrt()
    }

}

//5*

function withUniqueID(SomeClass){
    let counterID = 0
    return function () {
        class A extends SomeClass{
            constructor() {
                super()
                this.id = counterID++
            }
        };      
        return new A
    }
}
