<template>
  <p>User data here</p>
  <label for="username">UserName:</label>
  <input @change="getUserInput" type="text" />
  <br />
  <label for="age">Age</label>
  <input @change="getAgeInput" type="number" />
  <br />
  <button @click="submitUserInfo">Submit</button>
</template>
<script>
export default {
  data() {
    return {
      userInput: "",
      ageInput: 0,
    };
  },

  emits: ["set-new-user"],

  methods: {
    getUserInput(e) {
      this.userInput = e.target.value;
    },

    getAgeInput(e) {
      this.ageInput = parseInt(e.target.value);
    },

    submitUserInfo() {
      this.$emit("set-new-user", this.userInput, this.ageInput);
    },
  },
};
</script>
