import styled from "styled-components";




export const Container = styled.div`
  grid-area: MH;
 

    .menu-geral{
        background: #d3d3d3;
        border-bottom:3px solid #FF4500;
        background: #fff;
  z-index: 90;
  height: 70px;

  position: fixed;
width: 100%;
    }

*{
    margin: 0;
    padding: 0;
}

    border-bottom: 2px #2b2f41;
     .name
     {
        align-items: center;
        justify-content: center;
        text-align: center;
        float: left;
        padding: 10px;
        font-size: 24px;
        color: rgba(55, 55, 55, 0.75);

        

     }

     .name strong{

        color: red;
     }
    
     .menu{
    
       float: right;
       z-index: 30;
        right: 0;
     }
    
    .menu ul {
        margin-right: 30px;
        list-style: none;
        text-align: center;
       align-items: center;
       justify-content: center;
       right: 0;

      }
      .menu ul li {
       display: flex;
        right: 10px;
      float: left;
      padding: 19px;
      text-align: center;
       align-items: center;
       justify-content: end;
        }


      .menu ul li a{
        color: rgba(55, 55, 55, 0.75);
        font-weight: 500;

      font-size: 23px;
      cursor: pointer;
      flex-direction: row;
}

.menu ul li a:hover{
    color: #FF4500;
    border-bottom: 4px solid #FF4500;
    padding-bottom: 10px;
    margin-top: -3px;
}



    `;

