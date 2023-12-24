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
// scroll animation
AOS.init();
// gsap

TweenMax.from('.logo',{
    opacity:0,
    delay:.5,
    x:-50
})

TweenMax.staggerFrom('.navbar li .link ',1,{
    opacity:0,
    delay:.5,
    stagger:.5,
    delay:.22,
    x:-20,
    ease:Power3.ease
},.004)
TweenMax.from('header .btn-outline',{
    opacity:0,
    delay:.6,
    stagger:.7,
    delay:.30,
    x:-20
})

// var tl=gsap.TimeLine()
TweenMax.from('.hero__title h1',{
    opacity:0,
    delay:1,
    y:-50
})
TweenMax.from('.hero__title p',{
    opacity:0,
    delay:1.5,
    y:-50
})
TweenMax.from('.hero__title .btn-primary',{
    opacity:0,
    delay:1.6,
    y:-50
})
TweenMax.from('.hero img',{
    opacity:0,
    delay:2,
    y:-50
})

// cursor
const cursor=document.querySelector('.cursor')
const body=document.querySelectorAll('body')
var MouseX=0
var MouseY=0

gsap.to({},.004,{
    repeat:-1,
    onRepeat:()=>{
        gsap.set(cursor,{
            css:{
                left:MouseX,
                top:MouseY
            }
        })
    }
})

window.addEventListener('mousemove',(e)=>{
    MouseX=e.clientX
    MouseY=e.clientY
})
body.forEach(all=>{
    all.addEventListener('mouseenter',()=>{
        cursor.classList.add('grow')
    })
})