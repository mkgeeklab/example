import {} from '@mkgeeklab/googlemaps-core-common';
import { GoogleMapsWeb } from '@mkgeeklab/googlemaps-platform-browser';

const init = async () => {
    // console.log('--->init')
    window.mkgeeklab.googlemaps.setUp({
        bridge: {
            browser: GoogleMapsWeb,
        },
    });

    const markers = Array.from(document.getElementsByTagName('mkg-marker'));
    const latLngList = Array.from(document.getElementsByTagName('mkg-latlng'));
    
    markers.forEach((marker, idx) => {
        marker.addEventListener('position_changed', (evt) => {
            latLngList[idx].setPosition(evt.detail.value);
        });
    })
};
init();