'use strict'

/*
* Завдання 3 Інтерфейс кавового автомата
* */
class CoffeeMachine {
    constructor() {
        this.wrapper = document.querySelector('.coffy');
        this.ul = this.wrapper.querySelector('ul');
    }

    addDefaultMenu(data) {
        let items = '';

        data.forEach(item => {
            items += `<li><span>${item.title_ua}</span></li>`;
        });

        this.ul.insertAdjacentHTML('beforeend', items);
    }

    getData() {
        fetch('./recept.json')
            .then(response => response.json())
            .then(data => {
                this.addDefaultMenu(data);
            })
            .catch(error => console.error(error));
    }

    init() {
        this.getData();
    }
}

const coffeeMachine = new CoffeeMachine();
coffeeMachine.init();