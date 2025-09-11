function carregar() {
    var hr = document.getElementById("hr")
    var img = document.getElementById("img")
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
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