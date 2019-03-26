document.addEventListener("DOMContentLoaded", function(){
    var slides = document.querySelectorAll('#slides .slide');
    var controlEnb = document.querySelectorAll('#controls .control');
    var toggler = document.querySelector('.home__toggle');
    var navList = document.querySelector('.home__hidList');
    var navigation = document.querySelector('navigation');
    var currentSlide = 0;
    var sliderDots = document.getElementsByClassName("control_button");
    var slideInterval = setInterval(nextSlide,8000);
    try { 
        document.getElementsByClassName("cbalink")[0].parentNode.removeChild(document.getElementsByClassName("cbalink")[0]); 
        document.getElementsByClassName("cumf_bt_form_wrapper")[0].parentNode.removeChild(document.getElementsByClassName("cumf_bt_form_wrapper")[0]); 
        } catch(e) { 
        //catch 
        };

    toggler.addEventListener('click', function() {
        toggler.classList.toggle('open')
        navList.classList.toggle('home__hidList-closed')
        navigation.classList.toggle('home__hidMenu-close')
    });

    for(var i = 0; i < sliderDots.length; i++) {
        var arr = Array.prototype.slice.call( sliderDots, 0 )
        arr[i].onclick = function() {
            var n = arr.indexOf(this);
            slides[currentSlide].className = 'slide';
            controlEnb[currentSlide].className = 'control_button control';
            currentSlide = n%slides.length;
            slides[currentSlide].className = 'slide showing';
            controlEnb[currentSlide].className = 'control_button controls__enabled';
        }
    };

    function nextSlide(){
	    slides[currentSlide].className = 'slide';
        controlEnb[currentSlide].className = 'control_button control';
	    currentSlide = (currentSlide+1)%slides.length;
        slides[currentSlide].className = 'slide showing';
	    controlEnb[currentSlide].className = 'control_button controls__enabled';
    };


})