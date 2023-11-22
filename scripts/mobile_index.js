function fix_services(){
  riprese_subaquee = getById('riprese-subaquee-servizio')
  riprese_subaquee.rows[0].deleteCell(0)
  riprese_subaquee.rows[0].deleteCell(1) // cell 1 now, after deleting cell 0 was cell 2
  cell = riprese_subaquee.rows[0].insertCell(0)
  cell.innerHTML = '&nbsp;'

  table_drone = getById('riprese-aeree-drone-servizio')
  table_drone.rows[0].cells[0].innerHTML = '&nbsp;'
  table_drone.rows[0].deleteCell(2)

  table_hotel = getById('riprese-hotel-servizio')
  table_hotel.rows[0].deleteCell(0)
  table_hotel.rows[0].deleteCell(1) // cell 1 now, after deleting cell 0 was cell 2
  cell = table_hotel.rows[0].insertCell(0)
  cell.innerHTML = '&nbsp;'

  table_aziendali = getById('riprese-aziendali-servizio')
  table_aziendali.rows[0].cells[0].innerHTML = '&nbsp;'
  table_aziendali.rows[0].deleteCell(2)

  table_demand = getById('riprese-on-demand-servizio')
  table_demand.rows[0].deleteCell(0)
  table_demand.rows[0].deleteCell(1) // cell 1 now, after deleting cell 0 was cell 2
  cell = table_demand.rows[0].insertCell(0)
  cell.innerHTML = '&nbsp;'


  //  Fix services pictures!
  img = document.createElement('img')
  img.src = './images/mobile/riprese-subacquee.jpg'
  img.width = window.screen.width
  getById('riprese-subaquee-mobile').appendChild(img)

  img = document.createElement('img')
  img.src = './images/mobile/riprese-aeree-con-drone.jpg'
  img.width = window.screen.width
  getById('drone-mobile').appendChild(img)

  img = document.createElement('img')
  img.src = './images/mobile/hotel-e-resort.jpg'
  img.width = window.screen.width
  getById('hotel-mobile').appendChild(img)

  img = document.createElement('img')
  img.src = './images/mobile/spot-e-video-promozionali-aziendali.jpg'
  img.width = window.screen.width
  getById('aziendali-mobile').appendChild(img)

  img = document.createElement('img')
  img.src = './images/mobile/video-on-demand.jpg'
  img.width = window.screen.width
  getById('on-demand-mobile').appendChild(img)

  //img = document.createElement('img')
  //img.src = 'images/riprese-aeree-con-drone.png'
  //document.body.insertBefore(img, table_drone)

}

function fix_videos(){
  videos = document.getElementsByTagName('iframe')
  for (video of videos){
    video_width = (window.screen.width/100)*90
    video.height = (video.height * video_width) / video.width
    video.width = video_width
    video.style.marginBottom = '1em'
    //video.style.paddingLeft = '0'
  }
  //getById('blocco-video').align = 'left'
}

function fix_partners(){
  getById('partners-table-mobile').style.display = 'block'
  getById('partners-table').style.display = 'none'
}

function fix_clown_fish(){
  // add clown fish picture
  img = document.createElement('img')
  img.src = './images/mobile/pesce-pagliaccio.jpg'
  img.width = window.screen.width
  getById('mobile-photo').appendChild(img)
}

function setup_mobile(){



  getById('showreel-container').style.display='none'
  getById('we-catch-emotions').style.display='none'

  fix_clown_fish()
  fix_common()
  fix_services()
  fix_videos()
  fix_partners()

  //  document.body.width = window.screen.width+'px'
  //document.body.marginRight = '0px'
  //document.body.paddingRight = '0px'

  //  getById('top-table').width = window.screen.width+'px'
  //  alert(window.screen.width)

}
