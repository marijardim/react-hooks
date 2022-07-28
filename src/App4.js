import React from 'react'

const App4 = () => {
const [contar, setContar] = React.useState(0)


  return (
    <div>
      <h1>useMemo</h1>
      <button onClick={()=> setContar(contar + 1)}>{contar}</button>
    </div>
  )
}

export default App4
