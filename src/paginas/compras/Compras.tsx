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
import IconButton from '@material-ui/core/IconButton';

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
      <div className="compras">
        <div className="fotoetxt">
          <div className="divproduto2">
            <img src={produtos.embalagem} alt="" className="imgproduto2" />
          </div>
          <div className="infos">
            <h1>{produtos.nome}</h1>
            <p className="value">{Intl.NumberFormat('pt-br', {style:'currency',currency:'BRL'}).format(produtos.preco)}</p>
            <p >Em até 3x de {Intl.NumberFormat('pt-br', {style:'currency',currency:'BRL'}).format(produtos.preco /3)} s/ juros</p>
            <p><span>Categoria:</span> {produtos.categorias?.tipo}</p>
            <p className="pdbt"><span>Região:</span> {produtos.regiao}</p>
            <p>Entrega para todo Brasil </p>
        <div className="botaoC">
          <div>
            <Button className="bt1" type="submit" size="small" variant="contained" color="primary">
              Comprar agora
            </Button>
            </div>
          <div>
            <Button size="small" variant="contained" color="secondary">
              Adiconar no carrinho
            </Button>
          </div>
        </div>
        </div>
        </div>
        <hr  className="hr1"/>
          <div className='desc'>
          <p><span className="bold">Descrição do produto: </span>{produtos.descricao}</p>
          <p><span className="bold">Dicas de Plantação: </span>{produtos.dicasPlantacao}</p>
          </div>
          </div>
        </>
  );
}
export default Compras;