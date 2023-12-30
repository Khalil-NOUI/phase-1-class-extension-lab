
class Polygon {

    constructor(params){
        this.params = params
      
    };

    get countSides () {
        return this.params.length;
    };

    get perimeter() {
        return this.params.reduce((sideA, sideB) => sideA + sideB,0)
    };
};


class Triangle extends Polygon {
    // constructor(...arg){
    //     super(...arg)
    // } dont need if im not adding new params

    get isValid() {
        const [a, b, c] = this.params;
        return a + b > c && b + c > a && c + a > b;
    }
}

class Square extends Polygon {
    constructor(...arg) {
        super(...arg)
    }

    get isValid() {
        const [a, b, c, d] = this.params;
        return a === b && b === c && c === d;
    }

    get area() {
        return this.params[0] **2
    }
}


