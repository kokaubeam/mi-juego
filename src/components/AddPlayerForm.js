import React, { useState } from 'react'

function AddPlayerForm({ onSubmit, ...props }) {
  const [inputPlayerName, setInputPlayerName] = useState('')

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        onSubmit(inputPlayerName)
        setInputPlayerName('')
      }}
      {...props}
    >
      <label>
        Name
        <input
          type='text'
          value={inputPlayerName}
          onChange={(event) => setInputPlayerName(event.target.value)}
        />
      </label>

      <button>Add Player</button>
    </form>
  )
}

export default AddPlayerForm
