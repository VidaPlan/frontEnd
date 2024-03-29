import Grid from "@material-ui/core/Grid";
import React, { useEffect } from "react";
import "./Home.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { TokenState } from "../../store/tokens/TokensReducer";
import { toast } from "react-toastify";
import TabProdutos from "../../components/produtos/tabProdutos/TabProdutos";
import { Box } from '@mui/material';
import Carousels from "../../components/carousels/Carousels";
import Carousel from '../../components/produtos/listaProdutos/Carousel';


function Home() {
  let navigate = useNavigate();
  const token = useSelector<TokenState, TokenState["token"]>(
    (state) => state.token
  );

  useEffect(() => {
    if (token == "") {
      toast.warn("Você precisa estar logado", {
        theme: "colored",
      });
      navigate("/login");
    }
  }, [token]);

  return (
    <>
    
    <Grid container className="pd80 imgHome">
      {/* <div className="carousels"> */}
    <Carousels />
      {/* </div> */}
    <Carousel/> 

      </Grid>
    <div className="img">
      <h1>Benefícios de uma Alimentação Saudável</h1>
    </div>  
    <Grid className="bl1">

      <Link to='/produtos'> 
      <img className="imgproduto5" src="https://i.pinimg.com/564x/02/9d/c5/029dc55346b53e7cb6f34043124089b6.jpg" alt="" />
       </Link>

        <p className="txtimg"> <h3>Melhora a disposição - Sistema Imunológico forte - Afasta doenças como câncer</h3><br/>
        Uma alimentação saudável traz muitos benefícios para o corpo e mente, 
        incluindo manter o peso saudável, aumentar a energia, melhorar a saúde do coração, 
        reduzir o risco de doenças crônicas e fortalecer o sistema imunológico.
        Alimentos saudáveis podem ser saborosos e divertidos de se experimentar.
        Fazer escolhas conscientes e equilibradas ao longo do dia pode ser suficiente para melhorar sua qualidade de vida.
        Comece agora e seu corpo e paladar agradecerão!</p>
    </Grid> 

    <Grid className="bl2">
        <p className="txtimg"><h3>Controla o peso - Ativa o cérebro - Proporciona longevidade</h3><br/> Uma alimentação saudável pode ser tão divertida
           quanto jogar videogame! Quando você escolhe alimentos nutritivos e deliciosos, está desbloqueando novas habilidades 
           para o seu corpo, como manter o peso saudável, aumentar a energia, fortalecer o sistema imunológico e melhorar a saúde do coração.
            E não é preciso comer alimentos sem sabor - há tantas opções deliciosas de frutas, legumes, proteínas magras e gorduras saudáveis 
            para experimentar! Então, da próxima vez que pensar em junk food, lembre-se de que uma alimentação saudável pode ser igualmente 
            divertida e satisfatória. Comece agora e experimente os benefícios por si mesmo.</p>
        <Link to='/produtos'>
        <img className="imgproduto5" src="https://i.pinimg.com/564x/e6/ae/07/e6ae076d6d34a0d74f5e8f2c88016480.jpg"  alt="" />
        </Link>
      </Grid>

      <hr/>

    </>
  );
}

export default Home;
