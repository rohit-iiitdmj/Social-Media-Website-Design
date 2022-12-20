
var settingsmenu=document.querySelector(".setting-menu")
var drakBtan=document.getElementById("drak-btn")


function settingsMenuToggle(){

    settingsmenu.classList.toggle("setting-menu-height");
}


drakBtan.onclick=function(){
    drakBtan.classList.toggle("drak-btn-on");
    document.body.classList.toggle("drak-theme");

    if(localStorage.getItem("theme")=="light")
    {
        localStorage.setItem("theme","drak");

    }
    else
    {
        localStorage.setItem("theme","light");
    }
}
if(localStorage.getItem("theme")=="light"){
    settingsmenu.classList.remove("drak-btn-on");
    settingsmenu.classList.remove("drak-theme");
}
else if( localStorage.getItem("theme")=="drak"){
    settingsmenu.classList.add("drak-btn-on");
    settingsmenu.classList.add("drak-theme");
}
else{
    localStorage.setItem("theme","light");
}