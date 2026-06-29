let categoria = localStorage.getItem("categoria") || "razones";
let contador = Number(localStorage.getItem("contador")) || 0;

let usados = JSON.parse(localStorage.getItem("usados")) || {

razones:[],
dificiles:[],
admiro:[],
promesas:[]

};



let mensajes = {


razones:[

"Te amo porque haces mis días más felices ❤️",
"Te amo porque contigo puedo ser yo misma",
"Te amo por tu forma tan bonita de quererme",
"Te amo por cada sonrisa que me regalas",
"Te amo porque eres una persona increíble",
"Te amo por todos los momentos que hemos vivido",
"Te amo por la paciencia que tienes conmigo",
"Te amo porque me haces sentir especial",
"Te amo por tu manera de cuidarme",
"Te amo por tu corazón tan hermoso",
"Te amo porque siempre intentas dar lo mejor",
"Te amo por la confianza que tenemos",
"Te amo por cada conversación contigo",
"Te amo porque me encanta tu forma de ser",
"Te amo por tus pequeños detalles",
"Te amo porque me inspiras",
"Te amo por tus sueños y metas",
"Te amo por la persona que eres",
"Te amo por la tranquilidad que me das",
"Te amo porque contigo quiero seguir construyendo",
"Te amo por tu sonrisa",
"Te amo por tu forma de hacerme reír",
"Te amo por todo lo bonito que aportas a mi vida",
"Te amo porque eres único",
"Te amo por cada recuerdo contigo",
"Te amo porque siempre me haces sentir querida",
"Te amo por tu esfuerzo",
"Te amo por tu manera de demostrar amor",
"Te amo porque me gusta compartir mi vida contigo",
"Te amo simplemente porque eres tú ❤️"

],



dificiles:[

"Recuerda que eres más fuerte de lo que piensas 💚",
"No olvides que siempre voy a creer en ti",
"Un día difícil no cambia lo increíble que eres",
"Estoy orgullosa de cada esfuerzo que haces",
"Siempre tendrás mi apoyo",
"Confío mucho en ti",
"Todo problema tiene una solución",
"Estoy contigo incluso en momentos complicados",
"Recuerda descansar cuando lo necesites",
"Tu esfuerzo siempre vale la pena",
"No te rindas porque tienes mucho por lograr",
"Siempre voy a recordarte lo valioso que eres",
"Estoy feliz de acompañarte en tu camino",
"Los momentos difíciles también pasan",
"Confía en todo lo que eres capaz de hacer",
"Siempre tendrás un lugar donde sentirte amado",
"Me encanta verte crecer",
"Estoy orgullosa de ti incluso en días malos",
"Nunca dudes de tus capacidades",
"Tu sonrisa siempre será importante para mí",
"Estoy aquí para escucharte",
"Puedes lograr más de lo que imaginas",
"Siempre habrá nuevos comienzos",
"No tienes que cargar todo solo",
"Te admiro incluso cuando las cosas son difíciles",
"Recuerda que eres especial",
"Siempre voy a apoyarte",
"Todo esfuerzo tendrá recompensa",
"Confía en tu proceso",
"Te amo en los días buenos y difíciles ❤️"

],



admiro:[

"Admiro tu corazón 💙",
"Admiro tu manera de luchar por tus sueños",
"Admiro tu paciencia",
"Admiro tu forma de amar",
"Admiro la persona que eres",
"Admiro tu esfuerzo diario",
"Admiro tu sinceridad",
"Admiro tu valentía",
"Admiro cómo me cuidas",
"Admiro tus ganas de mejorar",
"Admiro tu forma de pensar",
"Admiro tu dedicación",
"Admiro tu cariño",
"Admiro tu respeto",
"Admiro tu personalidad",
"Admiro todo lo que haces por amor",
"Admiro tu manera de hacerme feliz",
"Admiro tus sueños",
"Admiro la forma en que sigues adelante",
"Admiro tener una persona como tú en mi vida ❤️"

],



promesas:[

"Prometo acompañarte siempre 🤍",
"Prometo escucharte",
"Prometo respetarte",
"Prometo cuidar nuestro amor",
"Prometo apoyarte en tus sueños",
"Prometo estar contigo en momentos buenos y malos",
"Prometo seguir creando recuerdos contigo",
"Prometo valorar cada momento a tu lado",
"Prometo demostrarte mi amor",
"Prometo seguir eligiéndote",
"Prometo cuidar tu corazón",
"Prometo ser sincera contigo",
"Prometo celebrar tus logros",
"Prometo ayudarte cuando lo necesites",
"Prometo caminar contigo",
"Prometo nunca olvidar lo importante que eres",
"Prometo hacerte sentir amado",
"Prometo seguir aprendiendo contigo",
"Prometo luchar por nosotros",
"Prometo seguir construyendo nuestra historia ❤️"

]

};





function seguir(){

document.getElementById("inicio").style.display="none";

document.getElementById("amor").style.display="block";

}





function elegir(tipo){

categoria = tipo;

}





function sacarPapel(){


let frasco=document.querySelector(".frasco");


frasco.classList.add("agitar");


setTimeout(()=>{

frasco.classList.remove("agitar");

},800);



if(usados[categoria].length === mensajes[categoria].length){

return;

}



let numero;


do{

numero=Math.floor(Math.random()*mensajes[categoria].length);

}

while(usados[categoria].includes(numero));



usados[categoria].push(numero);



let papel=document.getElementById("papel");


papel.style.display="none";



setTimeout(()=>{


if(contador === 100){

mostrarFinal();

return;

}


papel.innerHTML = mensajes[categoria][numero];


papel.style.display="block";


},800);
contador++;



document.getElementById("contador").innerHTML=

"Papelitos descubiertos: "+contador+"/100";




if(contador===20){

crearCorazones();

}



if(contador===50){

mostrarMitad();

}



if(contador===100){

mostrarFinal();

}



}




function crearCorazones(){


for(let i=0;i<30;i++){


let corazon=document.createElement("div");

corazon.innerHTML="❤️";

corazon.className="corazon";

corazon.style.left=Math.random()*100+"vw";


document.body.appendChild(corazon);



setTimeout(()=>{

corazon.remove();

},3000);


}

}





function mostrarMitad(){


let aviso=document.createElement("div");


aviso.className="mitad";


aviso.innerHTML="✨ Llegaste a los 50 papelitos ❤️";


document.body.appendChild(aviso);



setTimeout(()=>{

aviso.remove();

},3000);


}




function mostrarFinal(){

let papel = document.getElementById("papel");


papel.style.display = "block";


papel.style.animation = "cartaFinal 1.5s ease";


papel.innerHTML = `

💌 Mi amor 💌

<br><br>

Si estás leyendo esto es porque de seguro ya terminaste de ver los 100 papelitos.

<br><br>

Este detalle me encantó hacerlo, porque amo mucho ver las cosas buenas que tienes, las cosas que quiero construir contigo y la maravillosa persona que eres.

<br><br>

Te amo con todo mi ser, mi bebé, no lo vayas a olvidar nunca.

<br><br>

Te agradezco por siempre ser tú, por enamorarme cada día y por permitirme estar al lado de una persona tan hermosa como lo eres tú.

<br><br>

Sigamos adelante cumpliendo muchos añitos y meses, a pesar de todo. ❤️

`;

}