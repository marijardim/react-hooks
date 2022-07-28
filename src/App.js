import React from "react";
import Produto from "./Produto";
import ProdutoContext from "./ProdutoContext";
import UserContext from "./UserContext";


function App() {
  
  const [produto, setProduto] = React.useState(null);
  
 console.log(UserContext)


React.useEffect(()=>{
const getLocal = window.localStorage.getItem('produto');
if(getLocal !== null) setProduto(getLocal)
}, []);

React.useEffect(()=>{
 if(produto !== null) window.localStorage.setItem('produto', produto) //se produto não for mais null, será setado no localStorage.
}, [produto]); //Colocar o hook produto na array de dependências, assim, toda vez que ele sofrer alteração, o efeito será ativado.


function handleClick(e){
  setProduto(e.target.innerText);
}
  return (
    <div>
      <h1>Preferência: {produto}</h1> 
      <button onClick={handleClick}>Smartphone</button>
      <button onClick={handleClick}>Notebook</button>
      
      {produto && <Produto produto={produto} setProduto={setProduto}/>}
      <UserContext.Provider>
        <ProdutoContext />
      </UserContext.Provider>
    </div>
  );
}

export default App;
