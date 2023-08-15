<script setup>
const props = defineProps({
  correct: Boolean,
});
</script>

<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-center fill-height">
      <h2 v-if="correct" class="text-h2 font-weight-bold">Muy bien !!</h2>
      <h2 v-else class="text-h2 font-weight-bold">Nooo !!</h2>
    </v-responsive>
  </v-container>
</template>
