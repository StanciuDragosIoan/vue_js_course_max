<template>
  <stored-resources :resources="storedResources"></stored-resources>
</template>
<script>
import StoredResources from './components/learning-resources/StoredResources.vue';
export default {
  components: {
    StoredResources
  },
  data() {
    return {
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The official vuejs documentation',
          link: 'https://vuejs.org'
        },

        {
          id: 'google',
          title: 'Google is your friend',
          description: 'It is very important to learn how to google stuff',
          link: 'https://google.com'
        }
      ]
    };
  }
};
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>
