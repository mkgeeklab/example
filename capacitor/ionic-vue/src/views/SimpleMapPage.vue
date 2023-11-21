<script setup lang="ts">
import {
  IonButtons,
  IonCard,
  IonCardContent,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/vue';

import { MarkerEvent, MkgMapviewOptions, MkgMarkerOptions, MapviewEvent } from '@mkgeeklab/googlemaps-core-vue';
import { nextTick } from 'vue';
import { ref, reactive, getCurrentInstance } from 'vue';

class EventHistory {
  public readonly localTime: string;
  constructor(
    public readonly target: 'Map' | 'Marker',
    public readonly event: Event,
  ) {
    const t = new Date();
    this.localTime = `${t.getHours()}:${t.getMinutes()}:${t.getSeconds()}.${t.getMilliseconds()}`;
  }
}
class MapEventHistory extends EventHistory {
  constructor(event: Event) {
    super('Map', event);
  }
}
class MarkerEventHistory extends EventHistory {
  constructor(event: Event) {
    super('Map', event);
  }
}

const mapVisible = ref<Boolean>(true);
const markerVisible = ref<Boolean>(true);
const eventHistory = reactive<EventHistory[]>([]);
const historyDivRef = ref<HTMLDivElement>();

const mapViewOptions = ref<MkgMapviewOptions>({
  jsMapId: 'DEMO_MAP_ID',
  camera: {
    zoom: 12,
    center: {
      lat: 37,
      lng: 138
    },
    tilt: 0,
    heading: 0,
  },
  mapType: 'roadmap'
});

const markerProps = ref<MkgMarkerOptions>({
  position: {
    lat: 37,
    lng: 138,
  },
  draggable: true,
})

const scrollToBottom = () => {
  if (!historyDivRef.value) {return;}
  historyDivRef.value.scrollTop = historyDivRef.value?.scrollHeight;
}
const onMarkerEvent = (event: MarkerEvent) => {
  eventHistory.push(new MarkerEventHistory(event));
  nextTick(scrollToBottom);
};

const onMapEvent = (event: MapviewEvent) => {
  eventHistory.push(new MapEventHistory(event));
  nextTick(scrollToBottom);
};

</script>

<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>{{ $route.params.id }}</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">{{ $route.params.id }}</ion-title>
        </ion-toolbar>
      </ion-header>


      <div id="container">
        <mkg-mapview v-model="mapViewOptions"
          v-show="mapVisible"
          @click="onMapEvent"
          @dragstart="onMapEvent"
          @dragend="onMapEvent"
          @drag="onMapEvent"
          @center_changed="onMapEvent"
          @tilt_changed="onMapEvent"
          @heading_changed="onMapEvent"
          @zoom_changed="onMapEvent"
          @idle="onMapEvent"
          @tilesloaded="onMapEvent"
          >
          <mkg-marker v-model="markerProps"
            @dragstart="onMarkerEvent"
            @drag="onMarkerEvent"
            @dragend="onMarkerEvent"
            @click="onMarkerEvent"
            v-show="markerVisible"
          ></mkg-marker>
        </mkg-mapview>


        <ion-card>
          <ion-card-content>
            <ion-item slot="header">
              <ion-label>Map</ion-label>
            </ion-item>
            <div slot="content">
              <ul>
                <li>visible: <input type="checkbox" v-model="mapVisible"></li>
                <li>
                  MapTypeId: 
                  <select v-model="mapViewOptions.mapType">
                    <option value="roadmap">Roadmap</option>
                    <option value="satellite">Satellite</option>
                  </select>
                </li>
                <li>center/lat: <input type="number" v-model="mapViewOptions.camera!.center!.lat" /></li>
                <li>center/lng: <input type="number" v-model="mapViewOptions.camera!.center!.lng" /></li>
                <li>tilt: <input type="number" v-model="mapViewOptions.camera!.tilt" /></li>
                <li>heading: <input type="number" v-model="mapViewOptions.camera!.heading" /></li>
                <li>zoom: <input type="number" v-model="mapViewOptions.camera!.zoom" /></li>
              </ul>
            </div>
            
            <ion-item slot="header">
              <ion-label>Marker</ion-label>
            </ion-item>
            <div slot="content">
              <ul>
                <li>visible: <input type="checkbox" v-model="markerVisible"></li>
                <li>lat: <input type="number" v-model="markerProps.position.lat" /></li>
                <li>lng: <input type="number" v-model="markerProps.position.lng" /></li>
              </ul>
            </div>

            <ion-item slot="header">
              <ion-label>Events</ion-label>
            </ion-item>
            <div slot="content" class="eventHistory" ref="historyDivRef">
              <div class="row" v-for="(item) in eventHistory">
                <span class="target">{{ item.target }}</span>
                <span class="eventType">{{ item.event.type }}</span>
                <span class="timestamp">{{ item.localTime }}</span>
              </div>
            </div>
          </ion-card-content>
        </ion-card>
      </div>

    </ion-content>
  </ion-page>
</template>

<style scoped>
.eventHistory {
  max-height: 20vh;
  overflow-y: scroll;

  .row {
    position: relative;
    height: 2em;
    width: 100%;
    display: flex;
    flex: 1;
    order: 3;

    .target {
      width: 30%;
      height: 100%;
      overflow: hidden;
    }
    .eventType {
      flex-grow: 2;
      height: 100%;
      overflow: hidden;
    }
    .timestamp {
      position: absolute;
      top: 0px;
      right: 0px;
      font-size: 0.75em;
    }
  }
}
#container {
  width: 100%;
  height: 100%;
  flex: auto 1 1;
}
mapview {
  width: 100%;
  height: 100%;
  flex: auto 1 1;
}
ion-card {
  z-index: 2;
  position: fixed;
  bottom: 10px;
}
</style>
