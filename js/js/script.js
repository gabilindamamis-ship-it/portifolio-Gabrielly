const formulario = document.getElementById("formulario");

if(formulario){

formulario.addEventListener("submit", function(event){

event.preventDefault();

const nome = document.getElementById("nome").value;

const email = document.getElementById("email").value;

const mensagem = document.getElementById("mensagem").value;

const resultado = document.getElementById("resultado");

if(nome==="" || email==="" || mensagem===""){

resultado.style.color="red";

resultado.innerHTML="Preencha todos os campos.";

return;

}

resultado.style.color="green";

resultado.innerHTML="Mensagem enviada com sucesso!";

formulario.reset();

});

}