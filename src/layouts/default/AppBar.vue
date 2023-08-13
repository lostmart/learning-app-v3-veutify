<script setup>
import { useScoreStore } from "../../stores/ScoreStore.js";

const userScore = useScoreStore();

console.log(userScore.name);
</script>

<template>
  <v-app-bar>
    <v-app-bar-title> Hello {{ userScore.name }} </v-app-bar-title>
    <div class="score">{{ userScore.score }} / 10</div>
  </v-app-bar>
</template>

<style scoped>
.score {
  margin-inline-end: 16px;
}
</style>
