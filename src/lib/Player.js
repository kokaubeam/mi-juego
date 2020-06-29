export default class Player {
  constructor(name) {
    this.name = name
    this.score = 0
  }

  adjustScore(value) {
    this.score += value
  }
}
