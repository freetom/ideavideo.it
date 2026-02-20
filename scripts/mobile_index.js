import { getById } from './utils.js';

function fix_services() {
    const riprese_subaquee = getById('riprese-subaquee-servizio');
    riprese_subaquee.rows[0].deleteCell(0);
    riprese_subaquee.rows[0].deleteCell(1); // cell 1 now, after deleting cell 0 was cell 2
    const cell = document.createElement('td');
    cell.innerHTML = '&nbsp;';
    riprese_subaquee.rows[0].insertBefore(cell, riprese_subaquee.rows[0].cells[0]);

    const table_drone = getById('riprese-aeree-drone-servizio');
    table_drone.rows[0].cells[0].innerHTML = '&nbsp;';
    table_drone.rows[0].deleteCell(2);

    const table_hotel = getById('riprese-hotel-servizio');
    table_hotel.rows[0].deleteCell(0);
    table_hotel.rows[0].deleteCell(1); // cell 1 now, after deleting cell 0 was cell 2
    const hotel_cell = document.createElement('td');
    hotel_cell.innerHTML = '&nbsp;';
    table_hotel.rows[0].insertBefore(hotel_cell, table_hotel.rows[0].cells[0]);

    const table_aziendali = getById('riprese-aziendali-servizio');
    table_aziendali.rows[0].cells[0].innerHTML = '&nbsp;';
    table_aziendali.rows[0].deleteCell(2);

    const table_demand = getById('riprese-on-demand-servizio');
    table_demand.rows[0].deleteCell(0);
    table_demand.rows[0].deleteCell(1); // cell 1 now, after deleting cell 0 was cell 2
    const demand_cell = document.createElement('td');
    demand_cell.innerHTML = '&nbsp;';
    table_demand.rows[0].insertBefore(demand_cell, table_demand.rows[0].cells[0]);

    // Fix services pictures!
    const img_subaquee = document.createElement('img');
    img_subaquee.src = './images/mobile/riprese-subacquee.jpg';
    img_subaquee.width = window.screen.width;
    getById('riprese-subaquee-mobile').appendChild(img_subaquee);

    const img_drone = document.createElement('img');
    img_drone.src = './images/mobile/riprese-aeree-con-drone.jpg';
    img_drone.width = window.screen.width;
    getById('drone-mobile').appendChild(img_drone);

    const img_hotel = document.createElement('img');
    img_hotel.src = './images/mobile/hotel-e-resort.jpg';
    img_hotel.width = window.screen.width;
    getById('hotel-mobile').appendChild(img_hotel);

    const img_aziendali = document.createElement('img');
    img_aziendali.src = './images/mobile/spot-e-video-promozionali-aziendali.jpg';
    img_aziendali.width = window.screen.width;
    getById('aziendali-mobile').appendChild(img_aziendali);

    const img_demand = document.createElement('img');
    img_demand.src = './images/mobile/video-on-demand.jpg';
    img_demand.width = window.screen.width;
    getById('on-demand-mobile').appendChild(img_demand);
}

function fix_videos() {
    const videos = document.getElementsByTagName('iframe');
    for (const video of videos) {
        const video_width = (window.screen.width / 100) * 90;
        video.height = (video.height * video_width) / video.width;
        video.width = video_width;
        video.style.marginBottom = '1em';
    }
}

function fix_partners() {
    getById('partners-table-mobile').style.display = 'block';
    getById('partners-table').style.display = 'none';
}

function fix_clown_fish() {
    const img = document.createElement('img');
    img.src = './images/mobile/pesce-pagliaccio.jpg';
    img.width = window.screen.width;
    getById('mobile-photo').appendChild(img);
}

function setup_mobile() {
    getById('showreel-container').style.display = 'none';
    getById('we-catch-emotions').style.display = 'none';

    fix_clown_fish();
    fix_common();
    fix_services();
    fix_videos();
    fix_partners();
}
