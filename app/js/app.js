// Import jQuery module (npm i jquery)
import $ from 'jquery'
window.jQuery = $
window.$ = $

// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')

document.addEventListener('DOMContentLoaded', () => {

	// Custom JS
    $(window).scroll(function (){
        if ($(this).scrollTop() > $(this).height()){
            $('.top').addClass('active');
        } else {
            $('.top').removeClass('active');
        }
    });
    $('.top').click(function (){
        $('html,body').stop().animate({scrollTop:0}, 'slow', 'swing');
    });

    function select() {
        let select = document.querySelector('.select');
        let currentValue = document.querySelector('.select__current');
        let items = select.querySelectorAll('.select__item');

        // Открытие селекта
        select.addEventListener('click', (e) => {
            e.currentTarget.classList.toggle('is-active');
        })
        //

        // Обработчики на айтемы
        items.forEach((item) => {
            item.addEventListener('click', (e) => {
                currentValue.innerHTML = e.currentTarget.innerHTML;
            })
        })
        //

        // Закрытие селекта при клике вне селекта
        document.addEventListener('click', (eventObject) => {
            // console.log(eventObject.target);

            if (eventObject.target.classList.contains('select')) return;

            select.classList.remove('is-active');
        })

        // if (confirm('Тебе есть 18 лет?')) {
        //     console.log('PORNO!!!');
        // } else {
        //     console.log('poshel nahui pes');
        // }
        // //
    }
    select();
});

