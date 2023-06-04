// VERIFICACIÓN

function verificarRespuesta() {
    var respuesta = document.getElementById("respuesta").value;

    if (respuesta.toLowerCase() === "azul") { // La respuesta en minúscula
        // Redirigir al usuario a la siguiente sección
        window.location.href = "pages/home.html";
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Pista',
            text: 'Daa esta la sabes',
        });
    }
}

// NAVEGACIÓN

function navigateToPage(pageName) {
    window.location.href = pageName + '.html';
}

// CONTENIDO

function mostrarContenido(id) {
    // Ocultar todos los contenidos
    let contenidos = document.getElementsByClassName('contenido');
    for (let i = 0; i < contenidos.length; i++) {
        contenidos[i].style.display = 'none';
    }

    // Mostrar el contenido seleccionado
    let contenido = document.getElementById(id);
    contenido.style.display = 'block';
}