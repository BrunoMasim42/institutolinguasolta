const fotos = document.querySelectorAll(".foto img");
            const lightbox = document.getElementById("lightbox");
            const lightboxImg = document.getElementById("lightbox-img");
            const fechar = document.getElementById("fechar");
        
            fotos.forEach(foto => {
              foto.addEventListener("click", () => {
                lightbox.style.display = "flex";
                lightboxImg.src = foto.src;
                lightboxImg.alt = foto.alt;
              });
            });
        
            fechar.addEventListener("click", () => {
              lightbox.style.display = "none";
            });
        
            lightbox.addEventListener("click", (e) => {
              if (e.target === lightbox) {
                lightbox.style.display = "none";
              }
            });