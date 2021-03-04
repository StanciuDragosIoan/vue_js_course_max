<template>
  <h2>Managed goals</h2>
  <input type="text" ref="goal" />
  <button @click="setGoal">Set goal</button>
  <teleport to="body">
    <Error v-if="inputIsInvalid"
      ><h2>Input is invalid!</h2>
      <p>Please enter something</p>
      <button @click="confirmError">Ok</button>
    </Error>
  </teleport>
</template>
<script>
import Error from "./Error.vue";
export default {
  components: {
    Error,
  },
  data() {
    return {
      inputIsInvalid: false,
    };
  },
  methods: {
    setGoal() {
      const enteredValue = this.$refs.goal.value;
      if (enteredValue === "") {
        this.inputIsInvalid = true;
        // alert("input must not be empty");
      }
    },

    confirmError() {
      this.inputIsInvalid = false;
    },
  },
};
</script>
