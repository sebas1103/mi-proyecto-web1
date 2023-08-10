/*Slider*/ 
var slider = document.querySelector('.as1'),
    btnIzq = document.getElementById("btn-left"),
    btnDer = document.getElementById("btn-right"),
    btnImg = document.getElementById("visibl1"),
    tabs = document.querySelectorAll(".btn_tab"),
    all_content = document.querySelectorAll(".new_slide"),
    btn_up = document.getElementById("btn_up");

btnDer.addEventListener("click", function(){
    slider.scrollLeft += slider.offsetWidth ;
})

btnIzq.addEventListener("click", function(){
    slider.scrollLeft -= slider.offsetWidth;
})

/*Tab de imagenes*/
tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
        all_content.forEach(cont => { cont.classList.remove("active") });
        all_content[index].classList.add("active");
    })
})

/*Boton Arriba Fixed*/
/*Aparece si se baja 200px*/
window.onscroll = function(){
    if(document.documentElement.scrollTop > 200){
        btn_up.classList.remove("up_not");
    } else{
        btn_up.classList.add("up_not");
    }
}
/*Funcion para ir hacia arriba*/
btn_up.addEventListener("click",function(){
    window.scrollTo(0,0);
})

/*Multicolor */
cambiocolor();
function cambiocolor(){
    let a = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    let c = Math.floor(Math.random()*256);

    document.getElementById("multi_color").style.backgroundColor="rgb("+a+","+b+","+c+")";
    setTimeout("cambiocolor()",1000);
}