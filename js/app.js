function typeWriter(paragraph, id, speed = 120) {
    const element = document.getElementById(id);
    let index = 0;
    let lastTime = 0;

    function animate(timestamp) {
        if (!lastTime) lastTime = timestamp;
        const elapsed = timestamp - lastTime;

        if (elapsed > speed) {
            element.textContent += paragraph.charAt(index);
            index++;
            lastTime = timestamp;
        }

        if (index < paragraph.length) {
            requestAnimationFrame(animate);
        }
    }

    requestAnimationFrame(animate);
}

// Ejemplo de uso
window.onload = () => {
    typeWriter("Opiniones de Nuestros Clientes", "typing-text", 80);
    typeWriter("Gestiona tu inventario en tiempo real con StockWise", "typing-text2", 50);
};

