import {} from '@mkgeeklab/googlemaps-core-common';
import { GoogleMapsWeb } from '@mkgeeklab/googlemaps-platform-browser';
import { CapacitorBridge } from '@mkgeeklab/googlemaps-bridge-capacitor';

const getMapsApiKey = () => {
    try {
        // Replaced in Github Actions
        return `$GOOGLE_MAPS_JS_KEY`;
    } catch (e) {
        return '';
    }
}

const init = async (jsApiKey) => {
    // console.log('--->init')
    window.mkgeeklab.googlemaps.setUp({
        bridge: {
            browser: GoogleMapsWeb,
            android: CapacitorBridge,
        },
        jsApiKey,
    });

    const markers = Array.from(document.getElementsByTagName('mkg-marker'));
    const latLngList = Array.from(document.getElementsByTagName('mkg-latlng'));
    
    markers.forEach((marker, idx) => {
        marker.addEventListener('position_changed', (evt) => {
            latLngList[idx].setPosition(evt.detail.value);
        });
    })
};

window.addEventListener("DOMContentLoaded", (event) => {
    init(getMapsApiKey());
});
  