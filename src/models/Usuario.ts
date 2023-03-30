import Categorias from './Categorias';
import Produtos from './Produtos';
interface Usuario{
    id: number;
    nome: string
    usuario: string
    cpf: string
    senha: string
    produtos?: Produtos[]
    categoria?: Categorias[]
}

export default Usuario