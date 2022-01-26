'use strict';


(function () {

    const form  = document.getElementById('form');


    form.addEventListener('submit', event => {
        event.preventDefault();
        const obj = {};
        const inputs = event.target.querySelectorAll('input');
        

        inputs.forEach(input => {
             
            
            
            obj[input.name] = input.value;

        })
        
        createElement(obj);
        event.target.reset();
    })
    
    document.querySelector('#form').addEventListener('keydown',(e) => {
        e.target.classList.remove('error');
    })
    document.querySelector('#form').addEventListener('focusout',({target}) => {
        if (target.value.trim() === '') {
            target.classList.add('error');
        }
    })

    function createElement(elementData) {
        const div = document.createElement('div');
        div.classList.add('card');
        
        const userName = document.createElement('div');
        const userSurName = document.createElement('div');

        userName.innerHTML = elementData.Firstname;
        userSurName.innerHTML = elementData.Lastname;

        div.prepend(userName);
        div.prepend(userSurName);
        document.querySelector('.card-content').append(div);
    }

})()
