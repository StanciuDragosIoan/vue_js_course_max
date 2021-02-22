<template>
  <section>
    <header><h1>My friends</h1></header>
    <new-friend @add-contact="addContact"></new-friend>
    <ul>
      <friend-contact
        v-for="friend in friends"
        :key="friend.id"
        :id="friend.id"
        :name="friend.name"
        :phone-number="friend.phone"
        :email-address="friend.email"
        :is-favourite="friend.isFavourite"
        @toggle-favourite="toggleFavouriteStatus"
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
          isFavourite: true,
        },

        {
          id: "julie",
          name: "Julie Lawrence",
          phone: "555-5555-5555",
          email: "julie@localhost.com",
          isFavourite: false,
        },
      ],
    };
  },
  methods: {
    toggleFavouriteStatus(id) {
      const identifiedFriend = this.friends.find((friend) => friend.id === id);
      identifiedFriend.isFavourite = !identifiedFriend.isFavourite;
    },

    addContact(name, phone, email) {
      const newFriend = {
        id: new Date().toISOString(),
        name,
        phone,
        email,
        isFavourite: false,
      };

      this.friends.push(newFriend);
    },
  },
};
</script>
