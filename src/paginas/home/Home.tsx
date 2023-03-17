import Grid from '@material-ui/core/Grid'
import React, { useEffect } from "react";
import './Home.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/TokensReducer';
import { toast } from 'react-toastify';
import TabProdutos from '../../components/produtos/tabProdutos/TabProdutos';
import ModalProdutos from '../../components/produtos/modalProdutos/ModalProdutos';

function Home() {
  let navigate = useNavigate();
  const token = useSelector<TokenState, TokenState['token']>(
  (state)=>state.token
);

useEffect(() => {
  if (token == "") {
    toast.warn('Você precisa estar logado', {
      theme: "colored",
  });
      navigate("/login")
  }
}, [token])

  return (

    <Grid container className='home pd80'>
    <Grid xs={5} className='texto'>Esse site tem como objetivo ajudar a diminuir a fome e facilitar o acesso a informações sobre boas práticas na plantação, cuidados necessários e locais para compra de sementes.

Acreditamos que a agricultura é uma das principais fontes de alimento para a população mundial, e que, com as informações e práticas corretas, é possível aumentar a produtividade e garantir a segurança alimentar das pessoas.


    <Grid xs={4}>
  
    </Grid>
    </Grid>
    <Grid className='img' xs={6}>
    <iframe src="https://drive.google.com/file/d/1zW9gzYHIZM0VNkvC6FhSaB_vsMxQF8VS/preview" width="640" height="480" allow="autoplay"></iframe>
    </Grid>
      <TabProdutos />
    </Grid>

  )
}

export default Home