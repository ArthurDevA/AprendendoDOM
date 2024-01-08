document.getElementById("conteiner").addEventListener("input", update)

function update() {
    let conta = Number(document.getElementById("suaConta").value)
    let porcentagemGorjeta = document.getElementById("porcentagemGorjeta").value
    let qtdPessoas = document.getElementById("qtdPessoas").value

    let gorjeta = conta * porcentagemGorjeta/100

    document.getElementById("gorjetaPorcento").innerHTML = porcentagemGorjeta + "%"
    document.getElementById("valorGorjeta").innerHTML = gorjeta
    document.getElementById("valorTotal").innerHTML = conta + gorjeta

    document.getElementById("valorQtdPessoas").innerHTML = qtdPessoas + ((qtdPessoas==1)?" pessoa":" pessoas")
    document.getElementById("valorDivisaoConta").innerHTML = conta / qtdPessoas
    document.getElementById("valorDivisaoGorjeta").innerHTML = gorjeta / qtdPessoas

}