'use strict'

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height * this.width;
    }
}

class ColoredRectangleWithText extends Rectangle {
    constructor(height, width, text, bgColor) {
        super(height, width);
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProbs() {
        //console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
        console.log(div.calcArea());
    }
}

const div = new ColoredRectangleWithText(25, 10, 'Hello world', 'red');

div.showMyProbs();
console.log(div.calcArea());

// const long = new Rectangle(10, 20);
// const square = new Rectangle(10, 10);

// console.log(square.calcArea());
// console.log(long.calcArea());