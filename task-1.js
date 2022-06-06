'use strict'

/*
* Завдання 1 Слайдер
* */
class Slider {
    constructor({ wrapper, speed, animationIn, animationOut }) {
        this.ul = document.querySelector(wrapper + ' ul');
        this.speed = speed ?? 3000;
        this.animationIn = animationIn ?? 'animate__fadeInRight';
        this.animationOut = animationOut ?? 'animate__fadeOutLeft';
    }

    animateCSS() {
        document.head.insertAdjacentHTML('afterbegin', `
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">
        `);

        this.ul.querySelectorAll('li').forEach(item => {
            item.classList.add('animate__animated');
        });
    }

    addDefaultActiveSlide() {
        this.ul.children[0].classList.add('show', this.animationIn);
    }

    removeAllSlideActiveClass() {
        this.ul.querySelectorAll('li').forEach(item => {
            item.classList.remove('show', this.animationIn);
            item.classList.remove('show', this.animationOut);
        });
    }

    slider() {
        let countPrev = -1;
        let countCurrent = 0;

        setInterval(() => {
            countCurrent++;
            countPrev++;

            if (this.ul.childElementCount === countCurrent) {
                countCurrent = 0;
            }

            if (this.ul.childElementCount === countPrev) {
                countPrev = 0;
            }

            this.removeAllSlideActiveClass();

            this.ul.children[countCurrent].classList.add('show', this.animationIn);
            this.ul.children[countPrev].classList.add('show', this.animationOut);
        }, this.speed);
    }

    init() {
        this.animateCSS();
        this.addDefaultActiveSlide();
        this.slider();
    }
}

// Add animation class from - https://animate.style/
const slider = new Slider({
    wrapper: '.slider',
    speed: 3000,
    animationIn: 'animate__bounceInRight',
    animationOut: 'animate__bounceOutLeft'
});
slider.init();