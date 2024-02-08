
// var width = window.innerWidth;

$("#bar_icon").click(function(){
    $(".second_nav_links").slideToggle(500)
    
})

let b_header = document.getElementById("b-header") 
// if(width>850){
//     document.getElementById("second_nav_links").style.display = "none !important"
// }

// document.getElementById("bar_icon").addEventListener("click" , function(){
//     document.getElementById("second_nav_links").style.display = "block"
// })

// document.getElementById("bar_icon").addEventListener("click" , function(){
//     document.getElementById("second_nav_links").style.display = "block"
// }
b_header.addEventListener("click", function(){
    window.scroll({
        top: 1000,
        behavior: "smooth",
    })
})