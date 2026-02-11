// Manejo del botón para volver arriba
const scrollBtn = document.getElementById("scrollTop");

window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
};

scrollBtn.onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Resaltar sección activa en el menú (opcional)
document.querySelectorAll('.main-nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        document.querySelector('.active').classList.remove('active');
        this.classList.add('active');
    });
});