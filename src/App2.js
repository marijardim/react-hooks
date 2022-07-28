import React from 'react'

const App2 = () => {
const [comentarios, setComentarios] = React.useState([])
const [input, setInput] = React.useState('')
const inputReferencia = React.useRef()

function handleClick(){
  setComentarios([...comentarios, input]);
  setInput('');
  inputReferencia.current.focus();
}

  return (
    <div>
<h1>Comentários: </h1>
    <ul>
      {comentarios.map((comentario, i) => <li key={i}>{comentario}</li>)}
          </ul>
          <input ref={inputReferencia} type='text' value={input} onChange={(e)=> setInput(e.target.value)}/>
          <button onClick={handleClick}>Enviar</button>
          </div>
  )
}

export default App2
