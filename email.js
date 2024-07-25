// BLOCO PARA VALIDAÇÃO DE EMAIL
//--------------------------------------------------
function checarEmail() {
    if (document.forms[0].email.value == "" || document.forms[0].email.value.indexOf('@') == -1 ||
        document.forms[0].email.value.indexOf('.') == -1) {
        alert("Por favor, informe um email válido."); return false;

    } else {
        alert("Email informado com sucesso!");
        document.getElementById('email').innerHTML = document.forms[0].email.value;
    }
}



//--------------------------------------------------



// CÓDIGO DE  VERIFICAÇÃO DE EMAIL DIGITADO
// -------------------------------------------------
function verifica() {
    if (document.forms[0].email.value == 0) {
        alert("Por favor, informe um email.");
        document.frmEnvia.email.focos();
        return false;

    }
    return true;
}



// --------------------------------------------------

