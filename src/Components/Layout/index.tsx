import React from "react";
import Content from "../Content";
import Home from "../Home";
import Menu from "../Menu";
import { Grid } from './styles';






  const Layout: React.FC = () => {


return (

    <Grid>
        <Menu />
    
       
            
        <Content/>
    
    </Grid>
)




}

export default Layout;