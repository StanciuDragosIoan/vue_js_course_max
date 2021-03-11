<template>
  <base-card>
    <base-button
      @click="setSelectedTab('stored-resources')"
      :mode="storedResButtonBode"
      >Stored Resources</base-button
    >
    <base-button
      @click="setSelectedTab('add-resource')"
      :mode="addResButtonMode"
      >Add Resource</base-button
    >
  </base-card>
  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
</template>

<script>
import storedResources from './StoredResources.vue';
import AddResource from './AddResource.vue';

export default {
  components: {
    storedResources,
    AddResource
  },
  data() {
    return {
      selectedTab: 'stored-resources',
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
  },

  provide() {
    return {
      resources: this.storedResources,
      addResource: this.addResource,
      deleteResource: this.deleteResource
    };
  },

  computed: {
    storedResButtonBode() {
      return this.selectedTab === 'stored-resources' ? null : 'flat';
    },

    addResButtonMode() {
      return this.selectedTab === 'add-resource' ? null : 'flat';
    }
  },

  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },

    addResource(title, description, url) {
      const newResource = {
        id: new Date().toISOString(),
        title,
        description,
        link: url
      };

      this.storedResources.unshift(newResource);
      this.selectedTab = 'stored-resources';
    },

    deleteResource(resId) {
      const resIndex = this.storedResources.findIndex(res => res.id === resId);
      this.storedResources.splice(resIndex, 1);
    }
  }
};
</script>
