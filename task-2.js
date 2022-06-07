'use strict'

/*
* Завдання 2 Слайдер “до-після”
* */
class SliderBeforeAfter {
    constructor() {
        this.wrapper = document.querySelector('.wrapper');
        this.sliders = this.wrapper.querySelectorAll('.slider');
    }

    addRangeForEachSliders() {
        this.sliders.forEach(item => {
            item.insertAdjacentHTML('beforeend', `
                <div class="range"><span></span></div>
            `);
        });
    }

    range() {
        let isMoving = false;

        this.wrapper.addEventListener("mousedown", () => {
            isMoving = true;
        });

        this.wrapper.addEventListener("mouseup", () => {
            isMoving = false;
        });

        this.sliders.forEach(item => {
            item.addEventListener("mousemove", (event) => {
                const target = event.target;
                const cursorPositionInPercent = event.offsetX * 100 / 960;

                if (isMoving === true) {
                    target.closest('.slider').querySelector('img').style.clipPath = `inset(0 0 0 ${cursorPositionInPercent}%)`;
                    target.closest('.slider').querySelector('.range').style.left = cursorPositionInPercent + '%';
                }
            });
        });
    }

    init() {
        this.addRangeForEachSliders();
        this.range();
    }
}

const slider = new SliderBeforeAfter();
slider.init();