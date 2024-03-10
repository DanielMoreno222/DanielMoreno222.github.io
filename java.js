document.getElementById("reportForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var titulo = document.getElementById("titulo").value;
    var descripcion = document.getElementById("descripcion").value;
    var ubicacion = document.getElementById("ubicacion").value;
    var correo = document.getElementById("correo").value;

    // Aquí podrías enviar los datos a un servidor para procesarlos, por ejemplo, mediante AJAX
    // En este ejemplo, solo mostraremos un mensaje de éxito
    var statusElement = document.getElementById("status");
    statusElement.textContent = "Reporte enviado: Título: " + titulo + ", Descripción:  " + descripcion + 
    ", Ubicación: " + ubicacion + ", correo: " + correo;
    statusElement.style.color = "green";
});
