
window.addEventListener("load", function () {

    var val = 0;
    document.querySelector(".button_toggle").addEventListener("click", function (e) {
        if (val == 0) {
            document.querySelector(".menu").style.top = "40%";
            val = 1;
        }
        else {
            document.querySelector(".menu").style.top = "-235%";
            val = 0;

        }
    })
})

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});