//get references
let photo = document.getElementsByClassName("photo");

//hover function for photo
for(let i=0; i<photo.length; i++){
    photo[i].onmouseover = function(){
        photo[i].style.opacity = "0.75"; 
    }
        
    photo[i].onmouseout = function(){
        photo[i].style.opacity = "1";
    }
}