    burger=document.querySelector('.burger')
    rightnav=document.querySelector('.rightnav')   
    navbar=document.querySelector('.navbar')
    navList=document.querySelector('.nav-list')



    burger.addEventListener('click',()=>{
        rightnav.classList.toggle('v-class-resp')
        navList.classList.toggle('v-class-resp')
        navbar.classList.toggle('h-nav-resp')
    }) 
   
     