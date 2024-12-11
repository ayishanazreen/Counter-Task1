import React from 'react'

const Counter = ({count, increment, decrement}) => {
  return (
    <div>
      <h1>Counter</h1>
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  )
}

export default Counter
