document.getElementById("conteiner").addEventListener("input", update)

function update() {
    console.log(
        {
            conta: document.getElementById("suaConta").value,
            gorjeta: document.getElementById("porcentagemGorjeta").value,
            qtdPessoas: document.getElementById("qtdPessoas").value
        }
    )
}