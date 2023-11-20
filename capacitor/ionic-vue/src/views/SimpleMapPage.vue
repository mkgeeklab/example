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

import { MarkerEvent, MkgMapviewOptions, MkgMarkerOptions } from '@mkgeeklab/googlemaps-core-vue';
import { ref } from 'vue';

const mapViewOptions = ref<MkgMapviewOptions>({
  jsMapId: '283fb0722209eb1e',
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

const onDragging = (e: MarkerEvent) => {
  console.log(e.type, e.values);
}

const mapVisible = ref<Boolean>(true);
const markerVisible = ref<Boolean>(true);

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
        <mkg-mapview v-model="mapViewOptions"  v-if="mapVisible">
          <mkg-marker v-model="markerProps" @dragend="onDragging" v-if="markerVisible">
            bbb
          </mkg-marker>
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

          </ion-card-content>
        </ion-card>
      </div>

    </ion-content>
  </ion-page>
</template>

<style scoped>
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
