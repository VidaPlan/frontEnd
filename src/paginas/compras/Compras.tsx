import "./Compras.css";
import {
  Grid,
  Typography,
  Button,
} from "@material-ui/core";
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

  const [produtos, setProdutos] = useState<Produtos>({
    id: 0,
    nome: "",
    descricao: "",
    preco: 0,
    dicasPlantacao: "",
    regiao: "",
    embalagem: "",
    categorias: null,
    usuario: null,
  });

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
  
  return (
    <>

      <Grid className="compras">
        <Grid className="fotoetxt">
          <Grid xs={5}>
            <img src={produtos.embalagem} alt="" className="imgproduto2" />
          </Grid>
          <Grid xs={6} className="infos">
            <h1>{produtos.nome}</h1>
            <p className="regiao">Região: {produtos.categorias?.tipo}</p>
            <p>{Intl.NumberFormat('pt-br', {style:'currency',currency:'BRL'}).format(produtos.preco)}</p>
            <h3>em até 10x s/ juros</h3>
            <span className="txtnegrito">Entrega para todo Brasil </span>
        <Grid className="botaoC">
          <Button type="submit" size="small" variant="contained" color="primary">
            Comprar agora
          </Button>
          <Button size="small" variant="contained">
          Adiconar no carrinho
          </Button>
        </Grid>
          </Grid>
        </Grid>
          <Grid className='desc'>
          <p>
            <span className="txtnegrito"> Descrição do produto: </span>
            {produtos.descricao}
          </p>
          <p>
          <span className="txtnegrito">Dicas de Plantação: </span>
          {produtos.dicasPlantacao}
          </p>
          </Grid>
          </Grid>
        </>
  );
}
export default Compras;

{/* <div className="container">
<h1>Finalizar Compra</h1>
<div className="product">
<img src={produtos.embalagem} alt="" className="imgproduto2" />
<h1>{produtos.nome}</h1>
</div>
<p className="price">{Intl.NumberFormat('pt-br', {style:'currency',currency:'BRL'})
  .format(produtos.preco)}</p>
  <h2>Detalhes do Produto</h2>
  <p className="regiao">Região: {produtos.categorias?.tipo}</p>
  <p><span className="txtnegrito"> Descrição do produto: </span>
  {produtos.descricao}
  </p>
  <p><span className="txtnegrito">Dicas de Plantação: </span>{produtos.dicasPlantacao}</p>

  
  <Button size="small" variant="contained">
      Adiconar no carrinho
    </Button>
    <Button type="submit" size="small" variant="contained" color="primary">
      Comprar agora
    </Button>
    </div> */}
