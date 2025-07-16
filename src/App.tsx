import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <h1 
    style={{ 
      display: "grid",
      placeItems: "center",
      fontSize: '16px'
    }}
    >
     Master Builder Facility      
    </h1>
  )
}

export default App
