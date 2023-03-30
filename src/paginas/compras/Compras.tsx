import "./Compras.css";
import {
  Grid,
  Typography,
  Button,
} from "@material-ui/core";
import { Box } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Produtos from "../../models/Produtos";
import { useSelector } from "react-redux";
import { TokenState } from "../../store/tokens/TokensReducer";
import { busca, buscaId } from "../../service/Service";
import { toast } from "react-toastify";

function Compras() {
  let navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  const token = useSelector<TokenState, TokenState["token"]>(
    (state) => state.token
  );

  const [produtos, setProdutos] = useState<Produtos[]>([]);

  async function getPost() {
    await busca("/produtos", setProdutos, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    if (token == "") {
      toast.warn("Você precisa estar logado", {
        theme: "colored",
      });
      navigate("/login");
    }
  }, [token]);

  useEffect(() => {
    if (id !== undefined) {
      findByIdProdutos(id);
    }
  }, [id]);

  async function findByIdProdutos(id: string) {
    await buscaId(`/produtos/${id}`, setProdutos, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    getPost();
  }, [produtos.length]);

  return (
    <>
      {produtos.map((produtos) => (
        <Grid className="compras topo">
          <Grid>
            <img src={produtos.embalagem} alt="" className="imgproduto2" />
          </Grid>
          <Grid>
            <h1>{produtos.nome}</h1>
            <Typography variant="body2" className="txtnegrito">R${produtos.preco}</Typography>
                <h3>em até 10x s/ juros</h3>
                <h4>ver métodos de pagamentos</h4>
                <span className="txtnegrito">Entrega para todo Brasil </span>
                <span className="txtnegrito"> </span>
          </Grid>
          <Grid>
              <Typography variant="body2" component="p">
                {produtos.regiao}
              </Typography>
              <Typography variant="body2" component="p">
                {produtos.categorias?.tipo}
              </Typography>
            </Grid>
              <Grid>

            <Typography variant="body2" component="p">
              <span className="txtnegrito"> Descrição do produto: </span>
              {produtos.descricao}
            </Typography>

            <Typography variant="body2" component="p">
              <span className="txtnegrito">Dicas de Plantação: </span>
              {produtos.dicasPlantacao}
            </Typography>
              </Grid>

          <Grid>


            <Grid className="botaoC">
              <div className="botaoCarinho">
                <Button size="small" variant="contained">
                  Adiconar no carrinho
                </Button>
              </div>
              <div>
                <Button
                  type="submit"
                  size="small"
                  variant="contained"
                  color="primary"
                >
                  Comprar agora
                </Button>
              </div>
            </Grid>
            {/* <Grid className='desc'>
              <Typography variant="body2" component="p">
                <span className="txtnegrito"> Descrição do produto: </span>
                {produtos.descricao}
              </Typography>
              </Grid>
              <Grid>
              <Typography variant="body2" component="p">
                <span className="txtnegrito">Dicas de Plantação: </span>
                {produtos.dicasPlantacao}
              </Typography>
              </Grid> */}
          </Grid>
        </Grid>
      ))}
    </>
  );
}
export default Compras;
