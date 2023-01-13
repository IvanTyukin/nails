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
        });


        
        const phone = document.querySelector('.phone');
        const toolBar = document.querySelector('.tool-bar');
        const topHeader = document.querySelector(".top-header");
    
        // в IE Y - undefined. Исправлено заменой ScrollY на pageYoffset  
        

        let priceListArr = document.querySelectorAll('.price-list'); 
        
        for (let i = 0; i < priceListArr.length; i++) {
            const p = priceListArr[i].querySelector('.button');
            const table = (priceListArr[i].getElementsByTagName('table'))[0];
            
            p.addEventListener('click', function() {
                for (let j = 0; j < priceListArr.length; j++) {
                    let pActive = priceListArr[j].querySelector('.button');
                    let tableActive = (priceListArr[j].getElementsByTagName('table'))[0];

                    if (pActive.classList.contains('open') && pActive != p ) {
                        tableActive.classList.remove('open');
                        pActive.classList.remove('open');
                    } else if (pActive.classList.contains('open') && pActive == p ) {
                        tableActive.classList.add('open');
                        pActive.classList.add('open');
                    }           
                } 
                table.classList.toggle('open');
                p.classList.toggle('open');           
            });
        }


        // Перемещение header-a при скролле. ДОБАВИТЬ ПЛАНОСТЬ!!!! Появляется часть контента !

        window.addEventListener('scroll', function() {
            const Y = window.pageYOffset;
            const topHeaderHeight = topHeader.offsetHeight;

        
            if ((Y > 1) && (Y < topHeaderHeight))  {

                header.style.top = -Y + "px";

            } else if (Y >= topHeaderHeight) {

                header.style.top = -topHeaderHeight + "px";

            } else {

                header.style.top = 0;
                
            }
        });


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
                arrows: true,
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
                waitForAnimate: false,
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
                waitForAnimate: false,
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

            $(".slider3").slick({
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
                autoplaySpeed: 2000,
                pauseOnFocus: true,
                pauseOnHover: true,
                pauseOnDotsHover: true,
                draggable: true,
                swipe: true,
                touchTreshold: 5,
                touchMove: true,
                waitForAnimate: false,
                centerMode: true,
                variableWidth: true,
                rows: 2,
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