const app = Vue.createApp({
  data() {
    return { inputVal: "", goals: [],};
  },

  //methods
  methods: {
    addGoal() {
      this.goals.push(this.inputVal);
    },

    removeGoal(idx) {
      this.goals.splice(idx, 1);
    }
  }
});

app.mount('#user-goals');
