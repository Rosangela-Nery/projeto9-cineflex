import './pages.css';
import BarraTopo from './componentes/BarraTopo';
import ListaDeFilmes from "./componentes/ListaDeFilmes";
import SelecionarHorario from "./componentes/SelecionarHorario";
import SelecioneAssento from './componentes/SelecioneAssento';


export default function App() {

    return (
        <>
            <BarraTopo />
            <ListaDeFilmes />
            <SelecionarHorario />
            <SelecioneAssento />
        </>
    );
}