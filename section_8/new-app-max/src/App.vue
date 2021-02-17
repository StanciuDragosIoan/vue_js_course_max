<template>
  <section>
    <header><h1>My friends</h1></header>
    <ul>
      <friend-contact
        name="Manuel Lorenz"
        phone-number="555-555-5555"
        email-address="manuel@localhost.com"
      ></friend-contact>
      <friend-contact
        name="Julie Jones"
        phone-number="555-555-5555"
        email-address="julie@localhost.com"
      ></friend-contact>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Lawrence",
          phone: "555-5555-5555",
          email: "manuel@localhost.com",
        },

        {
          id: "julie",
          name: "Julie Lawrence",
          phone: "555-5555-5555",
          email: "julie@localhost.com",
        },
      ],
    };
  },
};
</script>
