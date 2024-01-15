function logValidation(values) {
    let error = {};

    const email_patterr = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const password_patterr = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;


    if(values.email === "") {
        error.email = "Ingresa tu direccion de correo"
    }
    else if(!email_patterr.test(values.email)) {
        error.email = "Direccion de correo invalida"
    }
    else {
        error.email = ""
    }

    if(values.password === "") {
        error.password = "Ingresa tu contrasena"
    }
    else if(!password_patterr.test(values.password)) {
        error.password = "Contrasena de invalida"
    }
    else {
        error.password = ""
    }

    return error;
}

export default logValidation