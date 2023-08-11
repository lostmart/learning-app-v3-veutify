<script setup>
import { ref } from "vue";

const selected = ref("");

/* exercise data  */
const exData = ref({
  options: ["el amor", "la ternura", "otras", "abejas"],
  correct: "el amor",
});

/*  methods  */

const handleOptions = (option) => {
  if (selected.value === option) {
    selected.value = "";
  } else {
    selected.value = option;
  }
  // console.log(selected.value);
};

const handleSubmit = () => {
  if (selected.value === exData.value.correct) {
    console.log("correcto !!!");
  } else {
    console.log("no correcto !!");
  }
};

// console.log(count.value.options)
</script>

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
          v-for="option in exData.options"
          rounded="sm"
          class="text-button elevation-5 mx-auto"
          :color="selected === option ? '#2e5496' : '#4B80DD'"
          size="small"
          variant="flat"
          :value="option"
          @click="() => handleOptions(option)"
        >
          {{ option }}
        </v-btn>
        <v-divider class="mt-1"></v-divider>
        <v-btn
          rounded="sm"
          class="text-button elevation-5 mx-auto mb-5"
          size="small"
          variant="flat"
          :color="selected ? '#3B7247' : 'grey'"
          :disabled="selected ? false : true"
          @click="handleSubmit"
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
