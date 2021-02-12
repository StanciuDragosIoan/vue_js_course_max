function getRandomValue(min,max){
    return Math.floor(Math.random() * (max-min)) + min;
}
const app = Vue.createApp({
    data (){
        return{
            playerHealth: 100,
            monsterHealth: 100,
        }
    },

    computed: {
        monsterBarStyles(){
            return {width: this.monsterHealth+'%'}
        },
        playerBarStyles(){
            return {width: this.playerHealth+'%'}
        },

    },

    methods: {
        attackMonster() {
           const atk =  getRandomValue(5, 12);
           this.monsterHealth -= atk;
           this.attackPlayer();

           console.log(this.playerHealth);
           console.log(this.monsterHealth);
        },

        attackPlayer() {
            const atk =  getRandomValue(8, 15);
            this.playerHealth -= atk;    
        }
    }
});

app.mount("#game")