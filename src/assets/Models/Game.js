export default class Game {
    constructor(name = "Anonyme", factor, questionNumber, level) {
        this.key = Date.now() * Math.random() * 10
        this.name = name,
        this.factor = Number.parseInt(factor), 
        this.questionNumber = questionNumber,
        this.level = level,
        this.score = 0
    }
    
    getGameDetails() {
        console.log(this.name, this.factor, this.questionNumber, this.level);
    }
    
}