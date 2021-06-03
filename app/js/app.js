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
        const select = document.querySelector('.select');
        const currentValue = document.querySelector('.select__current');
        const items = select.querySelectorAll('.select__item');

        // Открытие селекта
        select.addEventListener('click', ({currentTarget}) => {
            currentTarget.classList.toggle('is-active');

        })
        //

        // Обработчики на айтемы
        items.forEach((item) => {
            item.addEventListener('click', ({currentTarget}) => {
                currentValue.innerHTML = currentTarget.innerHTML;

            })
        })
        //

        // Закрытие селекта при клике вне селекта
        document.addEventListener('click', ({target}) => {

            if (target.classList.contains('select')) return;

            select.classList.remove('is-active');
        })
    }
    select();
});

