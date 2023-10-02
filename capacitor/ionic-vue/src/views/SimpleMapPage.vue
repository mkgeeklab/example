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
        <MapView ></MapView>
      </div>

    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { MapView } from '@mkgeeklab/googlemaps-core-vue';

</script>

<style scoped>
#container {
  width: 100%;
  height: 100%;
  flex: auto 1 1;
}
mkg-mapview {
  width: 100%;
  height: 100%;
  flex: auto 1 1;
}
</style>
