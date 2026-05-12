// soma de confirmação
let soma = 0;
let continuar;
let numero;
do {
    numero = parseInt(
        prompt("Digite um número inteiro:")
    );
    soma += numero;
    continuar = prompt(
        "Deseja inserir outro número?\n(s = sim / n = não)"
        // aqui o sistema pergunta se o usuário quer continuar e o mesmo deve decidir em s= sim e n=não
        // OBS: o \n serve para pular um linha
    ).toLowerCase();
} while (continuar === "s");
alert(`A soma total é: ${soma}`);