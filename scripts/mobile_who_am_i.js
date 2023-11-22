function setup_mobile(){
  fix_common()

  blocks = document.getElementsByClassName('common-block')
  for(i=0;i<blocks.length;i++){
    block = blocks[i]//document.getElementsByClassName('block')[0]
    block.style.background = 'none'
    block.style.position = 'static'
    block.style.display = 'block'
    block.style.height = 'auto'
  }

  subblocks = document.getElementsByClassName('subblock')
  for(i=0;i<subblocks.length;i++){
    block = subblocks[i]
    block.style.position = 'static'
    block.style.marginTop = '0'
  }

  containers = document.getElementsByClassName('line')
  for(i=0;i<containers.length;i++){
    block = containers[i]
    block.style.flex = ''
    block.style.display = 'block'
    block.style.width = "80%"

  }

  containers = document.getElementsByClassName('container')
  for(i=0;i<containers.length;i++){
    block = containers[i]
    block.style.flex = ''
    block.style.display = 'block'
    block.style.marginLeft = '0%'
    block.style.width = "100%"

  }

  getById('partners-table').style.display = 'none'
  getById('partners-table-mobile').style.display = 'block'

  getById('video-container').style.marginLeft = ''


  getById('seashepherd-image').width = (window.screen.width/100)*80


  video = document.getElementsByTagName('iframe')[0]

  video_width = (window.screen.width/100)*80

  video.style = ''
  video.height = ((315 * video_width) / 420)
  video.width = video_width

  video.parentNode.insertBefore(document.createElement('br'), video.nextSibling)
  video.parentNode.insertBefore(document.createElement('br'), video.nextSibling)

  getById('lista-premi').style.display = 'inline-block'
  getById('lista-premi').style.width = '100%'
  getById('lista-premi').style.overflowWrap = 'break-word'
  getById('lista-premi').style.fontSize = '0.7em'

  guides = document.getElementsByClassName('guide')
  for (index=0;index<guides.length;index++){
      //guides[index].style.margin = 'auto'
      if(index == 3)  continue

      guides[index].parentNode.insertBefore(document.createElement('br'), guides[index].nextSibling)
      guides[index].parentNode.insertBefore(document.createElement('br'), guides[index].nextSibling)
  }

  getById('bottom-table').marginTop = '80%'

}
