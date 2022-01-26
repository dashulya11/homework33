'use strict';


(function () {

    const form  = document.getElementById('form');


    form.addEventListener('submit', event => {
        event.preventDefault();
        const obj = {};
        const input = event.target.querySelectorAll('input');
        

        input.forEach(input => {
             
            document.querySelector('#form').addEventListener('keydown', ({ target }) =>{
            if (target.nodeName !== 'INPUT') return;
                target.classList.remove('error');
                
            })

            document.querySelector('#form').addEventListener('blur', ({ target }) =>{
            if (target.nodeName !== 'INPUT') return;

            if (target.value.trim() === '') {
                target.classList.add('error');
                }
                
            })
            
            obj[input.name] = input.value;

        })
        
        createElement(obj);
        event.target.reset();
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
