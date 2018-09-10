<template>
  <div class="content">
    <label for="name">Name: </label>
    <input type="text" placeholder="Name" name="name" v-model="name"><br>
    <label for="factor">Factor: </label>
    <input type="text" placeholder="Factor" name="factor" v-model="factor"><br>
    <label for="questionNumber">Nomber of question: </label>
    <input type="text" placeholder="Nomber of questions" name="questionNumber" v-model="questionNumber"><br>
    <label for="level">level</label>
    <select name="level" v-model="level">
      <option value="1">Beginner</option>  
      <option value="2">Intermidiate</option>  
      <option value="3">Expert</option>  
    </select><br>
    <button :disabled="!canStart" @click="startGame()">Start</button>
    <newGame v-if="isNewGame" :key="game.key" :game="game"/>
  </div>
</template>

<script>
import newGame from './newGame';
import Game from '../assets/Models/Game.js'

export default {
  name: 'MathGame',
  components: { newGame },
  data () {
    return {
      game: {},
      name: "",
      factor: null,
      questionNumber: null,
      level: 1,
      isNewGame: false
    }
  },
  computed: {
    canStart() { return this.questionNumber != null && this.factor != null; }
  }, 
  methods: {
    startGame() {
      this.game = new Game(
        this.name,
        this.factor,
        this.questionNumber,
        this.level
      );
      this.isNewGame = true;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
