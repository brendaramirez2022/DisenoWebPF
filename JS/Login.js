//Prueba para ver si lee datos
console.log("ak");
let nombreCompleto = document.getElementById('name').value;
console.log(nombreCompleto);

function getData(){
    console.log("si entra");
    nombreCompleto = document.getElementById("name").value;
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;
    console.log(nombreCompleto);
    validar(nombreCompleto, email, password);
}

function validar(nombreCompleto, email, password){
    correcto1 = 0;

    if(nombreCompleto.length >= 6){
        correcto1+= 1;		
    }else{ 
        swal({
            title: "¡Error!",
            text: "¡Nombre demasiado corto!",
            icon: "error",
        });
        correcto1-= 1;
    }

    if(email.length >= 4){
        correcto1+= 1;
    }else{
        swal({
            title: "¡Error!",
            text: "¡Usuario demasiado corto!",
            icon: "error",
        });
        correcto1-= 1;
    }		
    if(password.length == 0){
        swal({
            title: "¡Error!",
            text: "¡Olvidaste insertar la contraseña!",
            icon: "error",
        });
        correcto1-= 1;		
    }else if(password.length <=4){
        swal({
            title: "¡Error!",
            text: "¡La contraseña es demasiado corta!",
            icon: "error",
        });
        correcto1-= 1;		
    }else{
        correcto1+= 1;
    }

    if(correcto1 == 3){
        swal({
            title: "¡Registrado!",
            text: "¡Bienvenido a Librerías Gonvill!",
            icon: "success",
        });
    }
}