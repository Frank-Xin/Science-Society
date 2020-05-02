import jump from './jump.js'
const button = document.querySelector(".btn-cta")
button.addEventListener("click", (e) => {
    e.preventDefault()
    const node = document.querySelector('#articles')
    jump(node, {
        duration: 800,
    })

})
const anchors = document.querySelectorAll(".smooth-anchor")
anchors.forEach(element => element.addEventListener("click", (e) => {
    e.preventDefault()
    const node = document.querySelector('#articles')
    jump(node, {
        duration: 800,
    })
}))