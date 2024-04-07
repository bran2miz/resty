import React from 'react'

const History = ({history}) => {
    console.log(history)
  return (
    <ul>
        {history.map((entry, idx)=> (<li key={idx}>{entry.method}:{entry.url}</li>))}
    </ul>
  )
}

export default History;