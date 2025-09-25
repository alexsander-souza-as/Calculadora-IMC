function calcularIMC() {
  const peso = parseFloat(document.getElementById("peso").value);
  const altura = parseFloat(document.getElementById("altura").value);

  if (!peso || !altura || altura <= 0) {
    alert("Por favor, insira valores válidos.");
    return;
  }

  const imc = peso / (altura * altura);
  const resultado = document.getElementById("resultadoIMC");
  const classificacao = document.getElementById("classificacaoIMC");

  resultado.textContent = `Seu IMC é: ${imc.toFixed(2)}`;

  if (imc < 18.5) {
    classificacao.textContent = "Classificação: Abaixo do peso";
  } else if (imc < 24.9) {
    classificacao.textContent = "Classificação: Peso normal";
  } else if (imc < 29.9) {
    classificacao.textContent = "Classificação: Sobrepeso";
  } else if (imc < 34.9) {
    classificacao.textContent = "Classificação: Obesidade grau I";
  } else if (imc < 39.9) {
    classificacao.textContent = "Classificação: Obesidade grau II";
  } else {
    classificacao.textContent = "Classificação: Obesidade grau III";
  }
}
