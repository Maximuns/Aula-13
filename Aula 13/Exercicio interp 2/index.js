
// Leia o c�digo

let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

/**
 * 
 * a) Explique o que essa fun��o faz e qual � sua utilidade.
 * 
 * b) Determine qual ser� a sa�da no console para cada uma das 3 entradas do usu�rio:
 * - Eu gosto de cenoura.
 * - CENOURA � bom pra vista.
 * - Cenouras crescem na terra.
 * 
**/

//a) Fez com q o programa te peça para inserir um texto em minusculo  e em seguida dizer se é verdadeiro ou falso se tiver 
//a palavra cenoura no texto 

/**
 * b)
 * dizer q é verdadeiro
 * trasformar a palavra cenoura que está em maiusculo em minusculo e em seguida dizer q é verdadeiro 
 * dizer que o texto é verdadeiro
 * */
 