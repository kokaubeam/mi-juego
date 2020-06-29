import React from 'react'
import PropTypes from 'prop-types'

const playerColors = [
  '#FF0000',
  '#3399FF',
  '#FFCC66',
  '#FF99FF',
  '#66CC33',
  '#FF9900',
  '#33CCCC',
  '#9900CC',
]

function Scoreboard({ scores, style, ...props }) {
  const topScore = scores.reduce((topScore, { value: score }) => {
    if (score > topScore) {
      return score
    }

    return topScore
  }, 0)

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        ...style,
      }}
      {...props}
    >
      {scores.map(({ name, value: score }, index) => (
        <div
          key={index}
          style={{
            margin: '8px',
            padding: '8px',
            width: '128px',
            height: '128px',
            background: playerColors[index % playerColors.length],
            color: 'white',
          }}
        >
          <div>
            {score > 0 && score === topScore && (
              <span role='img' aria-label='Top Score'>
                🏅
              </span>
            )}
            {name}
          </div>
          <div>Score: {score}</div>
        </div>
      ))}
    </div>
  )
}

Scoreboard.propTypes = {
  scores: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.number,
    })
  ),
}

export default Scoreboard
