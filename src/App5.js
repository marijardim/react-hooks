import React from 'react'
import ProdutoContext from './ProdutoContext'
import UserContext from './UserContext'

const App5 = () => {
  return (
    <UserContext.Provider value={{nome: 'Mariane'}}> {/* Este objeto agora pode ser acessado*/}
      <div> {/*  Esta div possui acesso ao Contexto do UserContext */}
        <ProdutoContext /> {/*  Este componente possui acesso ao Contexto do UserContext */}
      </div>
    </UserContext.Provider>
  )
}

export default App5
