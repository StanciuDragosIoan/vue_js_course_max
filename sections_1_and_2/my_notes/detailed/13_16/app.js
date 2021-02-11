//instantiate vue app (note the configuration object)
const app = Vue.createApp({

    //data configuration (it is a function)
    data() {
        return {
            goal1: "Finish course",
            vueLink: "https://vuejs.org"
        }
    },

    //methods (allows to define methods) this is an object
    methods: {
        outputGoal() {
            const rand = Math.random();
            if(rand < 0.5) {
                return 'Learn vue';
            } else {
                return 'Master vue';
            }
        }
    }
});

//mount app in the dom
app.mount("#user-goal")

