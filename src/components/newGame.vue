<template>
    <div>
        <h1>Let's start {{ game.name }} </h1>
        <div v-for="(equation, index) in equations" :key="index">
            <b>{{ equation.factor + " " + equation.operation + " " + index }}</b>
            <input type="text" 
                v-model="equation.responce" 
                :disabled="done"
                :class="{ 
                    'wrong': done && equation.result != equation.responce, 
                    'good': done && equation.result == equation.responce }">
        </div>
        <button @click="check()"
            :disabled="done">Done !</button>
        <div class="score" v-if="done">
            <b>Your score is {{ score / game.questionNumber * 100 + " / 100" }}</b>
        </div>
    </div>
</template>

<script>

export default {
    name: 'newGame',
    props: ['game'],
    data() {
        return {
            equations: [],
            done: false,
            score: 0
        }
    },
    methods: {
        check() {
            this.done = true;
            this.score = this.equations.filter(equation => equation.result == equation.responce).length
        }
    },
    created() {
        for (let i = 0; i < Number.parseInt(this.game.questionNumber); i++) {
            let result = null, operation = "+";
            switch(this.game.level) {
                case "1":
                    result = this.game.factor + i;
                    break;
                case "2":
                    result = this.game.factor - i;
                    operation = "-";
                    break;
                case "3":
                    result = this.game.factor * i;
                    operation = "*";
                    break;                
            }
            this.equations.push(
                {
                    factor: this.game.factor,
                    operation: operation,
                    result: result,
                    responce: null
                }
            )
        }
    }
}

</script>
<style scoped>
.wrong {
    border: solid red 1px;
}
.good {
    border: solid green 1px;
}
</style>

