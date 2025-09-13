function carregar() {
    const hr = document.getElementById("hr")
    const img = document.getElementById("img")
    const data = new Date()
    const hora = data.getHours()
    const min = data.getMinutes().toString().padStart(2, '0') //Adiciona um zero à esquerda se necessário

    hr.innerHTML = `Agora são ${hora}:${min}`

    if (hora >= 4 && hora < 12) {
        //Bom dia
        img.src = "img/manha.jpg"
        document.body.style.background = "#8b6223ff"
    } else if (hora >= 12 && hora < 18) {
        //Boa tarde
        img.src = "img/entardecer.jpg"
        document.body.style.background = "#2d1564ff"
    } else {
        //Boa noite
        img.src = "img/noite.jpg"
        document.body.style.background = "black"
    }
}

setInterval(carregar, 1000);