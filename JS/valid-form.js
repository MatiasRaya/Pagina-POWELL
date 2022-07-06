const formulario = document.getElementById('form');
const inputs = document.querySelectorAll('#form input');
const textarea = document.querySelectorAll('#form textarea');

const expresiones = {
    name: /^[a-zA-ZÀ-ÿ0-9\s]{3,40}$/,
    email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    consultation: /^[a-zA-ZÀ-ÿ\s]{5,40}$/
}

const target = {
    name: false,
    email: false,
    consultation: false,
    verification: false
}

const validat = {
    val1: false,
    val2: false,
    val3: false,
    val4: false
}

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "name":
            if(expresiones.name.test(e.target.value)) {
                document.getElementById("name").classList.add('border-correct');
                document.getElementById("name-correction").classList.remove('text-error');
                validat['val1'] = true;
            }
            else {
                document.getElementById("name").classList.remove('border-correct');
                document.getElementById("name").classList.add('border-error');
                document.getElementById("name-correction").classList.add('text-error');
            }
            break;
        case "email":
            if(expresiones.email.test(e.target.value)) {
                document.getElementById("email").classList.add('border-correct');
                document.getElementById("email-correction").classList.remove('text-error');
                validat["val2"] = true;
            }
            else {
                document.getElementById("email").classList.remove('border-correct');
                document.getElementById("email").classList.add('border-error');
                document.getElementById("email-correction").classList.add('text-error');
            }
            break;
        case "consultation":
            if(expresiones.consultation.test(e.target.value)) {
                document.getElementById("consultation").classList.add('border-correct');
                document.getElementById("consultation-correction").classList.remove('text-error');
                validat["val3"] = true;
            }
            else {
                document.getElementById("consultation").classList.remove('border-correct');
                document.getElementById("consultation").classList.add('border-error');
                document.getElementById("consultation-correction").classList.add('text-error');
            }
            break;
        case "verification":
            if(document.getElementById("verification").checked){
                document.getElementById("verification-correction").classList.remove('text-error');
                validat["val4"] = true;
            }
            else {
                document.getElementById("verification-correction").classList.add('text-error');
            }
            break;
    }
}

function validar() {
    var nombre, correo, consulta;
    nombre = document.getElementById("name").value;
    correo = document.getElementById("email").value;
    consulta = document.getElementById("consultation").value;
    
    inputs.forEach((input) => {
        input.addEventListener('keyup', validarFormulario)
        input.addEventListener('blur', validarFormulario)
    })
    
    textarea.forEach((textarea) => {
        textarea.addEventListener('keyup', validarFormulario);
        textarea.addEventListener('blur', validarFormulario);
    })   

    if(expresiones.name.test(nombre)) {
        document.getElementById("name").classList.add('border-correct');
        document.getElementById("name-correction").classList.remove('text-error');
        target['name'] = true;
    }
    else {
        document.getElementById("name").classList.remove('border-correct');
        document.getElementById("name").classList.add('border-error');
        document.getElementById("name-correction").classList.add('text-error');
        target['name'] = false;
        if (!validat.val1) {
            document.getElementById("name").focus();
        }
    }

    if(expresiones.email.test(correo)) {
        document.getElementById("email").classList.add('border-correct');
        document.getElementById("email-correction").classList.remove('text-error');
        target['email'] = true;
    }
    else {
        document.getElementById("email").classList.remove('border-correct');
        document.getElementById("email").classList.add('border-error');
        document.getElementById("email-correction").classList.add('text-error');
        target['email'] = false;
        if (!validat.val2 && validat.val1) {
            document.getElementById("email").focus();
        }
    }

    if(expresiones.consultation.test(consulta)) {
        document.getElementById("consultation").classList.add('border-correct');
        document.getElementById("consultation-correction").classList.remove('text-error');
        target['consultation'] = true;
    }
    else {
        document.getElementById("consultation").classList.remove('border-correct');
        document.getElementById("consultation").classList.add('border-error');
        document.getElementById("consultation-correction").classList.add('text-error');
        target['consultation'] = false;
        if (!validat.val3 && validat.val2 && validat.val1) {
            document.getElementById("consultation").focus();
        }
    }

    if(document.getElementById("verification").checked == true) {
        document.getElementById("verification-correction").classList.remove('text-error');
        target['verification'] = true;
    }
    else {
        document.getElementById("verification-correction").classList.add('text-error');
        target['verification'] = false;
        if (!validat.val4 && validat.val3 && validat.val2 && validat.val1) {
            document.getElementById("verification").focus();
        }

    }
}

function enviar(){
    
    if(target.name && target.email && target.consultation && target.verification){
        return true;
    }
    else{
        return false;
    }
}

function restrictAlphabets(e){
    var x = e.which || e.keycode;
    if((x >= 48 && x <= 57 || x === 43))
        return true;
    else
        return false;
}