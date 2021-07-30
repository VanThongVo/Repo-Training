class People {
    constructor (height, weight) {
        this._height = height;
        this._weight = weight;
    }
    set height (height){
        this._height = height;
    }
    get height(){
        return this._height;
    }
    set weight(weight){
        this._weight = weight;
    }
    get weight(){
        return this._weight;
    }
    BMI (){
        return this._weight/(this._height * 2);
    }
}
var p = new People(173, 65);
console.log(`Chi so BMI = `, p.BMI())