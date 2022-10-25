import styled from "styled-components";

export const Container = styled.div`
.formulario { 

max-width:480px; 
margin:50px auto; 
border-radius: 20px;
}

.campo {
    border-radius: 20px;
color: #aca4a4;
font-size: 16px;
border-radius: 3px;
line-height: 20px;
background-color: transparent;
border: 2px solid #D2D2D2;
transition: all 0.3s;
padding: 11px;
margin-bottom: 15px;
width: 100%;
box-sizing: border-box;
outline: 0;

}

.campo:focus { 
    border-radius: 20px;
border: 2px solid #10ADDD; 
color: #10ADDD;
}

textarea {

height: 150px;
line-height: 150%;
resize:vertical;

}

.botao {

    border-radius: 20px;
width: 100%;
background:#10ADDD;
color: #ffffff;
border-radius:5px;
border:0;
cursor:pointer;
font-size:22px;
padding-top:10px;
padding-bottom:10px;
transition: all 0.3s;
margin-top:-4px;
font-weight:700;

}
.titulo_servico h1{
    text-align: center;
    color:#FF4500;
font-size: 29px;
}
.botao:hover { background:#414141; }
`;

