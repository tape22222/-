/*var listItemNum = 1;

function topChangeImg(imgNum) {
    document.querySelector('#top-slide-image').src = imgNum;
}

document.querySelectorAll('.top-image-list-item')[0].classList.add('this');
setInterval(function topSlide(){
    if(listItemNum == 4) {
        document.querySelectorAll('.top-image-list-item')[listItemNum - 1].classList.remove('this');
        listItemNum = 0;
    }

    if(listItemNum == 0) {
        document.querySelectorAll('.top-image-list-item')[listItemNum].classList.add('this');
        listItemNum++;
    } else {
        document.querySelectorAll('.top-image-list-item')[listItemNum - 1].classList.remove('this');
        document.querySelectorAll('.top-image-list-item')[listItemNum].classList.add('this');
        listItemNum++;
    }
    
    topChangeImg(`img/andong/a1_slide${listItemNum}.png`);
}, 4000);*/

var listItemNum = 1;

document.querySelectorAll('.top-image-list-item')[0].classList.add('this');
document.querySelectorAll('.top-image-slide')[0].classList.add('opacity');
setInterval(function topSlide(){
    if(listItemNum == 4) {
        document.querySelectorAll('.top-image-list-item')[listItemNum - 1].classList.remove('this');
        document.querySelectorAll('.top-image-slide')[listItemNum - 1].classList.remove('opacity');
        listItemNum = 0;
    }

    if(listItemNum == 0) {
        document.querySelectorAll('.top-image-list-item')[listItemNum].classList.add('this');
        document.querySelectorAll('.top-image-slide')[listItemNum].classList.add('opacity');
        listItemNum++;
    } else {
        document.querySelectorAll('.top-image-list-item')[listItemNum - 1].classList.remove('this');
        document.querySelectorAll('.top-image-slide')[listItemNum - 1].classList.remove('opacity');
        document.querySelectorAll('.top-image-list-item')[listItemNum].classList.add('this');
        document.querySelectorAll('.top-image-slide')[listItemNum].classList.add('opacity');
        
        listItemNum++;
    }
}, 4000);