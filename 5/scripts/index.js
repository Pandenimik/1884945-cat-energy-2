var o=document.querySelector(".burger-toggle"),n=document.querySelector(".main-nav__list");n.classList.toggle("main-nav__list--closed");o.classList.toggle("opened-nav");var d=function(){n.classList.toggle("main-nav__list--closed"),o.classList.toggle("opened-nav")};o.addEventListener("click",e=>{e.stopPropagation(),d()});var c=document.querySelector(".compare-slider__range"),m=function(){let e=c.value;document.querySelector(".compare-slider__img--before").style.clipPath=`polygon(0 0, ${e}% 0, ${e}% 100%, 0 100%)`,document.querySelector(".compare-slider__img--after").style.clipPath=`polygon(${e}% 0, 100% 0, 100% 100%, ${e}% 100%)`,document.querySelector(".compare-slider__thumb").style.left=`${e}%`};c?.addEventListener("input",m);u();async function u(){await window.ymaps3.ready;let{YMap:e,YMapDefaultSchemeLayer:l,YMapDefaultFeaturesLayer:r,YMapMarker:s}=window.ymaps3,t=new e(document.getElementById("map"),{location:{center:[30.323037,59.938631],zoom:14}});window.innerWidth>1439&&t.setLocation({center:[30.319246,59.938839],zoom:16}),t.addChild(new l),t.addChild(new r);let a=document.createElement("div");a.className="contacts__marker";let i=new s({coordinates:[30.323037,59.938631],draggable:!0,mapFollowsOnDrag:!0},a);t.addChild(i)}
