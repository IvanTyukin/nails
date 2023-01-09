'use strict'
        let menuBtn = document.querySelector('.header__burger'); 
        let fabars = document.querySelector('.fa-bars');
        let menu = document.querySelector('.menu');
        let header = document.querySelector('.header');
        
        menuBtn.addEventListener('click', function(){
            menu.classList.toggle('active');
            header.classList.toggle('active');
            document.body.classList.toggle('lock');
            menuBtn.classList.toggle('active');
        })


        
        const phone = document.querySelector('.phone');
        const toolBar = document.querySelector('.tool-bar');
        const topHeader = document.querySelector(".top-header");


        /**
         * По изменению размера экрана элемент
         * phone перемещается либо на toolbar
         * либо над toolbar-ом
         */

        
        window.addEventListener('resize', function() {
            const pageWidth = Math.max(
                document.body.scrollWidth, document.documentElement.scrollWidth,
                document.body.offsetWidth, document.documentElement.offsetWidth,
                document.body.clientWidth, document.documentElement.clientWidth
              );
            if (pageWidth <= 748) { // console.log показывает ширину на 20 меньше чем есть
                toolBar.appendChild(phone);
                phone.style.display = "block";
            } else {
                topHeader.appendChild(phone);
            }
        });


        // в IE Y - undefined. Исправлено заменой ScrollY на pageYoffset  

        // window.addEventListener('scroll', function() {
        //     const Y = window.pageYOffset;
        //     const headerHeight = header.offsetHeight;
        //     console.log(Y);                                           --------------    МУСОР
            

        //     if (Y > headerHeight){
        //         $(toolBar).addClass("fixed");
        //     }
        //     else{
        //         $(toolBar).removeClass("fixed");
        //     }
        // });
        

        function closeTab() {
            header.classList.toggle('active');
            menu.classList.toggle('active');
            menuBtn.classList.toggle('active');
            document.body.classList.toggle('lock');
        }
            
        












        $(document).ready(function() {
            $(".slider").slick({
                arrows: false,
                dots: true,
                adaptiveHeight: true,
                slidesToShow: 2,
                slidesToScroll: 1,
                speed: 2000,
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
                touchTreshold: 5,
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

            $(".slider1").slick({
                arrows: false,
                dots: false,
                adaptiveHeight: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                speed: 1000,
                easing: 'linear',
                infinite: false,
                initialSlide: 0,
                autoplay: true,
                autoplaySpeed: 4000,
                pauseOnFocus: true,
                pauseOnHover: true,
                pauseOnDotsHover: true,
                draggable: true,
                swipe: true,
                touchTreshold:5,
                touchMove: true,
                waitForAnimate: false,
                centerMode: true,
                variableWidth: true,
                rows: 3,
                responsive: [
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 1,
                            slidesPerRow: 1
                        }
                    }
                ]
            })


            $(".slider2").slick({
                arrows: false,
                dots: false,
                adaptiveHeight: true,
                slidesToShow: 2,
                slidesToScroll: 1,
                speed: 2000,
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
                touchTreshold: 5,
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