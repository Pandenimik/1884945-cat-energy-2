var t=document.querySelector(".burger-toggle"),n=document.querySelector(".main-nav__list"),c=function(){n.classList.toggle("main-nav__list--closed"),t.classList.toggle("opened-nav")};t.addEventListener("click",e=>{e.stopPropagation(),c()});var o=document.querySelector(".compare-slider__range"),l=function(){let e=o.value;document.querySelector(".compare-slider__img--before").style.clipPath=`polygon(0 0, ${e}% 0, ${e}% 100%, 0 100%)`,document.querySelector(".compare-slider__img--after").style.clipPath=`polygon(${e}% 0, 100% 0, 100% 100%, ${e}% 100%)`};o.addEventListener("input",l);