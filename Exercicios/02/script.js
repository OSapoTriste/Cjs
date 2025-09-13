function verificar() {
    const data = new Date()
    const ano = data.getFullYear()
    const txtano = document.getElementById("txtano").value
    const bt = document.getElementById("bt")
    const res = document.getElementById("res")

    const nasc = ano - Number(txtano)

    if (txtano < 1900 || Number(txtano.value) > ano) {
        window.alert("[ERRO] Verifique os dados e tente novamente!")
        return
    } else {

    const fsex = document.getElementsByName("radsex")
    const idade = ano - nasc
    let genero = ""

    if (fsex[0].checked) {
        genero = "homem"
    } else if (fsex[1].checked) {
        genero = "mulher"
    }

    res.innerHTML = `Identificado ${genero} de ${idade} anos`

    }

}