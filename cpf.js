// VALIDAÇÃO DE CPF

// adiciona escutador á página
document.getElementById('CPFform').addEventListener('submit', function (event) {
    event.preventDefault();

    const CPF = document.getElementById('CPF').value; 
    const msg = document.getElementById('message');

    if (validarCPF(CPF)) {
        msg.textContent = "O CPF é válido!";
        msg.style.color = 'green';

    } else {
        msg.textContent = "O CPF é inválido!";
        msg.style.color = 'red';
    }
}
);

// FUNÇÃO DE CÁCULO DE VALIDAÇÃO DE CPF
function validarCPF(CPF) {
    CPF = CPF.replace(/[^\d]+/g, ''); // Remove caracteres não numéricos

    // Verificar se o valor informado contem 11 dígitos e se todos os dígitos são iguais
    if (CPF.length !== 11 || /^(\d)\1{10}$/.test(CPF)) {
        return false;
    }

    let soma = 0;
    let resto;

    //Validação do primeiro dígito verificador 
    for (let i = 1; i <= 9; i++) {
        soma += parseInt(CPF.substring(i - 1, i)) * (11 - i);
    }

    resto = (soma * 10) % 11;
    if ((resto === 10) || (resto === 11)) {
        resto = 0;
    }
    if (resto !== parseInt(CPF.substring(9, 10))) {
        return false
    }
    soma = 0;

    //Validar 11 digito do CPF - 2º digito verificador
    for (let i = 1; i <= 10; i++) {
        soma += parseInt(CPF.substring(i - 1, i)) * (12 - i);
    }

    resto = (soma * 10) % 11;
    if ((resto === 10) || (resto === 11)) {
        resto = 0;
    }
    if (resto !== parseInt(CPF.substring(10, 11))) {
        return false;
    }
    return true;
}

