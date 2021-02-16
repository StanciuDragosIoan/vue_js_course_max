<template>
  <section>
    <h2>My friends</h2>
    <ul>
      <li></li>
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
