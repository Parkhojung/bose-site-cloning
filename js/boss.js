
function menu_click_fun(x){
    // bar event
    x.classList.toggle("change");

    
    // sub menu event
    var sub_menu = document.querySelector(".sub-menu");
    if(sub_menu.style.visibility == 'visible'){
//            alert("change none");
        
        sub_menu.style.opacity = 0;
        sub_menu.style.visibility ='hidden';
    }else{
        
//            alert("change block");
        sub_menu.style.opacity = 1 ;
        sub_menu.style.visibility = 'visible';
    }
}
