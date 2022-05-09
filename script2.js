var btn = document.querySelector('.voltarTopo')
btn.addEventListener('click', function() {
    window.scrollTo(0, 0)
})

function voltarAoTopo(el) {
    var display = document.getElementById(el).style.display
    if (window.scrollY > 460) {
        document.getElementById(el).style.display = 'block'
    } else {
        document.getElementById(el).style.display = 'none'
    }
}

window.addEventListener('scroll', function() {
    voltarAoTopo('topo')
})