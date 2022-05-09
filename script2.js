var btn = document.querySelector('.voltarTopo')
btn.addEventListener('click', function() {
    window.scrollTo(0, 0)
})

var btn = $('.voltarTopo')
btn.click(function() {
    $('html, body').animate({ scrollTop: 0 }, 'slow')
})

function voltarAoTopo() {
    if (window.scrollY >= 560) {
        voltarTopo.classList.add('show')
    } else {
        voltarTopo.classList.remove('show')
    }
}

window.addEventListener('scroll', function() {
    voltarAoTopo()
})