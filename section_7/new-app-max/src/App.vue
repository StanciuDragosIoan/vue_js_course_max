<template>
  <section>
    <header><h1>My friends</h1></header>
    <ul>
      <friend-contact></friend-contact>
      <friend-contact></friend-contact>
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
