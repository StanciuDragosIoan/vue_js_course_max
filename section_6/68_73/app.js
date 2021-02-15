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
    };
  },
});

//create component (note name must be hyphenated)

//2nd arg is a config object (components are like sub-apps of the main app)
app.component("friend-contact", {
  template: `
    <li>
      <h2>{{friend.name}}</h2>
      <button @click="toggleDetails">
        {{
          detailsAreVisible ? 'Hide' : 'Show'
        }}
      </button>
      <ul v-if="detailsAreVisible">
        <li><strong>Phone:</strong>{{friend.phone}}</li>
        <li><strong>Email:</strong>{{friend.email }}</li>
      </ul>
    </li>
  `,
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "manuel",
        name: "Manuel Lorenz",
        phone: "12345 555 555",
        email: "manuel@localhost.com",
      },
    };
  },

  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});

app.mount("#app");
