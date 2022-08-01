import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './pages.css';
import BarraTopo from './componentes/BarraTopo';
import ListaDeFilmes from "./componentes/ListaDeFilmes";
import SelecionarHorario from "./componentes/SelecionarHorario";
import SelecioneAssento from './componentes/SelecioneAssento';
import { useState } from 'react';
import PaginaDePedidos from './componentes/PaginaDePedidos';


export default function App() {
    const [image, setImage] = useState([]);
    const [date, setDate] = useState([]);

    return (
        <BrowserRouter>
            <BarraTopo />
            <Routes>
                <Route path='/' element={<ListaDeFilmes />} />
                <Route path='/sessoes/:idFilme' element={<SelecionarHorario image={image} setImage={setImage}/>}/>
                <Route path='/assentos/:idSessao' element={<SelecioneAssento image={image} setImage={setImage} date={date} setDate={setDate}/>} />
                <Route path='/sucesso/' element={<PaginaDePedidos/>} />
            </Routes>
        </BrowserRouter>
    );
}