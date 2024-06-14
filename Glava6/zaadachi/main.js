//Написать функцию, либо последовательность операций, которая вернет результат условий
//результат есть строка из сконкатенированных value элементов коллекции, расположенных в обратном порядке букв
//результат собирается толькко из непросроченных записей и конкатенируется в порядке возрастания order
//результат не содержит одинаковых букв

const input = [
    { value: 'abcd', order: 4, expired: false},
    { value: 'qwer', order: 2, expired: true},
    { value: 'xyz1', order: 1, expired: false},
    { value: 'abx2', order: 3, expired: false}
];

let result = input
    .filter((e1) => !expired)

console.log(result);




const propsForDelete = ['name', 'id'];

const obj = {

   name: 'qwe',

   id: 12346,

   host: '127.0.0.1',

   delay: 1500

};

const transform = function (obj, props) {
    delete obj.name;
    delete obj.id;
};


transform(obj, propsForDelete); // => {host: '127.0.0.1', delay: 1500}

console.log(obj);