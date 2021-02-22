<template>
  <form @submit.prevent="submitData" style="text-align:center; padding:1rem;">
    <div>
      <label>Name</label>
      <input v-model="enteredName" type="text" />
    </div>
    <div>
      <label>Phone</label>
      <input type="tel" v-model="enteredPhone" />
    </div>
    <div>
      <label>E-mail</label>
      <input type="email" v-model="enteredEmail" />
    </div>
    <div>
      <button>Add friend</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      enteredName: "",
      enteredPhone: "",
      enteredEmail: "",
    };
  },
  methods: {
    submitData() {
      this.$emit(
        "add-contact",
        this.enteredName,
        this.enteredPhone,
        this.enteredEmail
      );
    },
  },
  emits: ["add-contact"],
};
</script>
