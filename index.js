// Menu hamburguesa
const hamburguesa = document.querySelector('#menu__hamburguesa');
const menuLinks = document.querySelector('.menu__links');

hamburguesa.onclick = function() {
    this.classList.toggle('trans');
    menuLinks.classList.toggle('mostrar');
};


// ocultar el menu en el movil al hacer click en un link
const menu_links = document.getElementsByClassName('menu__link');


for (let i = 0; i < menu_links.length; i++) {
    menu_links[i].addEventListener('click', function() {
        hamburguesa.classList.remove('trans');
        menuLinks.classList.remove('mostrar');
    }); 
}


// Final menu hamburguesa

function draw(ring, text) {
    var i = 0;
    var porcentaje = text.textContent;
    var toRadians = Math.PI / 180;
    var r = 100;

    var interval = setInterval(function() {
        if (i >= porcentaje) {
            clearInterval(interval);
        }

        // Update the wheel giving to it a value in degrees,
        // getted from the percentage of the input value
        // a.k.a. (value * 360) / 100
        var degrees = i * 3.5999;
        // Convert the degrees value to radians
        var rad = degrees * toRadians;
        // Determine X and cut to 2 decimals
        var x = (Math.sin(rad) * r).toFixed(2);
        // Determine Y and cut to 2 decimals
        var y = -(Math.cos(rad) * r).toFixed(2);
        // The another half ring. Same as (deg > 180) ? 1 : 0
        var lenghty = Number(degrees > 180);
        // Moveto + Arcto
        var descriptions = ['M', 0, 0, 'v', -r, 'A', r, r, 1, lenghty, 1, x, y, 'z'];
        // Apply changes to the path
        ring.setAttribute('d', descriptions.join(' '));
        // Update the numeric display
        text.textContent = i;

        i++;
    }, 15);

    // Translate the center axis to a half of total size
    ring.setAttribute('transform', 'translate(' + r + ', ' + r + ')');
}

contadorAnimacion = 0;
window.addEventListener('scroll', animateSkills);
function animateSkills() {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    if (clientHeight + scrollTop >= scrollHeight - 400 && contadorAnimacion == 0) {
        var skills = document.getElementsByClassName('skill');
        for (var i = 0; i < skills.length; i++) {
            var skill = skills[i];
            var ring = skill.getElementsByClassName('ring')[0];
            var text = skill.getElementsByTagName('text')[0];
            draw(ring, text);
        }
        contadorAnimacion++;
    }
}
