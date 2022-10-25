import styled from "styled-components";

export const Container = styled.div`
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
* {
  box-sizing: border-box;
}
body {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  background-color: #f7f8fc;
  font-family: "Roboto", sans-serif;
  color: #10182f;
}
.container {
  display: flex;
  width: 1040px;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding: 30px;
  text-align: center;
  align-items: center;
  margin: auto;

}
.card {
  margin: 10px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  width: 300px;
  cursor: pointer;
}

.card:hover{
    box-shadow: 0 0px 0px rgba(0, 0, 0, 0.2);
 
}
.card-header img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.card-header{
    padding: 2px;
}
.card-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  min-height: 250px;
  text-align: center;
  align-items: center;

}
.card-body h4{
    color:#FF4500;
font-size: 19px;
padding: 3px;
padding: 10px 0px;
text-align: center;
}

.tag {
  background: #cccccc;
  border-radius: 50px;
  font-size: 12px;
  font-weight: 500;
  margin: 0;
  color: #fff;
  padding: 2px 10px;
  text-transform: uppercase;
  cursor: pointer;
  text-align: center;
}
.tag-teal {
  background-color: green;
}
.tag-purple {
  background-color: #5e76bf;
}
.tag-pink {
  background-color: #cd5b9f;
}

.card-body p {
  font-size: 19px;
  margin: 0 0 10px;
  color: #a9a9a9;
}
.titulo_servico h1{
    text-align: center;
    color:#FF4500;
font-size: 29px;
}
`;

