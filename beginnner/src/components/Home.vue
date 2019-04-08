<template>
  <div>
      <div>UserId = {{ userid }}</div>
      <div>PId = {{ pid }}</div>
  </div>
</template>

<script>
export default {
  name: "Home",
  computed: {
    userid() {
      return this.$route.query.userid;
    },

    pid() {
      return this.$route.params.pid;
    }
  }
};
</script>