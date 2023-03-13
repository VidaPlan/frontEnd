import React, {useState, useEffect} from 'react'
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/TokensReducer";
import { toast } from 'react-toastify';
import Categorias from '../../../models/Categorias';
import { useNavigate } from 'react-router-dom';
import { busca } from '../../../service/Service';

function ListaCategorias() {
    const [categorias, setCategorias] = useState<Categorias[]>([]);
    const token = useSelector<TokenState, TokenState['token']>(
      (state)=>state.token
    );
    let navigate = useNavigate();

  async function getCategorias() {
    await busca("/categorias", setCategorias, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    if (token == "") {
      toast.warn('Você precisa estar logado', {
        theme: "colored",
    });
      navigate("/login");
    }
  }, [token]);

  useEffect(() => {
    getCategorias();
  }, [categorias.length]);

  return (
    <div>
        <p>Frutiferas</p>
        <p>Hortaliças</p>
        <p>Adubos</p>
        
        
    </div>
  )
}

export default ListaCategorias