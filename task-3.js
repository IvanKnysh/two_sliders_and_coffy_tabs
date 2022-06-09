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
            items += `<li data-name="${item.title_en}"><span>${item.title_ua}</span></li>`;
        });

        this.ul.insertAdjacentHTML('beforeend', items);
    }

    menuClick(data) {
        this.ul.addEventListener('click', (e) => {
            const target = e.target;

            data.forEach(item => {
                if (target.parentElement.dataset.name === item.title_en) {
                    console.log(item.recipe);
                }
            });
        });
    }

    getData() {
        fetch('./recept.json')
            .then(response => response.json())
            .then(data => {
                this.addDefaultMenu(data);
                this.menuClick(data);
            })
            .catch(error => console.error(error));
    }

    init() {
        this.getData();
    }
}

const coffeeMachine = new CoffeeMachine();
coffeeMachine.init();