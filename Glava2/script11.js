const arr = ['a', 'b', 'c'];   /// poryadok nachinaetsya s 0 elementa (Massiv!!!)

arr[10] ='456';

//console.log(arr[10]);


const arrObj = {                  ///Object!!!
    0: 'a',
    1: 'b',
    2: 'c',
    abc: {
        def: {
            z: 100,
            x: 200
        }
    }
};

console.log(arrObj.abc.def['x']);  // Обращение к свойству внутри свойства происходит через точку arrObj.abc.def

const d = 'd';

arrObj.d = '123';  /// 1-y variant cherez tochku. Prodolzhaem obyavlyat peremennie
console.log(arrObj.d);

arrObj['d'] = '123';
console.log(arrObj['d']);

const obj = {
    'Anna' : 500,
    'Alice' : 800
};


console.log(obj['Alice']);