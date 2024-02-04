const navbar_top = document.querySelectorAll('.navbar_top .container .navbar_top_menu .list a')


navbar_top.forEach((btn) =>{
    // for(let i = 0; i < navbar_top.length; i++){
            
    // }
    btn.addEventListener('click',() =>{
    btn.classList.remove('active')
        // btn[i].classList.add('active')
    })
})
