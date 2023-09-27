import { InfoWindow, Marker } from '@mkgeeklab/googlemaps-core-common';
import { GoogleMapsWeb } from '@mkgeeklab/googlemaps-platform-browser';

const getMapsApiKey = () => {
    try {
        // Replaced in Github Actions
        return `$GOOGLE_MAPS_JS_KEY`;
    } catch (e) {
        return '';
    }
}

class Application {
    // '#' denotes 'private'
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields

    #info = new InfoWindow();
    #map;
    #counter = 1;

    constructor(mapElement) {
        this.#map = mapElement;
        mapElement.appendChild(this.#info);
        this.#map.addEventListener('click', (event) => this.#onMapClick(event));
    }


    #getRandomColor() {
        const R = Math.floor(255 * Math.random());
        const G = Math.floor(255 * Math.random());
        const B = Math.floor(255 * Math.random());
        return `rgb(${R}, ${G}, ${B})`;
    }

    #onMapClick(event) {
        const marker = new Marker(
            {
                position: event.detail.latLng,

                icon: this.#getRandomColor(),

                // The 'extra' property keeps any data
                extra: {
                    lat: event.detail.latLng.lat,
                    lng: event.detail.latLng.lng,
                    cnt: this.#counter++,
                }
            }
        );
        
        marker.addEventListener('click', (event) => this.#onMarkerClick(event));
        this.#map.appendChild(marker);

        setTimeout(() => {
            marker.dispatchEvent(new Event('click'));
        }, 300);
    }
    
    #onMarkerClick(event) {
        const marker = event.target;
        console.log(marker.extra);

        const text = `
        <table border=1>
        <tr>
            <th>cnt</th>
            <td>${marker.extra.cnt}</td>
        </tr>
        <tr>
            <th>latitude</th>
            <td>${marker.extra.lat}</td>
        </tr>
        <tr>
            <th>longitude</th>
            <td>${marker.extra.lng}</td>
        </tr>
        </table>
        `;
        this.#info.setContent(text);
        this.#info.open(marker);
    }
}




window.addEventListener("load", async (event) => {
    await mkgeeklab.googlemaps.setUpAsync({
        bridge: {
            browser: GoogleMapsWeb,
        },
        jsApiKey: getMapsApiKey(),
    });

    const mapCanvas = document.getElementById("map_canvas");
    const app = new Application(
        mapCanvas,
    );
});