import React from 'react'

const Produto = ({produto}) => {
  const [dados, setDados] = React.useState(null);

    React.useEffect(() =>{
      if(produto !== null)
      fetch(`https://ranekapi.origamid.dev/json/api/produto/${produto}`) 
  .then(r => r.json())
  .then(rjson => setDados(rjson));

    }, [produto])
  
  
  if (dados !== null)
  return (
   <div>
      <h1>{dados.nome}</h1>
      <p>R${dados.preco}</p>
    </div>
   
  )
}

export default Produto
