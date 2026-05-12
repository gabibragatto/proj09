// validacao de cadastro
let nomeProduto;
do {
    nomeProduto = prompt("CADASTRO DE PRODUTO \n" +"Digite o nome do produto:");
    if (nomeProduto.length < 3) {
        alert("Nome inválido.\n\n" +"O produto deve ter no mínimo 3 caracteres.");
    }
} while (nomeProduto.length < 3);
alert(
    `Produto "${nomeProduto}" cadastrado com sucesso!`
);