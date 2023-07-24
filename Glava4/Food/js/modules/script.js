window.addEventListener('DOMContentLoaded', () => {
  
    const tabs = require('/OSPanel/domains/Project1-master/Glava4/Food/js/modules/tabs'),
          modal = require('/OSPanel/domains/Project1-master/Glava4/Food/js/modules/modal'),
          timer = require('/OSPanel/domains/Project1-master/Glava4/Food/js/modules/timer'),
          cards = require('/OSPanel/domains/Project1-master/Glava4/Food/js/modules/cards'),
          calc = require('/OSPanel/domains/Project1-master/Glava4/Food/js/modules/calc'),
          forms = require('/OSPanel/domains/Project1-master/Glava4/Food/js/modules/forms'),
          slider = require('/OSPanel/domains/Project1-master/Glava4/Food/js/modules/slider');

    tabs();
    modal();
    timer();
    cards();
    calc();
    forms();
    slider();
});

