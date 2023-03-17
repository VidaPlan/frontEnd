import Grid from "@material-ui/core/Grid";
import React, { useEffect } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { TokenState } from "../../store/tokens/TokensReducer";
import { toast } from "react-toastify";
import TabProdutos from "../../components/produtos/tabProdutos/TabProdutos";

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
    <Grid container className="home pd80">
      <Grid xs={5} className="texto">
        <h2>Titulo do texto</h2>
        <h3>
          Esse site tem como objetivo ajudar a diminuir a fome e facilitar o
          acesso a informações sobre boas práticas na plantação, cuidados
          necessários e locais para compra de sementes. Acreditamos que a
          agricultura é uma das principais fontes de alimento para a população
          mundial, e que, com as informações e práticas corretas, é possível
          aumentar a produtividade e garantir a segurança alimentar das pessoas.
        </h3>
      </Grid>
      <Grid className="img" xs={6}>
        <iframe
          src="https://drive.google.com/file/d/1zW9gzYHIZM0VNkvC6FhSaB_vsMxQF8VS/preview"
          width="640"
          height="480"
          allow="autoplay"
        ></iframe>
      </Grid>
      <Grid xs={5} className="texto">
        <iframe
          src="https://drive.google.com/file/d/1zW9gzYHIZM0VNkvC6FhSaB_vsMxQF8VS/preview"
          width="640"
          height="480"
          allow="autoplay"
        ></iframe>
        <Grid xs={4}></Grid>
      </Grid>
      <Grid className="img" xs={6}>
        <h2>Titulo do texto</h2>
        <h3>
          Esse site tem como objetivo ajudar a diminuir a fome e facilitar o
          acesso a informações sobre boas práticas na plantação, cuidados
          necessários e locais para compra de sementes. Acreditamos que a
          agricultura é uma das principais fontes de alimento para a população
          mundial, e que, com as informações e práticas corretas, é possível
          aumentar a produtividade e garantir a segurança alimentar das pessoas.
        </h3>
      </Grid>
      <TabProdutos />
    </Grid>
  );
}

export default Home;
