import gsap from 'gsap'
import './index.css'


// gsap.to('.box',{
//     delay:1,
//     y:500,
//     duration:5,
//     rotate:360
// })
// })
gsap.fromTo('.box',{
    delay:1,
    y:400,
    duration:5,
    rotate:360

},{
x:500,
duration:4,
rotate:25,
})
