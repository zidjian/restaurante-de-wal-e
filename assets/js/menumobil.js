(() => {
    const icono_menu = document.querySelector('.icono_menu');
    const mennu_mobil = document.querySelector('.navegacionmobil');
    const icono_cerrar = document.querySelector('.icono_cerrar');

    const toggleMenu = () => {
        mennu_mobil.classList.toggle('activo');
    };

    icono_menu.addEventListener('click', toggleMenu);
    icono_cerrar.addEventListener('click', toggleMenu);
})();