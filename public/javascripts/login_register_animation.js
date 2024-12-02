document.getElementById('btnNuevaCuenta').addEventListener('click', function () {
    console.log("hola");
    const btnNuevaCuenta = document.getElementById("btnNuevaCuenta");
    const imageContainer = document.getElementById("image-container");
    const formRegisterContainer = document.getElementById("form-register-container");

    btnNuevaCuenta.addEventListener("click", () => {
        // Desplazar la imagen hacia la izquierda
        imageContainer.classList.add("move-left");

        // Mostrar el formulario de registro
        formRegisterContainer.classList.remove("d-none");
    });

});
