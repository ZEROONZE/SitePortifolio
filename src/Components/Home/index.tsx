import React from "react";



import { Container }  from './styles';


  
  const Home: React.FC = () => {


return (

    <Container>
       <div className="geral">
     <div className="sobre">
        <div className="sobre_1">
          <img className="sobre_2" src="sobre3.jpg" alt="Sobre nos"/>
        </div>
        <div className="sobre_text">
          <h1>Sobre nós</h1>
          <p>
          A Master House é uma rede nacional de franquias especializadas em serviços de reformas e manutenção: marido de aluguel, pedreiro, pintor, eletricista, encanador, gesseiro e mais. Seja muito bem-vindo(a)!

          Nós proporcionaremos a você uma experiência profissional única, com atendimento diferenciado. Nossos profissionais superqualificados são identificados com crachá, código de ordem de serviço, horário marcado e histórico verificado pela Master House, prezando pela sua segurança.

Nossa pontualidade é única e oferecemos garantia de todos os serviços prestados, com impecável limpeza durante e ao fim do trabalho.

Nossa meta, trabalho e prazer é manter o índice de satisfação de 100% dos clientes.


          </p>
        </div>  


     </div>
  
     </div>
    </Container>
)




}

export default Home;