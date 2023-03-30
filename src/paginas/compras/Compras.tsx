
import './Compras.css'
import { Card, Container, Grid, Typography, Button, ListItem, Dialog, DialogTitle, DialogContent, DialogActions } from '@material-ui/core';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {useState, useEffect} from 'react';
import Produtos from '../../models/Produtos';
import { useSelector } from 'react-redux';
import { TokenState} from '../../store/tokens/TokensReducer';
import { busca } from '../../service/Service';
import { toast } from 'react-toastify';

function Compras() {
  let navigate = useNavigate();
  const [produtos, setProdutos] = useState<Produtos[]>([]);

  const token = useSelector<TokenState, TokenState['token']>(
    (state) => state.token
  );
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
    getPost();
  }, [produtos.length]);

  
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  //Card Nordeste
  const [open1, setOpen1] = useState(false);
  const handleOpen1 = () => {
    setOpen1(true);
  };
  const handleClose1 = () => {
    setOpen1(false);
  };
  
  
  
  return (
    <>
      {produtos.map((produtos) => (
        
        <Grid className='compras topo'>
          
              <Grid className="imgproduto2 ">
                  <img src={produtos.embalagem} alt="" className="imgproduto2" />
                  <Typography variant="h5" component="h2">
                <ListItem button>
                  <Button
                    className="botao3"
                    onClick={handleOpen}
                    variant="outlined"
                    color="primary"
                    fullWidth
                  >
                    Ler mais
                  </Button>
                </ListItem>
              </Typography>
              <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Bem vindes</DialogTitle>
                  
                <DialogContent>
                <Typography variant="body2" component="p">
                  <span className="txtnegrito"> Descrição do produto: </span>
                  {produtos.descricao}
                  </Typography>
                <br />
                <Typography variant="body2" component="p">
                  <span className="txtnegrito">Dicas de Plantação: </span>
                  {produtos.dicasPlantacao}
                </Typography>
                </DialogContent>

                    
                  
                <DialogActions>
                  <Button onClick={handleClose}>Fechar</Button>
                </DialogActions>
              </Dialog>
                </Grid>

            <Grid>
              
              <Grid >
              <Typography   variant="h5" component="h4" align="center">
                <span className="txtnegrito"><h1>{produtos.nome}</h1></span>
            <img src="" alt="" />
              </Typography>
              </Grid>
            
    
              <Grid className='valor'>
              <Typography variant="body2" component="p">
                <span className="txtnegrito"><h1> R$:39,99</h1> </span>
                <h3>em 4 x 10,00 R$ sem juros</h3>
                <h4>ver meios de pagamentos</h4>
                <span className="txtnegrito">Entrega para todo Brasil </span>
                <span className="txtnegrito"> </span>
                {/* {produtos.preco} */}
              </Typography>
              </Grid>
              
              <Grid>
              <Typography variant="body2" component="p">
                {/* {produtos.regiao} */}
              </Typography>
              </Grid>
              <Grid>
              <Typography variant="body2" component="p">
                {/* {produtos.categorias?.tipo} */}
              </Typography>
              </Grid >

              <Grid className='botaoC'>
                <div className='botaoCarinho' >
              <Button  size="small" variant="contained" >
                    Adiconar no cariinho
                </Button>
                </div>
               <div>
                <Button type="submit" size="small" variant="contained" color="primary">
                    Compra agora
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
  
export default Compras