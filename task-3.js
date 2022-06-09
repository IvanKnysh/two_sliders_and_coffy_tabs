'use strict'

/*
* Завдання 3 Інтерфейс кавового автомата
* */
class CoffeeMachine {
    constructor() {
        this.wrapper = document.querySelector('.coffy');
        this.ul = this.wrapper.querySelector('ul');
    }

    addDefaultMenuItems(data) {
        let items = '';

        data.forEach(item => {
            items += `<li data-name="${item.title_en}"><span>${item.title_ua}</span></li>`;
        });

        this.ul.insertAdjacentHTML('beforeend', items);
    }

    addMenuItemActiveClass(target) {
        this.ul.querySelectorAll('li').forEach(item => {
            item.classList.remove('active');
        });

        target.parentElement.classList.add('active');
    }

    clearSpan() {
        this.wrapper.querySelector('.coffe-content').querySelectorAll('span').forEach(item => {
            item.removeAttribute('class');
            item.removeAttribute('style');
        });
    }

    menuClick(data) {
        this.ul.addEventListener('click', (e) => {
            const target = e.target;
            const countElements = this.wrapper.querySelector('.coffe-content').childElementCount;

            this.addMenuItemActiveClass(target);
            this.clearSpan();

            data.forEach(item => {
                if (target.parentElement.dataset.name === item.title_en) {
                    item.recipe.forEach((rec, i) => {
                        this.wrapper.querySelector('.coffe-content').children[i].classList.add(rec.class_name);
                        this.wrapper.querySelector('.coffe-content').children[i].style.height = rec.volume / countElements * 100 + '%';
                    });
                }
            });
        });
    }

    getData() {
        fetch('./recept.json')
            .then(response => response.json())
            .then(data => {
                this.addDefaultMenuItems(data);
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