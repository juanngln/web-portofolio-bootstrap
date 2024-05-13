// navbar scroll ke section
document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
});

// mengatur umur di section about me
function updateUmur() {
    var ulangTahun = new Date("2005-05-05");
    var hariIni = new Date();
    var selisihTahun = hariIni.getFullYear() - ulangTahun.getFullYear();
    if (hariIni.getMonth() < ulangTahun.getMonth() || (hariIni.getMonth() == ulangTahun.getMonth() && hariIni.getDate() < ulangTahun.getDate())) {
        selisihTahun--;
    }
    document.getElementById("umur").innerHTML = selisihTahun;
}

updateUmur();

// mengatur tahun dalam footer
document.addEventListener("DOMContentLoaded", function() {
    var currentYear = new Date().getFullYear();
    var element = document.getElementById("currentYear");
    element.innerText = currentYear;
});