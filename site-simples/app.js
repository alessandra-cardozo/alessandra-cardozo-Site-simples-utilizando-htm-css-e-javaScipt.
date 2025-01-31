'use strict';

const switcher = document.querySelector('.btn');
const body = document.body;

switcher.addEventListener('click', function() {
    if (body.classList.contains('light-theme')) {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        this.textContent = "Light";
    } else {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        this.textContent = "Dark";
    }

    console.log('current class name: '+ body.className);
});