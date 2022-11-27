let nav=document.querySelector('#nav');
let back_top=document.querySelector('.back_to_top');

window.addEventListener('scroll',function(){


    let scroll_value=window.scrollY;
    if(scroll_value>150){
        nav.classList.add('sticky');
        back_top.classList.add('show');
    }else {
        nav.classList.remove('sticky');
        back_top.classList.remove('show');
    }
    
})