Vue.createApp({
    data() {
      return {
        name: 'Dragos',
        age: 29,
        enteredValue: '',
        rand: this.genRand(),
        linkImg: 'https://c4.wallpaperflare.com/wallpaper/967/881/121/anime-vocaloid-yowane-haku-wallpaper-preview.jpg',
        startVal: "someValHere"
      };
    },
    methods: {
      genRand() {
       return Math.random();
      }
    }
  }).mount('#assignment');