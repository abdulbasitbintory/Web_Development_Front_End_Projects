function generateQR() {
    let qrText = document.getElementById("qrText");
    let qrImage = document.getElementById("qrImage");
    let imgBox = document.getElementById("imgBox");

    
    if (qrText.value.trim().length > 0) {
        
        let qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(qrText.value)}`;
        
        qrImage.src = qrUrl;  
        imgBox.classList.add("show-image"); 
        qrText.classList.remove("error");   
    } else {
    
        qrText.classList.add("error");
        setTimeout(() => {
            qrText.classList.remove("error");
        }, 1000);
    }
}

