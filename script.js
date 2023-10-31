var con=document.querySelector(".box");
var liked=document.querySelector(".ri-heart-3-fill")

con.addEventListener("dblclick", function(){
    liked.style.transform = "translate(-50%,-50%) scale(1)"
    liked.style.opacity= .7;

    setTimeout(function(){
        liked.style.transform = "translate(-50%,-50%) scale(0)"
        liked.style.opacity= 0;

    
    },2000)
    
})



