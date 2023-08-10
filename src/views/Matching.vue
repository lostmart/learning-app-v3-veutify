<script setup></script>

<template>
  <main class="d-flex justify-center">
    <v-card class="w-100" max-width="580">
      <v-card-title class="text-h6 text-md-h5 text-lg-h4 text-center mt-5 mb-2"
        >Dónde has personas?</v-card-title
      >
      <v-card-text>
        <v-img
          aspect-ratio="16/9"
          max-width="480"
          class="mx-auto cover-img"
          cover
          lazy-src="https://picsum.photos/id/11/100/60"
          src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
        ></v-img>
      </v-card-text>
      <v-card-actions class="d-flex flex-column">
        <v-btn
          v-for="n in 4"
          rounded="sm"
          class="text-button elevation-5 mx-auto"
          color="#4B80DD"
          size="small"
          variant="flat"
        >
          Button
        </v-btn>
        <v-divider class="mt-1"></v-divider>
        <v-btn
          rounded="sm"
          class="text-button elevation-5 mx-auto mb-5"
          color="#3B7247"
          size="small"
          variant="flat"
        >
          Submit
        </v-btn>
      </v-card-actions>
    </v-card>
  </main>
</template>

<style scoped>
button {
  color: white;
  width: 100%;
  max-width: 480px;
}
.v-card-actions {
  gap: 0.8em;
}

.cover-img {
  border-radius: 2px;
}
</style>
