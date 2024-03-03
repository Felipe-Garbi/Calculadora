function calcularValores() {
    // Obter os valores digitados pelo usuário
    var valor1 = parseFloat(document.getElementById("txtValor1").value);
    var valor2 = parseFloat(document.getElementById("txtValor2").value);

    // Obter a operação selecionada
    var operacao = document.getElementById("cbxOperacao").value;

    // Verifica a operação selecionada e executa o calculo.
    var resultado;
    switch (operacao) {
        case "+":
            resultado = valor1 + valor2;
            break;
        case "-":
            resultado = valor1 - valor2;
            break;
        case "/":
            resultado = valor1 / valor2;
            break;
        case "*":
            resultado = valor1 * valor2;
            break;
        default:
            resultado = "Operação inválida";
            break;
    }

    // Exibir o resultado
    document.getElementById("txtResultado").textContent = resultado;
}