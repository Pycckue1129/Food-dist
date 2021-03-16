'use strict';


window.addEventListener('DOMContentLoaded', () => {

    //tabs

    const tabContent = document.querySelectorAll('.tabcontent'),
        tabs = document.querySelectorAll('.tabheader__item'),
        tabsParent = document.querySelector('.tabheader__items');

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

    //timer

    const deadline = '2021-12-02';

    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor(t / 1000 / 60 / 60 / 24),
            hours = Math.floor((t / 1000 / 60 / 60) % 24),
            minutes = Math.floor((t / 1000 / 60) % 60),
            seconds = Math.floor((t / 1000) % 60);
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function setZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function getDateHtml(timerclass, endtime) {
        const timer = document.querySelector(timerclass),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(setTimerHtml, 1000);

        setTimerHtml();

        function setTimerHtml() {
            const t = getTimeRemaining(endtime);

            days.innerHTML = setZero(t.days);
            hours.innerHTML = setZero(t.hours);
            minutes.innerHTML = setZero(t.minutes);
            seconds.innerHTML = setZero(t.seconds);

            if (getTimeRemaining(endtime).total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    getDateHtml('.timer', deadline);
});