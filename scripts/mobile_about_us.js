function setup_mobile(){
    fix_common()

    getById('dicono-di-me-span').style.textAlign = 'center'
    getById('dicono-di-me-span').style.marginLeft = '10%'
    //getById('dicono-di-me-span').style.align = 'center'



    getById('immagine-sfondo').style.backgroundSize = 'auto 100%'
    getById('spazi-sotto-immagine-sfondo').innerHTML = '<br><br><br>'

    lines = document.getElementsByClassName('line-dicono')
    for(i=0;i<lines.length;i+=0){
        lines[i].className = ''
    }

    elements = document.getElementsByClassName('dice-di-me')
    for(i=0;i<elements.length;i+=0){
        elements[i].width = '90%' //window.screen.width+'px'
        elements[i].style.marginLeft = '0px'

        elements[i].style.float = ''
        elements[i].style.marginTop = ''
        elements[i].style.marginRight = ''
        elements[i].className = ''


    }
}
