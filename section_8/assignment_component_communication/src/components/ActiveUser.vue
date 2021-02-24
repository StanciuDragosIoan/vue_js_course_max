<template>
  <p>Active user here</p>
  <h2>{{ user }}</h2>
  <h3>{{ ageProp }}</h3>
</template>
<script>
export default {
  props: {
    user: {
      type: String,
      default: "",
    },

    ageProp: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      userName: "Dragos",
      age: 29,
    };
  },

  emits: ["dummy-user"],

  mounted() {
    this.$emit("dummy-user", this.userName, this.age);
  },
};
</script>
