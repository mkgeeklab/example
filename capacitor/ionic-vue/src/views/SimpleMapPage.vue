<script setup lang="ts">
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { MapView } from '@mkgeeklab/googlemaps-core-vue';

const mapViewOptions = {
  camera: {
    zoom: 12,
    target: {
      lat: 37,
      lng: 138
    }
  },
  mapType: 'roadmap'
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
        <MapView v-bind="mapViewOptions"></MapView>
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
</style>
