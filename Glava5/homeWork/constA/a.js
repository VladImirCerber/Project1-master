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