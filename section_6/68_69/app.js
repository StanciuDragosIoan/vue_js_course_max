const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "12345 555 555",
          email: "manuel@localhost.com",
        },

        {
          id: "julie",
          name: "Julie Jones",
          phone: "12345 666 666",
          email: "julie@localhost.com",
        },
      ],

      isVisible: false,
    };
  },

  methods: {
    toggleDetails() {
      this.isVisible = !this.isVisible;
    },
  },
});

app.mount("#app");
