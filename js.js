
var main = document.querySelector("#main")
var cursor = document.querySelector(".cursor")

 
main.addEventListener('mousemove', function(dets){
       cursor.style.left = dets.x + 'px'
       cursor.style.top = dets.y + 'px'
})






var tl = gsap.timeline()

tl.from("#nav img, #nav h3, #nav button", {
       y: -100,
       duratin: 2,
       opacity: 0,
       stagger: 0.2,
})
tl.from('#main h1', {
       y: 100,
       duratin: 1,
       opacity: 0,
       stagger: 0.2
})
tl.from('#left-img', {
       x: -50,
       duratin: 1,
       opacity: 0
})
tl.from('#right-img', {
       x: 50,
       duratin: 1,
       opacity: 0
})
gsap.from('#top-img', {
       duratin: 1,
       delay: 1,
       opacity: 0,
       scale: 0
})
gsap.from('#bottom-img', {
       duratin: 1,
       delay: 1,
       opacity: 0,
       scale: 0
})

tl.from(".scrol-down",{
       y: -20,
       opacity: 0,
       duration: 1,
       repeat: 2,
        
})

 








