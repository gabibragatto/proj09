// Validação de senha
let senhacerta = "1234"
// 1234 é a senha certa;
let senha = prompt("Digite sua senha: ");

do {
    if (senha!== senhacerta){
        alert ("Senha incorreta. Tente novamente!");
        // se a senha estiver diferente da senha certa (1234), 
        // exibirá um alerta indicando que a senha está errada e que é para o usuário tente novamente
    }
} while (senha !== senhacerta);
alert("Acesso permitido!");
// se a senha estiver certa o acesso será permitido