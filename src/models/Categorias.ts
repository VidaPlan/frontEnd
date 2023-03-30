import Usuario from "./Usuario";

interface Categorias{
    
    id: number;
    tipo: string
    usuario?: Usuario | null
}
export default Categorias