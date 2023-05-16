gsap.from("#nav",{
    y:-100,
    duration:1,
    delay:0.5,
    opacity:0,
})
gsap.from("#ball",{
    y:-1000,
    duration:1,
    delay:0.5,
})
gsap.from("#podium",{
    y:100,
    duration:1,
    delay:0.5,
})
gsap.from("#page1>h1",{
    y:100,
    duration:1,
    stagger:0.2,
    delay:1.2,
    opacity:0,
    onStart:function(){
        $('#page1>h1').textillate({ in: { effect: 'fadeInUp' } });
    }
})



var tl = gsap.timeline({
    scrollTrigger:{
        trigger:"#page1",
        scroller:"body",
        markers:true,
        start:"top -5%",
        scrub:2
    }
})
tl.to("#ball",{
    left:"79%",
    top:"37vh",
    rotate:270,
    duration:2
},"anim1")
tl.to("#podium",{
    rotate:16,
    duration:0.2,
},"anim1")


var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:"#page1",
        scroller:"body",
        // markers:true,
        start:"top -35%",
        scrub:2
    }
})
tl2.to("#podium",{
        rotate:0,
        duration:2,
        delay:0.5,
        ease:"power3.out",
    },"anim1")
tl2.to("#podium",{
    rotate:-15,
    duration:2,
    delay:0.5,
    ease:"power3.out",
    },"anim1")
tl2.to("#podium",{
        rotate:0,
        duration:2,
        delay:0.5,
        ease:"power3.out",
    },"anim1")
tl2.from("#base>h1",{
    y:0,
    duration:0.5,
    // opacity:0,
    delay:0.5,
    onStart:function(){
        $('#base>h1').textillate({ in: {effect: 'fadeInUp' } });
    }
},"anim1")
tl2.from("#base-in",{
    y:"50%",
    duration:0.5,
    opacity:0,
    delay:0.5,
    stagger:0.2,
})
tl2.from("#gol",{
    y:-100,
    duration:1,
    delay:1,
    scrollTrigger:{
                trigger:"#gol",
                scroller:"body",
                scrub:2
            }
},"anim1")
tl2.to("#gol video",{
    y:-350,
    yoyo:true,
    scrollTrigger:{
        trigger:"#gol video",
        scroller:"body",
        scrub:3
    }
})
tl2.to("#gol img",{
    y:-250,
    rotate:20,
    yoyo:true,
    scrollTrigger:{
        trigger:"#gol video",
        scroller:"body",
        scrub:2
    }
})
tl2.to("#gol svg .snake__text-path",{
    opacity:1,
    onStart: function snake(){
    var a = document.querySelector("#gol svg .snake__text-path")
    var b = 100
    if(b>0){
        setInterval(()=> {
            a.setAttribute ("startOffset", `${b--}%`)
        },50);
    }
    }
},"anim1")


var tl3 = gsap.timeline({
    scrollTrigger:{
        trigger:"#page4",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        scrub:1
    }
})
tl3.from("#page4base>h1",{
    y:0,
    duration:0.2,
    // opacity:0,
    onStart:function(){
        $('#page4base>h1').textillate({ in: {effect: 'fadeInUp' } });
    }
},"anim1")
tl3.from("#page4base-in",{
    y:"50%",
    duration:0.1,
    opacity:0,
},"anim1")

tl3.from("#four",{
    y:"50%",
    duration:0.1,
    scale:0,
},"anim1")




