import { defineStore } from "pinia";

export const useScoreStore = defineStore("scoreStore", {
  state: () => ({
    score: 0,
    name: "User one", // this could be in its own store, really
  }),
});
