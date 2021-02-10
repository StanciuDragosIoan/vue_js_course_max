Vue.createApp({
    data() {
      return {
        name: 'Dragos',
        age: 29,
        enteredValue: '',
        // rand: this.genRand(),
        linkImg: 'https://c4.wallpaperflare.com/wallpaper/967/881/121/anime-vocaloid-yowane-haku-wallpaper-preview.jpg',
        output1: "OUTPUT",
        output2: "OUTPUT",
      };
    },
    methods: {
      showAlert() {
    //    return Math.random();
    alert("test");
      },

      setOutput(event){
          

         
          this.output1 = event.target.value;
        
      },
      setOutput2(e){
        //   console.log('test');
        this.output2 = e.target.value;
      }

      
    }
  }).mount('#assignment');