var tl4 = gsap.timeline({
    scrollTrigger:{
        trigger:"#page4",
        scroller:"body",
        // markers:true,
        start:"top -40%",
    }
},"anim1")
tl4.from("#ball2",{
    top:"-100%",
    left:"80%",
    rotate:270,
    duration:1.5,
    delay:0.3,
    opacity:0
},"anim1")
tl4.from("#div>h1",{
    y:0,
    delay:0.9,
    duration:1,
    onStart:function(){
        $('#div>h1').textillate({ in: {effect: 'fadeInUp' } });
    }
},"anim1")
tl4.from("#para",{
    y:"80%",
    delay:1.5,
    duration:1,
    opacity:0,
},"anim1")
tl4.to(".page5elem",{
    y:-400,
    yoyo:true,
    scrollTrigger:{
        trigger:".page5elem",
        scroller:"body",
        scrub:3
    }
},"anime1")
// tl4.to("#page5elem4,#page5elem5",{
//     y:-400,
//     yoyo:true,
//     pin:2,
//     scrollTrigger:{
//         trigger:"#page5elem4,#page5elem5",
//         scroller:"body",
//         scrub:3
//     }
// },"anime1")
// tl4.to("#page5elem6",{
//     y:-400,
//     yoyo:true,
//     pin:2,
//     scrollTrigger:{
//         trigger:"#page5elem6",
//         scroller:"body",
//         scrub:3
//     }
// },"anime1")
// tl4.to("#page5elem7,#page5elem8",{
//     y:-400,
//     yoyo:true,
//     pin:2,
//     scrollTrigger:{
//         trigger:"#page5elem7,#page5elem8",
//         scroller:"body",
//         scrub:3
//     }
// },"anime1")
tl4.to("#page6>h1",{
    y:-10,
    yoyo:true,
    scrollTrigger:{
        trigger:"#page6>h1",
        scroller:"body",
        scrub:3
    }
},"anime1")
var tl5= gsap.timeline({
    scrollTrigger:{
        trigger:"#page5",
        scroller:"body",
        markers:true,
        start:"top -40%",
        scrub:3
    }
},"anim1")
tl5.to("#page5ball",{
    scale:14,
},"anim1")

tl5.from("#page8>h1",{
    y:0,
    duration:0.2,
    // opacity:0,
    onUpdate:function(){
        $('#page8>h1').textillate({ in: {effect: 'fadeInUp' } });
    }
},"anim1")





var aaa = document.querySelectorAll(".member")  

  aaa.forEach(function (elem) {
    elem.addEventListener("mouseenter", function() {
        elem.childNodes[1].style.opacity = 1
        elem.childNodes[1].style.scale = 1
    })
    elem.addEventListener("mouseleave", function() {
        elem.childNodes[1].style.opacity = 0
        elem.childNodes[1].style.scale = 0
    })
    elem.addEventListener("mousemove",function(dets){
        elem.childNodes[1].style.right = `${dets.x/5}px`
        elem.childNodes[1].style.left = `${dets.x/5}px`
        elem.childNodes[1].style.up = `${dets.x/5}px`
        elem.childNodes[1].style.down = `${dets.x/5}px`

    })
})






var a = -200
setInterval(function(){
    if(a>=-1200){
        gsap.to("#changing h2",{
            opacity:1,
        })
        gsap.to("#changing h2",{
            delay:1,
            y:a+"%",
            opacity:1,
        })
        console.log(a)
    }else{
        a=0
        gsap.to("#changing h2",{
            y:"0%",
            opacity:0,
            duration:0
        })
    }
    a -= 200
},2000)









// var member1 = document.querySelector("#member1")  
//    member1.addEventListener("mouseenter", function(){
//     document.querySelector("#member1>img").style.opacity = 1 
//    })
//    member1.addEventListener("mouseleave",function(){
//     document.querySelector("#member1>img").style.opacity = 0
//    })
// //    member1.addEventListener("mousemove",function(dets){
// //     document.querySelector("#member1 img").style.left = `${dets.x}px`
// //    })
// member2.addEventListener("mouseenter", function(){
//     document.querySelector("#member2>img").style.opacity = 1 
//    })
//    member2.addEventListener("mouseleave",function(){
//     document.querySelector("#member2>img").style.opacity = 0
//    })
//    member3.addEventListener("mouseenter", function(){
//     document.querySelector("#member3>img").style.opacity = 1 
//    })
//    member3.addEventListener("mouseleave",function(){
//     document.querySelector("#member3>img").style.opacity = 0
//    })