import React from "react";
import { Container } from "./styles";





const Menu: React.FC = () => {


return (
    <Container>
        <div className="menu-geral">
        <div className="name">
            <h1 className="name">Cortez<strong>Ligth</strong></h1>
        </div>


        <div className="menu">
            <ul>
                <li><a>Home</a></li>
                <li><a>Serviços</a></li>
                <li><a>Galeria</a></li>
                <li><a>Contato</a></li>
            </ul>
        </div>
        </div>
        </Container>
)




}

export default Menu;