
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