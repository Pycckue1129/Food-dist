'use strict';

const tabContent = document.querySelectorAll('.tabcontent'),
    tabs = document.querySelectorAll('.tabheader__item'),
    tabsParent = document.querySelector('.tabheader__items');

window.addEventListener('DOMContentLoaded', () => {
    function hideContent() {
        tabContent.forEach((item, i) => {
            item.classList.add('hide');
            item.classList.remove('show');
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });

    }

    function showContent(i = 0) {
        tabContent[i].classList.remove('hide');
        tabContent[i].classList.add('show');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideContent();
    showContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;
        console.log(target);
        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideContent();
                    showContent(i);
                    console.log(item);
                }
            });
        }
    });
});