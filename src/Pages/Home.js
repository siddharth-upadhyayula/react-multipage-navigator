import React from 'react'
import { useParams } from 'react-router-dom'

function Home() {
    let {name} = useParams();
  return (
    <div>This is the Homepage. Welcome {name}!</div>
  )
}

export default Home