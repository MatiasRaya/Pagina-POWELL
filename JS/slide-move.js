let index = 1;
viewSlide(index);

function nextSlider(n) {
    viewSlide(index+=n);
}

function positionSlide(n) {
    viewSlide(index=n);
}

setInterval(function time() {
    viewSlide(index+=1)
},4000);

function viewSlide(n) {
    let i;
    let slides = document.getElementsByClassName('body-slider');
    let bars = document.getElementsByClassName('bar');

    if(n > slides.length) {
        index = 1;
    }
    if(n < 1) {
        index = slides.length;
    }
    for(i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    for(i = 0; i < bars.length; i++) {
        bars[i].className = bars[i].className.replace(" active", "");
        n = index;
    }

    slides[index-1].style.display = 'flex';
    bars[index-1].className += ' active';
}