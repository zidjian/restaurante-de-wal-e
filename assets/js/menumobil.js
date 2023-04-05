(() => {
    const icono_menu = document.querySelector('.icono_menu');
    const mennu_mobil = document.querySelector('.navegacionmobil');
    const icono_cerrar = document.querySelector('.icono_cerrar');
    const mobil_link = document.querySelectorAll('.navegacionmobil-link');

    const toggleMenu = () => {
        mennu_mobil.classList.toggle('activo');
    };

    icono_menu.addEventListener('click', toggleMenu);
    icono_cerrar.addEventListener('click', toggleMenu);
    mobil_link.forEach((link) => {
        link.addEventListener('click', toggleMenu);
    });
})();