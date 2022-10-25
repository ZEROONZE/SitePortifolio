import React from "react";



import { Container }  from './styles';


  
  const Contato: React.FC = () => {


return (

    <Container>
        <div className="titulo_servico">
    <h1 className="titulo_servico1">Solicitar orçamento</h1>
  </div>
       <form className="formulario" method="post" action="#">
         <input type="text" name="nome" className="campo" placeholder="Nome" />   
         <input type="text" name="number" className="campo" placeholder="Numero" />
         <textarea name="mensagem" className="campo" placeholder="Mensagem"></textarea>
         <button type="submit" className="botao"> Enviar </button>
                
    </form>
  

    </Container>
)




}

export default Contato;