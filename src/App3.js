import React from 'react'

const App3 = () => {
 const [carrinho, setCarrinho] = React.useState(0)
const [notificacao, setNotificacao] = React.useState(null)
const timeoutRef = React.useRef();


function handleClick(){
setCarrinho(carrinho + 1);
setNotificacao('Item adicionado ao carrinho')
timeoutRef.current = setTimeout(()=>{
  setNotificacao(null);
}, 2000);
console.log(timeoutRef)
}

return (
    <div>
      <h1>Carrinho - useRef</h1>
      <p>{notificacao}</p>
      <button onClick={handleClick}>Comprar {carrinho}</button>
    </div>
  )
}

export default App3
