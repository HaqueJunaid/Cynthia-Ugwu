function loco() {
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });
}
loco()

let cursr = document.querySelector("#cursor")

window.document.addEventListener("mousemove", function (dets) {
    gsap.to(cursr, {
        top: dets.y,
        left: dets.x
    })
})