const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() { 
      this.message = this.$refs.userText.value;
      console.log(this.$refs.userText);
      console.dir(this.$refs.userText);
    },
  },

  //lifecycle methods
  beforeCreate() {
    console.log('before create');
    //send http request/ set timer/ etc..
  },

  created() {
    console.log("app created but nothing mounted to DOM");
  },

  beforeMount() {
    console.log("before mount");
  },

  mounted() {
    console.log("mounted..");
  },

  beforeUpdate() {+
    console.log("before update no changes on screen");
  },

  updated() {
    console.log("updated and on the screen..");
  },

  beforeUnmount() {
    console.log("before unmount");
  },

  unmounted() {
    console.log("unmounted");
  }
});

app.mount('#app');
setTimeout(()=>{
  app.unmount("#app");  
},1);

const app2 = Vue.createApp({
  template: `
      <p>{{favMeal}}</p>
  
  `,
  data(){
    return {
      favMeal: 'Pizza'
    }
  }
});

app2.mount("#app2");
