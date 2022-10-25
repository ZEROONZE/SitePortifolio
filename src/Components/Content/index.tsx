import React from "react";
import Contato from "../Contato";
import Footer from "../Footer";
import Home from "../Home";
import Serviço from "../Serviços";
import Slides from "../Slides";



import { Container }  from './styles';


  
  const Content: React.FC = () => {


return (

    <Container>
       
      <Slides />
      <Home />
  <Serviço />
      <Contato />
      <Footer />
    </Container>

)




}

export default Content;