let input = document.getElementById("input")
let imageurl = document.getElementById("imageurl")
let btn = document.getElementById("btn")
let link = document.getElementById("link")

function display(type) {
    let http = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${type}`
    imageurl.src = http

    link.innerHTML = `<a target="_blank" href="${input.value}">show url</a>`
}
btn.addEventListener("click", function () {
    if (input.value == "") {
        document.getElementById("alert").style.display = "block"

    } else {
        document.getElementById("alert").style.display = "none"
        display(input.value)
    }

})


