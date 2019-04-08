<template>
  <div class="child childA">
    <h1>Score: {{ score }}</h1>
    <button @click="changeScore">Change Score</button>
  </div>
</template>
<script>
export default {
  name: "ChildA",
  computed: {
    score() {
      return this.$store.getters.score;
    }
  },
  methods: {
    changeScore(){
      this.$store.commit('increment', 5)
    }
  },
};
</script>