function CalculoMedia() {
	var elementoPrimeiroBimestre = document.getElementById("valor1").value;
	var elementoSegundoBimestre = document.getElementById("valor2").value;
	var elementoTerceiroBimestre = document.getElementById("valor3").value;
	var elementoQuartoBimestre = document.getElementById("valor4").value;

	var nomeDoAluno = document.getElementById("nome").value;

	var notaPrimeiroBimestre = parseFloat(elementoPrimeiroBimestre);
	var notaSegundoBimestre = parseFloat(elementoSegundoBimestre);
	var notaTerceiroBimestre = parseFloat(elementoTerceiroBimestre);
	var notaQuartoBimestre = parseFloat(elementoQuartoBimestre);

	var media = (
		(notaPrimeiroBimestre +
			notaSegundoBimestre +
			notaTerceiroBimestre +
			notaQuartoBimestre) /
		4
	).toFixed(2);

	var elementoSaudacao = document.getElementById("saudacao");
	var saudacao = "Olá " + nomeDoAluno + "!";
	elementoSaudacao.innerHTML = saudacao;

	var elementoMedia = document.getElementById("valorMedia");
	var valorMedia = "Sua média é " + media;
	elementoMedia.innerHTML = valorMedia;

	console.log(media);
}

var nome = "Dio Brando";
var notaDoPrimeiroBimestre = 9.656;
var notaDoSegundoBimestre = 7.4545;
var notaDoTerceiroBimestre = 4.212;
var notaDoQuartoBimestre = 2.154;

var notaFinal =
	(notaDoPrimeiroBimestre +
		notaDoSegundoBimestre +
		notaDoTerceiroBimestre +
		notaDoQuartoBimestre) /
	4;

var notaFixada = notaFinal.toFixed(2);

//console.log("Bem vindo " + nome);

//console.log("Nota final = " + notaFinal);
//console.log("Nota final corrigida = " + notaFixada);

// código com definição de variáveis e operações algébricas simples

// Revisão
// variáveis, strings, console.log, toFixed, oerações algébricas, concatenação de strings com variáveis