/*==========================================================
PORTFÓLIO GABRIELLY GUIMARÃES
JavaScript
==========================================================*/

/*=========================================
MODO CLARO / ESCURO
=========================================*/

const botaoTema = document.querySelector(".tema-btn");

const body = document.body;

const temaSalvo = localStorage.getItem("tema");

if(temaSalvo === "escuro"){

body.classList.add("dark");

trocarIcone();

}

function trocarIcone(){

const icone = document.querySelector(".tema-btn i");

if(body.classList.contains("dark")){

icone.className="fa-solid fa-sun";

}else{

icone.className="fa-solid fa-moon";

}

}

if(botaoTema){

botaoTema.addEventListener("click",()=>{

body.classList.toggle("dark");

if(body.classList.contains("dark")){

localStorage.setItem("tema","escuro");

}else{

localStorage.setItem("tema","claro");

}

trocarIcone();

});

}

/*=========================================
SCROLL SUAVE
=========================================*/

document.querySelectorAll('a[href^="#"]').forEach(link=>{

link.addEventListener("click",function(e){

e.preventDefault();

const destino=document.querySelector(this.getAttribute("href"));

if(destino){

destino.scrollIntoView({

behavior:"smooth"

});

}

});

});
/*=========================================
BOTÃO VOLTAR AO TOPO
=========================================*/

const voltar=document.querySelector("#voltarTopo");

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

voltar.classList.add("ativo");

}else{

voltar.classList.remove("ativo");

}

});

if(voltar){

voltar.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

}

}
/*=========================================
EFEITO DIGITAÇÃO
=========================================*/

const textoDigitando=document.querySelector(".digitando");

const palavras=[

"Desenvolvedora Front-end",

"Estudante de ADS",

"Java Developer",

"Web Designer",

"Programadora"

];

let palavra=0;

let letra=0;

let apagando=false;

function escrever(){

if(!textoDigitando) return;

const texto=palavras[palavra];

if(!apagando){

textoDigitando.innerHTML=texto.substring(0,letra++);

if(letra>texto.length){

apagando=true;

setTimeout(escrever,1800);

return;

}

}else{

textoDigitando.innerHTML=texto.substring(0,letra--);

if(letra<0){

apagando=false;

palavra++;

if(palavra>=palavras.length){

palavra=0;

}

}

}

setTimeout(escrever,90);

}

escrever();
/*======================================
LOADER
======================================*/

window.addEventListener("load",()=>{

const loader=document.querySelector("#loader");

if(loader){

loader.style.opacity="0";

setTimeout(()=>{

loader.style.display="none";

},900);

}

}); 
/*======================================
CURSOR
======================================*/

const cursor=document.querySelector(".cursor");

document.addEventListener("mousemove",(e)=>{

if(cursor){

cursor.style.left=e.clientX+"px";

cursor.style.top=e.clientY+"px";

}

});
/*======================================
REVEAL
======================================*/

const elementos=document.querySelectorAll(".fade");

function revelar(){

const altura=window.innerHeight;

elementos.forEach(item=>{

const topo=item.getBoundingClientRect().top;

if(topo<altura-120){

item.classList.add("aparecer");

}

});

}

window.addEventListener("scroll",revelar);

revelar();
/*======================================
SKILLS
======================================*/

const barras=document.querySelectorAll(".progresso");

function skills(){

barras.forEach(barra=>{

const largura=barra.style.width;

barra.style.width="0";

setTimeout(()=>{

barra.style.width=largura;

},400);

});

}

window.addEventListener("load",skills);
/*======================================
MENU ATIVO
======================================*/

const links=document.querySelectorAll("nav a");

const secoes=document.querySelectorAll("section");

window.addEventListener("scroll",()=>{

let atual="";

secoes.forEach(secao=>{

const topo=secao.offsetTop-180;

if(pageYOffset>=topo){

atual=secao.getAttribute("id");

}

});

links.forEach(link=>{

link.classList.remove("ativo");

if(link.getAttribute("href")=="#"+atual){

link.classList.add("ativo");

}

});

});
/*=========================================
MENU MOBILE
=========================================*/

const menu=document.querySelector(".menu-mobile");

const nav=document.querySelector("nav");

if(menu){

menu.onclick=()=>{

nav.classList.toggle("ativo");

}

}
/*=========================================
CONTADORES
=========================================*/

const numeros=document.querySelectorAll(".numero");

numeros.forEach(numero=>{

const atualizar=()=>{

const alvo=+numero.dataset.valor;

const atual=+numero.innerText;

const incremento=alvo/100;

if(atual<alvo){

numero.innerText=Math.ceil(atual+incremento);

setTimeout(atualizar,20);

}else{

numero.innerText=alvo;

}

}

atualizar();

});
/*=========================================
FORMULÁRIO
=========================================*/

const formulario=document.querySelector("form");

if(formulario){

formulario.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Mensagem enviada com sucesso!");

formulario.reset();

});

}
/*=========================================
IMAGENS
=========================================*/

const imagens=document.querySelectorAll("img");

imagens.forEach(img=>{

img.loading="lazy";

});
/*=========================================
FOTO
=========================================*/

const foto=document.querySelector(".foto img");

if(foto){

let angulo=0;

setInterval(()=>{

angulo+=0.02;

foto.style.transform=

`translateY(${Math.sin(angulo)*8}px)`;

},25);

}
/*=========================================
TOOLTIPS
=========================================*/

document.querySelectorAll("a").forEach(link=>{

if(link.title===""){

link.title=link.innerText;

}

});