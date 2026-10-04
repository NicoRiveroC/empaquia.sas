document
            .getElementById("formComentario")
            .addEventListener("submit", function(event) {

                event.preventDefault();

                const nombre =
                    document.getElementById("nombre").value;

                document.getElementById("mensaje").innerHTML =
                    "¡Gracias, " + nombre +
                    "! Tu comentario fue recibido correctamente.";

                document
                    .getElementById("formComentario")
                    .reset();

            });
