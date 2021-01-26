/*global document*/

const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.img');
const arrows = document.querySelectorAll('.btn');
const dots = document.querySelectorAll('.option');
const backgrounds = document.querySelectorAll('.bg');

var index = 1;
var op_index = 0;
var size = slides[index].clientWidth;

function remColored(op) {
    
    'use strict';
    
    op.classList.remove('colored');
}

function remBackground(bg) {
    
    'use strict';
    
    bg.classList.remove('show');
}

update()

function update() {
    
    'use strict';
    
    slider.style.transform = "translateX("+ (-size * index) +"px)";
    
    dots.forEach(remColored);
    dots[op_index].classList.add('colored');
    
    backgrounds.forEach(remBackground);
    backgrounds[op_index].classList.add('show');
}

function slide() {
    
    'use strict';
    
    slider.style.transition = "transform .5s ease-in-out";
    
    update();
}

function checkBtn(btn) {
    
    'use strict';
    
    if(btn.id === "prev"){
        index--;
        
        if(op_index == 0){
            op_index =5;
        }else{
            op_index--;
        }
    }else if(btn.id === "next"){
        index++;
        
        if(op_index == 5){
            op_index =0;
        }else{
            op_index++;
        }
    }
    
    slide();
}

function clickBtn(btn) {
    
    'use strict';
    
    btn.onclick = function() {
        checkBtn(btn);
    };
}

function touchEdges() {
    
    'use strict';
    
    if(slides[index].id === "last"){
        
        slider.style.transition = "none";
        index = slides.length - 2;
        slider.style.transform = "translateX("+ (-size * index) +"px)";
        
    }else if(slides[index].id === "first") {
        
        slider.style.transition = "none";
        index = 1;
        slider.style.transform = "translateX("+ (-size * index) +"px)";
        
    }
}

function optionFunc(option) {
    
    'use strict';
    
    let i = Number(option.getAttribute("option-index"));
    
    index = i + 1;
    op_index = i;
    slide();
    
}

function checkOptionFunc(option) {
    
    'use strict';
    
    option.onclick = function() {
        optionFunc(option);
    }
}

slider.addEventListener('transitionend', touchEdges);
arrows.forEach(clickBtn);
dots.forEach(checkOptionFunc);