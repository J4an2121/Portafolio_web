document.getElementById("downloadCV").addEventListener("click", function(event) {
    event.preventDefault(); // Evitar que el enlace haga lo que normalmente haría (navegar a una página)

    // Crear un archivo Blob con los datos del CV (si lo tienes en un array o base64)
    const cvData = "file:///C:/Users/juan.esteban.david/Desktop/CV%20Juan%20Esteban%20David%20Cano.pdf"; // Aquí puedes poner el base64 del CV
    
    const link = document.createElement("a");
    link.href = cvData; // Establece la URL del archivo (en este caso un archivo codificado en base64)
    link.download = "CV.pdf"; // Define el nombre del archivo descargado
    link.click(); // Simula un clic en el enlace para iniciar la descarga
});
