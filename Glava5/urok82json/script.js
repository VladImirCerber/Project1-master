'use strict';

const persone = {
    name: 'Alex',
    tel: '+79817891539',
    parents: {
        mom: 'Olga',
        dad: 'Mike'
    }
};

const clone = JSON.parse(JSON.stringify(persone));
clone.parents.mom = 'Anna';
console.log(persone);
console.log(clone);