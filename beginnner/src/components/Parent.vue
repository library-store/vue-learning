<template>
  <div id="parent">
    <ChildA/>
    <ChildB/>
    <h1>Score:{{ score }}</h1>
  </div>
</template>
<script>
import ChildA from "./ChildA.vue";
import ChildB from "./ChildB.vue";

export default {
  name: "Parent",
  components: {
    ChildA,
    ChildB
  },
  computed: {
    score() {
      return this.$store.getters.score
    }
  }
};
</script>
