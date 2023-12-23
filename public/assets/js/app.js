const menu=document.querySelector('.menu')
const navbar=document.querySelector('.navbar')
const link=document.querySelectorAll('.link')

menu.addEventListener('click',()=>{
    navbar.classList.toggle('navbar-active')
})

link.forEach(links=>{
    links.addEventListener('click',()=>{
        navbar.classList.remove('navbar-active')
    })
})