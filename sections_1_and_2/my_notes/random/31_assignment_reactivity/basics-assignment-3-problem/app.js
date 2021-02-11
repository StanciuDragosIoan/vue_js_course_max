Vue.createApp({
    data() {
        return {
            result: 0,
            placeholder: 'Not there yet'
        }
    },

    computed:{
        test(){
            if(this.result < 37){
                return "Not there yet"
            } else if(this.result === 37) {
                return this.result;
            } else {
                return "Too much"
            }
        
        }
    },

    methods: {
         

        addFive(){
            this.result += 5;
            console.log(this.result);
            if(this.result > 37) {
                this.placeholder = "Too much";
            }
        },

        addOne() {
            this.result += 1;

            console.log(this.result);
            if(this.result > 37) {
                this.placeholder = "Too much";
            }
        }
    },

    watch: {
        placeholder(){
            console.log(this.placeholder);
        },

       
        test() {
            const that = this;
            setTimeout(()=>{
                that.result = 0;
            }, 5000);
        }
    }
   
  }).mount('#assignment');