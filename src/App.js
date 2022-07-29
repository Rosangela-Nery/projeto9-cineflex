import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './pages.css';
import BarraTopo from './componentes/BarraTopo';
import ListaDeFilmes from "./componentes/ListaDeFilmes";
import SelecionarHorario from "./componentes/SelecionarHorario";
import SelecioneAssento from './componentes/SelecioneAssento';


export default function App() {

    return (
        <BrowserRouter>
            <BarraTopo />
            <Routes>
                <Route path='/' element={<ListaDeFilmes />} />
                <Route path='/sessoes/:idFilme' element={<SelecionarHorario />} />
                <Route path='/sessoes/:idFilme/assentos/:idSessao' element={<SelecioneAssento />} />
            </Routes>
        </BrowserRouter>
    );
}