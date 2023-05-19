
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



