import React from 'react'
import Card from './Card'

export default function Results({results}) {
  return (
    <div>
      {results.map((result, index) => (<Card key={index} result={result}/>))}
    </div>
  )
}
