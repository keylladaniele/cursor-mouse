document.addEventListener("mousemove", (event) => {
    const patinha = document.createElement("i");
    patinha.classList.add("fas", "fa-paw", "patinha"); 
    
    patinha.style.left = `${event.pageX}px`;
    patinha.style.top = `${event.pageY}px`;
  
    const distanceToEdge = Math.min(
      event.pageX,                      
      window.innerWidth - event.pageX,  
      event.pageY,                      
      window.innerHeight - event.pageY  
    );
  
    const scaleFactor = Math.max(0.5, distanceToEdge / 200);
    patinha.style.transform = `scale(${scaleFactor})`;
  
    const randomColor = `hsl(${Math.random() * 360}, 100%, 75%)`;
    patinha.style.color = randomColor;
  
    document.body.appendChild(patinha);
  
    setTimeout(() => {
      patinha.remove();
    }, 1000);
  });
  