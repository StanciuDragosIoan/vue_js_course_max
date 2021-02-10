const app = Vue.createApp({
  data() {
    return { inputVal: "", goals: [],};
  },

  //methods
  methods: {
    addGoal() {
      this.goals.push(this.inputVal);
    }
  }
});

app.mount('#user-goals');
