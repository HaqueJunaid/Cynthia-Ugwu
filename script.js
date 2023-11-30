function cursor() {
    let crsr = document.querySelector("#cursor")

    document.addEventListener("mousemove", function (dets) {
        gsap.to(crsr, {
            left: dets.x,
            top: dets.y
        })
    })
}
cursor()

function loco() {
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });
}
loco()

let main = document.querySelector("#main")
main.style.display = 'none'

function page1Animation() {
    let tl = gsap.timeline()

    

    var num = document.querySelector("#percentage");
    var progress = document.querySelector("#load");
    var count = 0;
    var per = 0;
    setInterval(function () {
        if (count == 100 || per == 100) {
            clearInterval(loading);
        } else {
            per = per + 1;
            count = count + 1;
            progress.style.width = per + '%';
            num.textContent = count + '%'
            if (count == 100) {
                main.style.display = 'block'
                exit();
            }
        }
    }, 12);

        tl.to("#loader", {
            top: "-100vh",
            duration: 0.8,
            delay: 1.5,
        })

        tl.to("nav .takeup", {
            top: 0,
            stagger: 0.1
        })

        tl.to(".binding h1", {
            top: 0,
            dration: 0.5,
            stagger: 0.2,
            ease: Power1
        })

        tl.to(".binding .pbinding p", {
            top: 0,
            dration: 0.5,
            stagger: 0.5,
            ease: Power1
        })

        tl.to("#other .binding h6", {
            top: 0,
            stagger: 0.2,
            ease: Power1,
            delay: -0.5
        })

        tl.from("#page1-footer", {
            opacity: 0,
            delay: -0.3,
            duration: 0.5
        })
    }

page1Animation()

function bigCursor() {
    document.querySelectorAll(".element").forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {
            let crsr = document.querySelector("#cursor");

            gsap.to(crsr, {
                width: "4vw",
                height: "4vw",
                backgroundColor: "#ffffff9c"
            })

            gsap.to("#cursor h1", {
                display: "block"
            })
        })
    })

    document.querySelectorAll(".element").forEach(function (elem) {
        elem.addEventListener("mouseleave", function () {
            let crsr = document.querySelector("#cursor");

            gsap.to(crsr, {
                width: "0.8vw",
                height: "0.8vw",
                backgroundColor: "#fff"
            })

            gsap.to("#cursor h1", {
                display: "none"
            })
        })
    })
}
bigCursor()

function imageAnimation() {
    document.querySelectorAll(".element").forEach(function (elem) {
        var rotate = 0
        var diffrot = 0

        elem.addEventListener("mousemove", function (dets) {

            var diff = dets.clientY - elem.getBoundingClientRect().top;
            diffrot = dets.x - rotate;
            rotate = dets.x

            gsap.to(elem.querySelector("img"), {
                opacity: 1,
                ease: Expo,
                top: diff,
                left: dets.x,
                rotate: gsap.utils.clamp(-20, 20, diffrot),
                display: "block"
            })
        })
    })
    document.querySelectorAll(".element").forEach(function (elem) {
        var rotate = 0
        var diffrot = 0

        elem.addEventListener("mouseleave", function (dets) {

            gsap.to(elem.querySelector("img"), {
                opacity: 0,
                ease: Power1,
                display: "none"
            })
        })
    })
}
imageAnimation()

function linkMouseEffect() {
    document.querySelector("#page3 #textbox a").addEventListener("mouseenter", function () {
        let crsr = document.querySelector("#cursor");
        gsap.to(crsr, {
            backgroundColor: "#000"
        })
    })
    document.querySelector("#page3 #textbox a").addEventListener("mouseleave", function () {
        let crsr = document.querySelector("#cursor");
        gsap.to(crsr, {
            backgroundColor: "#fff"
        })
    })
}
linkMouseEffect()