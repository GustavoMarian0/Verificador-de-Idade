function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txt_idade')
    var res = document.getElementById('res')

    if (fAno.value.length == 0 || Number(fAno.value) > ano) {
        window.alert('[ERRO] verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'

            if (idade >= 0 && idade < 5) {
                //Bebe
                img.setAttribute('src', 'imagens/bebe-H.avif')
            } else if (idade >= 5 && idade < 16) {
                //Criança
                img.setAttribute('src', 'imagens/garoto.jpg')
            } else if (idade >= 16 && idade < 18) {
                //Adolescente
                img.setAttribute('src', 'imagens/adolescente-H.jpg')
            } else if (idade >= 18 && idade < 65) {
                //Adulto
                img.setAttribute('src', 'imagens/adulto-H.avif')
            } else if (idade >= 65 && idade <100) {
                //Idoso
                img.setAttribute('src', 'imagens/idoso-H.avif')
            } else {
                //Merreu
                img.setAttribute('src', 'imagens/cova.jpeg')
            }
            
        } else {
            genero = 'Mulher'

            if (idade >= 0 && idade < 5) {
                //Bebe
                img.setAttribute('src', 'imagens/bebe-M.avif')
            } else if (idade >= 5 && idade < 16) {
                //Criança
                img.setAttribute('src', 'imagens/garota.jpg')
            } else if (idade >= 16 && idade < 18) {
                //Adolescente
                img.setAttribute('src', 'imagens/adolescente-G.avif')
            } else if (idade >= 18 && idade < 65) {
                //Adulto
                img.setAttribute('src', 'imagens/adulta-G.avif')
            } else if (idade >= 65 && idade <100) {
                //Idoso
                img.setAttribute('src', 'imagens/idosa-M.avif')
            } else {
                //Merreu
                img.setAttribute('src', 'imagens/cova.jpeg')
            }
        }

        img.style.width = '300px'
        img.style.height = '270px'
        img.style.margin = '5%'
        img.style.borderRadius = '100%';
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} de ${idade} anos.`
        res.appendChild(img);
    }
}