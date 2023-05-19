//cambia el tamaño del header-plchldr para que sea igual que el header
//de esta manera no come visualmente el contenedor de la sección de presentación
window.addEventListener('DOMContentLoaded', function() {
    let elementoPadre = document.getElementById('header');
    let elementoHijo = document.getElementById('header-plchldr');
    
    function actualizarTamanio() {
      
      const altoPadre = elementoPadre.offsetHeight;
    
      elementoHijo.style.height = altoPadre + 'px';
    }
    
    const resizeObserver = new ResizeObserver(actualizarTamanio);
    resizeObserver.observe(elementoPadre);
    
    actualizarTamanio();
  });

const technologies = [
    {icon : "CsharpIcon.png",
    name : "C#"},
    {icon : "jsicon.png",
    name : "JavaScript"},
    {icon : "reacticon.png",
    name : "ReactJS"},
    {icon : "c++Icon.png",
    name : "C++"},
    {icon : "dotNetIcon.png",
    name : ".NET"}];

let technologiesSection = document.getElementById('icon-list');

let technologiesContent = "";

for (let i=0;i<technologies.length;i++){
    technologiesContent += `<li class="technology">
                                <img src="${technologies[i].icon}" alt="${technologies[i].name}">
                            </li>`
}

technologiesSection.innerHTML = technologiesContent;

const projects = [
    {name : "Gestor de Torneos - C++",
    github : "https://github.com/Coqui2/Gestor-de-Torneos-de-futbol",
    img: "gestorTorneos.png"},
    {name : "App Catalogo de Productos - WinForms .NET",
    github : "https://github.com/Coqui2/tp-winform-equipo-7",
    img: ""},
    {name : "Telegram Bot Cortes de Luz - NodeJS",
    github : "https://github.com/Coqui2/TelegramBotCortesDeLuz",
    img: "Telegrambot.png"},
    {name : "CRUD system with REST API - ReactJS/ExpressJS/MySQL/NodeJS/MUI",
    github : "",
    img: "ImitacionGForms.png"},
];