function getRandomValue(min,max){
    return Math.floor(Math.random() * (max-min)) + min;
}
const app = Vue.createApp({
    data (){
        return{
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0,
            winner: null
        }
    },

    computed: {
        monsterBarStyles(){
            if(this.monsterHealth < 0){
                return {width: "0%"};
            }
            return {width: this.monsterHealth+'%'}
        },
        playerBarStyles(){
            if(this.playerHealth < 0){
                return {width: "0%"};
            }
            return {width: this.playerHealth+'%'}
        },

        mayUseSpecialAtk(){
            return this.currentRound % 3 !== 0;
        },
    },

    watch: {
        playerHealth(value) {
            if(value <= 0 && this.monsterHealth <= 0 ){
                //draw
                this.winner = 'draw';
            } else if(value <= 0){
                //player lost
                this.winner = 'monster';
            }
        },
        monsterHealth(value) {
            if(value <= 0 && this.playerHealth <= 0){
                //draw
                this.winner = 'draw';
            } else if (value <= 0) {
                //monster lost
                this.winner = 'player';
            }
        }
    },

    methods: {
        startGame() {
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.winner = null;
            this.currentRound = 0;
        },
        attackMonster() {
           this.currentRound ++;
           const atk =  getRandomValue(5, 12);
           this.monsterHealth -= atk;
           this.attackPlayer();

           console.log(this.playerHealth);
           console.log(this.monsterHealth);
        },

        attackPlayer() {
            const atk =  getRandomValue(8, 15);
            this.playerHealth -= atk;    
        },

        specialAttackMonster() {
            this.currentRound ++;
            const atk =  getRandomValue(10, 25);
            this.monsterHealth -= atk;
            this.attackPlayer();
        },

        healPlayer() {
            this.currentRound ++;
            const heal = getRandomValue(8,20);
            //check so can t go above 100
            if(this.playerHealth + heal > 100 ){
                this.playerHealth = 100;
            } else {
                this.playerHealth += heal;
            }
            this.attackPlayer();
        },

        surrender() {
            this.winner = 'monster';
        }
    }
});

app.mount("#game")