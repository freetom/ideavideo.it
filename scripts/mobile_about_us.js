// The JS gods don't want the below function to exist so copy-paste below :'(
/*function set_mobile_style(){
  elements = document.getElementsByClassName('dice-di-me')
  for(i=0;i<elements.length;i++){
    elements[i].className = ''
    elements[i].width = '90%' //window.screen.width+'px'
    elements[i].marginLeft = '0px'

    elements[i].style.float = ''
    elements[i].style.marginTop = ''
    elements[i].style.marginRight = ''

  }
}*/

function setup_mobile(){
  fix_common()

  getById('dicono-di-me-span').style.textAlign = 'center'
  getById('dicono-di-me-span').style.marginLeft = '10%'
  //getById('dicono-di-me-span').style.align = 'center'



  getById('immagine-sfondo').style.backgroundSize = 'auto 100%'
  getById('spazi-sotto-immagine-sfondo').innerHTML = '<br><br><br>'

  // JS ultimate WTF
  //calling a function 4 times does NOT work. DON'T ASK ME WHY!!
  //for(i-0;i<4;i++){
  //  set_mobile_style()
  //}

  try{  //need the try catch cause this will error and stopping the execution would prevent the rest of the setup from working properly
    elements = document.getElementsByClassName('dice-di-me')
    for(i=0;i<elements.length;i++){
      elements[i].className = ''
      elements[i].width = '90%' //window.screen.width+'px'
      elements[i].marginLeft = '0px'

      elements[i].style.float = ''
      elements[i].style.marginTop = ''
      elements[i].style.marginRight = ''

    }
    elements = document.getElementsByClassName('dice-di-me')
    for(i=0;i<elements.length;i++){
      elements[i].className = ''
      elements[i].width = '90%' //window.screen.width+'px'
      elements[i].marginLeft = '0px'

      elements[i].style.float = ''
      elements[i].style.marginTop = ''
      elements[i].style.marginRight = ''

    }
    elements = document.getElementsByClassName('dice-di-me')
    for(i=0;i<elements.length;i++){
      elements[i].className = ''
      elements[i].width = '90%' //window.screen.width+'px'
      elements[i].marginLeft = '0px'

      elements[i].style.float = ''
      elements[i].style.marginTop = ''
      elements[i].style.marginRight = ''

    }
    elements = document.getElementsByClassName('dice-di-me')
    for(i=0;i<elements.length;i++){
      elements[i].className = ''
      elements[i].width = '90%' //window.screen.width+'px'
      elements[i].marginLeft = '0px'

      elements[i].style.float = ''
      elements[i].style.marginTop = ''
      elements[i].style.marginRight = ''

    }
  }
  catch(e){}

}
