const fondo=document.getElementById("corazones");

for(let i=0;i<25;i++){
let c=document.createElement("div");
c.className="corazon";
c.style.left=Math.random()*100+"%";
c.style.animationDuration=(6+Math.random()*5)+"s";
c.innerHTML="❤";
fondo.appendChild(c);
}

const contenido=[

{
titulo:"Planes a futuro",
texto:"Sueño con una vida contigo. Con despertar cada día sabiendo que estamos construyendo algo real, algo nuestro. Me imagino tomándote de la mano frente al mundo, formando una familia, creciendo juntos, apoyándonos en cada etapa. Quiero casarme contigo, hacer de nuestro hogar un lugar lleno de paz, de risas y de amor. Y algún día, si la vida nos lo permite, ver correr a dos pequeños que lleven un pedacito de nosotros."
},

{
titulo:"Fotos",
texto:""
},

{
titulo:"Te amo",
texto:"Te amo con todo lo que soy, con lo que fui y con lo que quiero ser a tu lado."
},

{
titulo:"Tiempo juntos",
texto:""
},

{
titulo:"Carta",
texto:`No siempre he sabido amarte de la manera más ligera. A veces mi amor pesa, a veces mis pensamientos me ganan, y te he hablado de mis miedos, de mi cansancio, de esa incertidumbre que a veces me aprieta el pecho. Nunca te he querido mentir sobre eso.

Te he dicho que me preocupa el futuro, que me asusta no saber si podremos con todo, que hay días donde me siento dividido entre el alivio y la tristeza. Y aun así, en medio de todo eso, hay algo que nunca cambia: lo que siento por ti.

No somos perfectos. Hemos tenido conversaciones largas, silencios incómodos, momentos donde parece que el mundo se nos viene encima. A veces siento que sostengo demasiado, otras veces siento que simplemente estoy tratando de no soltar. Pero si sigo aquí no es por costumbre, ni por miedo, ni por obligación.

Es porque te amo.

Mi amor por ti no nació en un jardín perfecto. Ha crecido en medio de dudas, de tormentas, de decisiones difíciles. Y tal vez por eso es fuerte. Como un lirio que florece después de la lluvia, no porque el clima sea ideal, sino porque está vivo.

Si alguna vez notas que mi voz tiembla o que mis palabras suenan pesadas, no es falta de amor. Es que amar de verdad también implica enfrentar lo que duele. Y aun cuando me siento cansado, aun cuando pienso demasiado, mi corazón sigue eligiéndote.

No prometo que todo será sencillo. Prometo que lo que siento es real. Que cuando digo que quiero quedarme, lo digo consciente de todo. Que mi amor no depende de que no haya problemas, sino de que, a pesar de ellos, sigo queriendo caminar contigo.

Y mientras esto siga vivo en mí,
mientras mi corazón siga volviendo a ti,
voy a amarte.

Siempre tuyo.`
}

];

function abrirPergamino(index){
document.getElementById("fondoPergamino").style.display="flex";
document.getElementById("tituloPergamino").innerText=contenido[index].titulo;
document.getElementById("textoPergamino").innerText=contenido[index].texto;

let pergamino=document.getElementById("pergaminoBox");

if(index===1){
document.getElementById("galeria").style.display="grid";
}else{
document.getElementById("galeria").style.display="none";
}

if(index===3){
iniciarContador();
}
}

function cerrarPergamino(){
document.getElementById("fondoPergamino").style.display="none";
}

function iniciarContador(){
const fechaInicio=new Date("2025-07-02");
const hoy=new Date();
const diferencia=hoy-fechaInicio;
const dias=Math.floor(diferencia/(1000*60*60*24));

document.getElementById("textoPergamino").innerHTML=
"<span class='contador'>"+dias+" días juntos 💖</span>";
}

