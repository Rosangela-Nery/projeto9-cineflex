import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "./Footer";
import '../pages.css';
import { Link } from "react-router-dom";

export default function SelecioneAssento({image, setImage, date, setDate}) {

    const [poltrona, setPoltrona] = useState([]);
    const params = useParams();
    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');
    const [idAssento, setIdAssento] = useState([]);
    // const [assentoSelecionado, setAssentoSelecionado] = useState([]);



    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${params.idSessao}/seats`);

        promise.then((res) => {
            setPoltrona(res.data.seats.map((item) => preencheAssentoCores(item)));
            setDate([{'weekday': res.data.day.weekday, 'horario': res.data.name}]);
            setImage(res.data.movie)
        });

    }, []);

    function handleForm(e) {
        e.preventDefault(e)
        const infor = {
            name, 
            cpf
        }
        console.log(infor)
        setName('');
        setCpf('');
    }

    function preencheAssentoCores(item) {
        if (item.isAvailable === false) {
            return {'id': item.id, 'estado': 'disponivel', 'isAvailable': item.isAvailable, 'name': item.name}
        }
        return {'id': item.id, 'estado': 'indisponivel', 'isAvailable': item.isAvailable, 'name': item.name}
    }

    function SelecionarPoltrona(id) {
        const novaLista = poltrona.map((item) => {
            if(item.id === id) {

                if (item.estado === 'disponivel') {
                    const guardar = [...idAssento, item.id]
                    setIdAssento(guardar);
                    console.log("aaaaaaaaaaaa: ", guardar)
                    return {'id': item.id, 'estado': 'selecionado', 'isAvailable': item.isAvailable, 'name': item.name}
                }

                else if (item.estado === 'selecionado') {
                    
                    return {'id': item.id, 'estado': 'disponivel', 'isAvailable': item.isAvailable, 'name': item.name}
                }
            }

            else {
                const retirar = idAssento.filter((item) => item != item.id)
                setIdAssento(retirar)
                return {'id': item.id, 'estado': item.estado, 'isAvailable': item.isAvailable, 'name': item.name}
            }
        })
        setPoltrona(novaLista)
    }

    return (
        <>
        <div className='pagina_selecionar_assento'>
            <p>Selecione o(s) assento(s)</p>
            <div className="listaDeAssentos">
                
                {poltrona.map((poltron) => {
                    if (poltron.estado === 'indisponivel') {
                        return (
                            <div className="poltrona amarelo">
                                <h1 >{poltron.name}</h1>
                            </div>
                        )
                    }
                    else if (poltron.estado === 'disponivel') {
                        return(
                            <div className="poltrona" onClick={() => SelecionarPoltrona(poltron.id)}>
                                <h1 >{poltron.name}</h1>
                            </div>
                        )
                    }
                    else if (poltron.estado === 'selecionado') {
                        return(
                            <div className="poltrona verde" onClick={() => SelecionarPoltrona(poltron.id) }>
                                <h1 >{poltron.name}</h1>
                            </div>
                        )
                    }
                })}
            </div>
            <div className="cores">
                <div className="verde">
                    <h1></h1>
                    <p>Selecionado</p>
                </div>
                <div className="cinza">
                     <h1></h1>
                    <p>Disponível</p>
                </div>
                <div className="amarelo">
                    <h1></h1>
                    <p>Indisponível</p>
                </div>
            </div>
            <div className="formulario">
                <form onSubmit={handleForm}>
                    <label for="formName">Nome do comprador:</label>
                    <input 
                        id="formName" 
                        type="text" 
                        placeholder="Digite seu nome..." name="nome" 
                        onChange={(e) => setName(e.target.value)} 
                        value={ name }
                        required/>

                    <label for="formCPF">CPF do comprador:</label>
                    <input 
                        id="formCPF" 
                        type="number" 
                        pattern="\d{3}\.?\d{3}\.?\d{3}-?\d{2}"
                        placeholder="Digite seu CPF..." name="cpf"
                        onChange={(e) => setCpf(e.target.value)} 
                        value={ cpf }
                        required/>

                        <div className="button">
                            <Link  to={`/sucesso/?name/cpf`} >
                                <button type="submit">Reservar assento(s)</button>
                            </Link>
                        </div>
                </form>
            </div>
        </div>
        <Footer image={image} date={date}/>
        </>
    );

}