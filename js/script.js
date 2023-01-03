'use strict'
        let menuBtn = document.querySelector('#menu_btn');
        let menuMobileContainer = document.querySelector('.menu-mobile-container');
        let menuMobileBtn = document.querySelector('.menu-mobile__btn');
        let fabars = document.querySelector('.fa-bars');
        
        menuBtn.addEventListener('click', function (){
            menuMobileContainer.classList.add('active');
            fabars.classList.add('rotate');
        });

        menuMobileBtn.addEventListener('click',function (){
            menuMobileContainer.classList.remove('active');
            fabars.classList.remove('rotate');
        });

        window.onscroll = () => {
            const toolBar = document.querySelector('.tool-bar');
            const Y = window.scrollY;
            

            if (Y > 90){
                toolBar.classList.add('tool-bar_fixed');
            }
            else{
                toolBar.classList.remove('tool-bar_fixed');
            }
        };




        $(document).ready(function() {
            $(".slider").slick({
                arrows: false,
                dots: true,
                adaptiveHeight: true,
                slidesToShow: 2,
                slidesToScroll: 1,
                speed: 1000,
                easing: 'linear',
                infinite: false,
                initialSlide: 0,
                autoplay: true,
                autoplaySpeed: 3000,
                pauseOnFocus: true,
                pauseOnHover: true,
                pauseOnDotsHover: true,
                draggable: true,
                swipe: true,
                touchTreshold:10,
                touchMove: true,
                waitForAnimate: true,
                centerMode: true,
                variableWidth: true,
                rows: 1,
                responsive: [
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 1
                        }
                    }
                ]
            });
        });