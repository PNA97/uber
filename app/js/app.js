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

    let select = function () {
        let selectHeader = document.querySelector('.select__header')
        selectHeader.forEach(item =>{
            item.addEventListener('click', function (){
                this.parentElement.classList.toggle('is-active');

            })
        })
    };
});

