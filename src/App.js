import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './pages.css';
import BarraTopo from './componentes/BarraTopo';
import ListaDeFilmes from "./componentes/ListaDeFilmes";
import SelecionarHorario from "./componentes/SelecionarHorario";
import SelecioneAssento from './componentes/SelecioneAssento';
import { useState } from 'react';


export default function App() {
    const [image, setImage] = useState([]);

    return (
        <BrowserRouter>
            <BarraTopo />
            <Routes>
                <Route path='/' exact element={<ListaDeFilmes />} />
                <Route path='/sessoes/:idFilme' element={<SelecionarHorario image={image} setImage={setImage}/>} />
                <Route path='/assentos/:idSessao' element={<SelecioneAssento image={image}/>} />
            </Routes>
        </BrowserRouter>
    );
}