<template>
  <div class="child childB">
    <h1>Score: {{ score }}</h1>
    <button @click="changeScore">Change Score</button>
  </div>
</template>
<script>
export default {
  name: "ChildB",
  computed: {
    score() {
      return this.$store.getters.score;
    }
  },
  methods: {
    changeScore(){
      this.$store.dispatch('incrementScore', 3000);
    }
  },
};
</script>