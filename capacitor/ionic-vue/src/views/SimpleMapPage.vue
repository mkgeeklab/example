<script setup lang="ts">
import {
IonButtons,
IonCard,
IonCardContent,
IonCardHeader,
IonCardTitle,
IonContent,
IonHeader,
IonMenuButton,
IonPage,
IonTitle,
IonToolbar
} from '@ionic/vue';

import { MapView, Marker, MapViewOptions } from '@mkgeeklab/googlemaps-core-vue';
import { reactive, ref } from 'vue';

const mapViewOptions = ref<MapViewOptions>({
  camera: {
    zoom: 12,
    target: {
      lat: 37,
      lng: 138
    }
  },
  mapType: 'roadmap'
});

const markerProps = ref({
  position: {
    lat: 0,
    lng: 0,
  },
  title: '',
})

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
        <MapView v-model="mapViewOptions">
          <Marker v-model="markerProps">
            bbb
          </Marker>
        </MapView>


        <ion-card>
          <ion-card-header>
            <ion-card-title>Marker</ion-card-title>
          </ion-card-header>

          <ion-card-content>
            <select v-model="mapViewOptions.mapType">
              <option value="roadmap">Roadmap</option>
              <option value="satellite">Satellite</option>
            </select>
            <ul>
              <li>lat: <input type="range" v-model="markerProps.position.lat" min="-90" max="90" /></li>
              <li>lng: <input type="range" v-model="markerProps.position.lng" min="-180" max="180"/></li>
              <li>title: {{ markerProps.title }}</li>
            </ul>
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
