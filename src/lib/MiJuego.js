import Player from './Player'

export default class MiJuego {
  constructor() {
    this.players = []
  }

  addPlayer(name) {
    this.players.push(new Player(name))
  }

  giveARandomPlayerPoints() {
    if (this.players.length === 0) return

    const player = this.players[Math.floor(Math.random() * this.players.length)]

    player.adjustScore(10)
  }
}
