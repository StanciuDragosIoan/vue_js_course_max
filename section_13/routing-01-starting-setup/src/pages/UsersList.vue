<template>
  <button @click="confirmInput">Confirm</button>
  <button @click="saveChanges">Save Changes</button>
  <ul>
    <user-item
      v-for="user in users"
      :key="user.id"
      :name="user.fullName"
      :role="user.role"
    ></user-item>
  </ul>
</template>

<script>
import UserItem from '../components/users/UserItem.vue';

export default {
  components: {
    UserItem
  },
  data() {
    return {
      changesSaved: false
    };
  },
  inject: ['users'],
  methods: {
    confirmInput() {
      // do something
      // navigate away programatically
      this.$router.push('/teams');
    },

    saveChanges() {
      this.saveChanges = true;
    }
  },
  beforeRouteEnter(to, from, next) {
    console.log('usersList component beforeRouteEnter', next, to, from);
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log('UsersListComponent beforeRouteLeave', to, from, next);

    if (this.changesSaved === true) {
      next();
    } else {
      const userWantsToLeave = confirm('Are you sure?');
      next(userWantsToLeave);
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>
