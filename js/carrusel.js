$(document).ready(function ()
    {
        var $carrusel = $('#carrusel');
        var $imagenes = $carrusel.find('video');
        var indiceImagenActual = 0;
        var duracionTransicion = 5000; // Duración de la transición en milisegundos
        var intervalo;

    // Función para mostrar el siguiente video
    function mostrarSiguienteImagen()
    {
        $imagenes.eq(indiceImagenActual).fadeOut(duracionTransicion); // Oculta el video actual
        indiceImagenActual = (indiceImagenActual + 1) % $imagenes.length; // Avanza al siguiente video
        $imagenes.eq(indiceImagenActual).fadeIn(duracionTransicion); // Muestra el siguiente video
    }
    /*
    .eq() se utiliza para seleccionar un elemento específico de un conjunto de elementos, basado en su índice.

    */

    // Iniciar el carrusel automáticamente
    function iniciarCarrusel()
    {
        intervalo = setInterval(mostrarSiguienteImagen, duracionTransicion);
    }

    // Iniciar el carrusel automáticamente al cargar la página
    iniciarCarrusel();
});

