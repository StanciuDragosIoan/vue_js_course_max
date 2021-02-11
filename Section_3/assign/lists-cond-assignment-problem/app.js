const app = Vue.createApp({

    data(){
        return {
            test: "123",    
            tasks: [],
            taskInput: '',
            label: "hide"
        }
    },

    methods: {
        addTask(e){
            if(this.taskInput !== ""){
                this.tasks.push(this.taskInput);
                
            } else {
                alert("please type something");
            }
        },

        grabInput(e){
            this.taskInput = e.target.value;
        },

        toggleList(){
            console.log("toggle");
            if(this.label==="hide"){
                this.label = "show";
            }else {
                this.label="hide";
            }
            
        }
    }

});

app.mount("#assignment");