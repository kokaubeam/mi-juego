import React, { useState } from 'react'
import MiJuego from './lib/MiJuego'
import AddPlayerForm from './components/AddPlayerForm'
import Scoreboard from './components/Scoreboard'

const game = new MiJuego()

function App() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [scores, setScores] = useState([])

  function updateScores() {
    setScores(
      game.players.map((player) => ({
        name: player.name,
        value: player.score,
      }))
    )
  }

  function addPlayer(name) {
    game.addPlayer(name)

    if (!isPlaying) {
      setIsPlaying(true)
    }

    updateScores()
  }

  function givePoints() {
    game.giveARandomPlayerPoints()
    updateScores()
  }

  return (
    <div>
      <h1>
        Mi Juego{' '}
        <span role='img' aria-label='dice'>
          🎲
        </span>
      </h1>

      <AddPlayerForm onSubmit={addPlayer} />

      <Scoreboard
        scores={scores}
        style={{
          margin: '8px 0',
        }}
      />

      {isPlaying && (
        <button onClick={givePoints}>Randomly Award Points!</button>
      )}
    </div>
  )
}

export default App
