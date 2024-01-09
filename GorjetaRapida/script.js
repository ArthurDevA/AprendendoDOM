document.getElementById("conteiner").addEventListener("input", update)

function formatarDinheiro(value) {
    value = (Math.ceil(value * 100) / 100).toFixed(2)
    return "$ " + value
}

function update() {
    let conta = Number(document.getElementById("suaConta").value)
    let porcentagemGorjeta = document.getElementById("porcentagemGorjeta").value
    let qtdPessoas = document.getElementById("qtdPessoas").value

    let gorjeta = conta * porcentagemGorjeta/100

    document.getElementById("gorjetaPorcento").innerHTML = porcentagemGorjeta + "%"
    document.getElementById("valorGorjeta").innerHTML = formatarDinheiro(gorjeta)
    document.getElementById("valorTotal").innerHTML = formatarDinheiro(conta + gorjeta)

    document.getElementById("valorQtdPessoas").innerHTML = qtdPessoas + ((qtdPessoas==1)?" pessoa":" pessoas")
    document.getElementById("valorDivisaoConta").innerHTML = formatarDinheiro(conta / qtdPessoas)
    document.getElementById("valorDivisaoGorjeta").innerHTML = formatarDinheiro(gorjeta / qtdPessoas)

}