<template>
  <h1>App here</h1>
  <active-user
    :user="this.userData.name"
    :ageProp="this.userData.age"
    @dummy-user="grabDummyUser"
  ></active-user>
  <user-data @set-new-user="grabFromForm"></user-data>
</template>
<script>
export default {
  data() {
    return {
      userData: {
        name: "",
        age: 0,
      },

      userData2: {
        name: "",
        age: 0,
      },
    };
  },
  methods: {
    grabDummyUser(user, age) {
      this.userData.name = user;
      this.userData.age = age;
    },

    grabFromForm(user, age) {
      this.userData.name = user.toString();
      this.userData.age = parseInt(age);
      console.log(user);
      console.log(age);
    },
  },
};
</script>
