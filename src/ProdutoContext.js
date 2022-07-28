import React from 'react'
import UserContext from './UserContext'

const ProdutoContext = () => {
  const dados = React.useContext(UserContext); //O contexto deve estar dentro dos parenteses.
  // Agora a constante dados é nome: 'Mariane'. dados.nome = 'Mariane'
  
  
  return (
    <div>
      
    </div>
  )
}

export default ProdutoContext
