//instantiate vue app (note the configuration object)
const app = Vue.createApp({

    //data configuration (it is a function)
    data() {
        return {
            goal1: "Finish course"
        }
    }
});

//mount app in the dom
app.mount("#user-goal")

