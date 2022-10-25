import React from "react";



import { Container }  from './styles';


  
  const Serviço: React.FC = () => {


return (

    <Container>

   <div className="titulo_servico">
    <h1 className="titulo_servico1">Alguns dos principais serviços</h1>
  </div>
 <div className="container">
  
  <div className="card">
    <div className="card-header">
      <img src="capa2.jpeg" alt="rover" />
    </div>
    <div className="card-body">
      <span className="tag tag-teal">Solicitar orçamento</span>
      <h4>
     INSTALAÇÃO DE PADRÃO
      </h4>
      <p>
      Instalação completo de na sua residência, com implemetaçao de fios na sua casa Instalação completo de na sua residência, com implemetaçao de fios na sua casa
      </p>
      
    </div>
  </div>
  <div className="card">
    <div className="card-header">
    <img src="capa2.jpeg"  alt="ballons" />
    </div>
    <div className="card-body">
    <span className="tag tag-teal">Solicitar orçamento</span>
      <h4>
    INSTALAÇÃO DE TOMADAS
      </h4>
      <p>
      Instalação completo de na sua residência, com implemetaçao de fios na sua casa Instalação completo de na sua residência, com implemetaçao de fios na sua casa
      </p>
    
    </div>
  </div>
  <div className="card">
    <div className="card-header">
    <img src="capa2.jpeg"  alt="city" />
    </div>
    <div className="card-body">
    <span className="tag tag-teal">Solicitar orçamento</span>
      <h4>
    FIAÇÃO COMPLETA
      </h4>
      <p>
       Instalação completo de na sua residência, com implemetaçao de fios na sua casa
       Instalação completo de na sua residência, com implemetaçao de fios na sua casa
      </p>
     

 
   
    </div>
  </div>
  </div>
    </Container>
)




}

export default Serviço;