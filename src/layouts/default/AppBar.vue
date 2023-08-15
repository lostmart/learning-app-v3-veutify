<script setup>
import { useScoreStore } from "../../stores/ScoreStore.js";

const userScore = useScoreStore();
</script>

<template>
  <v-app-bar>
    <v-container class="d-flex">
      <v-app-bar-title> Hello {{ userScore.name }} </v-app-bar-title>
      <div class="score">{{ userScore.score }} / 10</div>
    </v-container>
  </v-app-bar>
</template>

<style scoped>
.d-flex {
  max-width: 580px;
}
.score {
  margin-inline-end: 16px;
}
</style>
