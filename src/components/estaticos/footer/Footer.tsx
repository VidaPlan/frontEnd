import React from "react";
import { Grid, Link, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import "./Footer.css";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/TokensReducer";
import { GitHub, Instagram } from "@mui/icons-material";

function Footer(){
  const token = useSelector<TokenState, TokenState['token']>(
      (state)=>state.token
    );
  return (
      <>
    <div>
        <hr />
      <Grid className="caixa" item xs={12} >
        <Grid className="response">                 
      <Typography className="nomes">
          <h2 className="equipe"> Equipe </h2>
          <a href="https://linktr.ee/chrispcruz" target="_blank"> Christian Patrick </a><br />
          <a href="https://linktr.ee/Leonardoassis" target="_blank"> Leonardo Assis </a> <br />
          <a href="https://linktr.ee/marcelorazevedo" target="_blank"> Marcelo Azevedo </a> <br />  
          </Typography>                        
      <Typography className="nomes">
          <a href="https://linktr.ee/miguelrsa" target="_blank"> Miguel Rodrigues</a><br />
          <a href="https://linktr.ee/NickCavalcante" target="_blank"> Nick Cavalcante </a> <br />
          <a href="https://linktr.ee/OtavioMatheus" target="_blank"> Otavio Matheus </a> <br />
      </Typography>
      </Grid>

  <Grid item xs={3} >
    <Grid className="pc">
      <Typography>
          <h2> GitHub </h2>

          <a href="https://github.com/VidaPlan" target="_blank">
                        <GitHub className='redes'/>
                    </a>
      </Typography>
  
  <Grid item xs={2} >
      <Typography>
          <h2> Instagram </h2>

          <a href="https://www.instagram.com/projeto_vidaplan/" target="_blank">
                        <Instagram className='redes'/>
                    </a>
      </Typography>
  </Grid>
  </Grid>
  </Grid>

  </Grid >

<Grid>
  <Grid className="rodape" alignItems="center" item xs={12}>
      <Box style={{ backgroundColor: "#168b55", height: "36px"}}>
          <Box paddingTop={1}>
              <Typography  variant="subtitle2" align="center" gutterBottom style={{ color: "black" }} > Copyright © 2023 🌱 VidaPlan </Typography>
          </Box>
      </Box>
  </Grid>
</Grid>
</div>
      </>
  )
}
export default Footer;
