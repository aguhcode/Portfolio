document.querySelector('.hire').addEventListener('click', function() {
    window.location.href = 'form.html';
});

document.querySelector('.email').addEventListener('click', function() {
    const email = 'aguhwtf1@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
        Toastify({
            text: "¡Email copiado al portapapeles!",
            duration: 3000, 
            close: true,    
            gravity: "top", 
            position: "right", 
            backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
        }).showToast();
    }).catch(err => {
        console.error('Error al copiar el email:', err);
    });
});
