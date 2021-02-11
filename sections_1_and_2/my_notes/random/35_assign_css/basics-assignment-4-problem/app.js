const app = Vue.createApp({
    data(){
        return {
            input: "",
            toggle: "",
            test: ""
        }
    },

    methods:{
        fetchInput(e){
            this.input = e.target.value;
            // console.log(arg);
        },

        dynamicBg(e){
            this.dynamic =  e.target.value;
           // console.log(this.dynamic);
        },

        dyna2(e){
            this.test = `background:${e.target.value}`;
        },

        toggleP(){
            if(this.toggle !== "hidden"){
                this.toggle = "hidden";
            } else {
                this.toggle = "visible";
            }
        }
    },

    computed:{
        dynamic(){
            // console.log(e.target.value);
            console.log(this.dynamic);
        }
    }
});

app.mount("#assignment")