const a = [];

a['key1'] = 1;
a['key2'] = 1;
a['key3'] = 1;

a['3'] = 1;
a[3] = 1;

console.log(a.length);


let num = 0;
const list = ['hey1', 'hey2', 'hey3', 'hey4'];

console.log(list[num + 1]);


let resulst =  5>6 ? console.log('true') : console.log('false')
//Колбэки 

const first = (callback) => {
    //Как будто бы запрос к API
    setTimeout(() => {
        console.log(1);
        callback();
    }, 500);
    
};

const second = () => {
    console.log(2);
};

first(second);




const doHomework = (subject, callback) => {
    alert(`Starting my ${subject} homework`);
    callback();
};

doHomework('math', () => {
    alert('Finished my homework');
});

let a = null;
console.log(a);

let arr = [1, 2, 3, 4, 5]
let result = arr.reduce(function(sum, current) {
    return sum + current;
}, 0)

console.log(result);

let map = new Map();

map.set("1", "str1");
map.set(1, "num1");
map.set(true, "bool1");

console.log(map.get("1"));
console.log(map.get(1));
console.log(map.get(true));

let John = {name: "John", surname: "Delto"};
let Ben = {name: "Ben", surname: "Gilson"};
let visitCountObj = {};
// let visitCountMap = new Map();
visitCountObj[Ben] = 234;
visitCountObj[John] = 123;
// visitCountMap.set(John, 123);
// console.log((visitCountMap.get(John)));
console.log((visitCountObj["[object Object"]));

let John = {name: "John", surname: "Delto"};
map.entries(John);
console.log(John);

let recipeMap = new Map([
    ["огурец", 500],
    ["помидор", 350],
    ["лук",    50]
  ]);
  
  // перебор по ключам (овощи)
  for (let vegetable of recipeMap.keys()) {
    console.log(vegetable); // перебор по ключам огурец, помидор, лук
  }

  for (let Number of recipeMap.values()) { 
    console.log(Number); //перебор по значениям
  }

  for (let entry of recipeMap.entries()) {
    console.log(entry);
  };

  