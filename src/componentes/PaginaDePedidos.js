import { Link } from 'react-router-dom';
import '../pages.css';

export default function PaginaDePedidos() {
    

    // useEffect(() => {
    //     const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many`);
        
    //     promise.then((res) => {
    //     });
    // }, []);

    return (
        <div className='paginaDeSucesso'>
            <div className='notificacaoDoPedido'>
                Pedido feito com sucesso!
            </div>
            <div className='notaDoPedido'>
                <div className='filmeESessao'>
                    <h1>Filme e sessão</h1>
                    <p>Enola Holmes</p>
                    <p>24/06/2022 15:00</p>
                </div>
                <div className='filmeESessao'>
                    <h1>Ingressos</h1>
                    <p>Assento 15</p>
                    <p>Assento 16</p>
                </div>
                <div className='filmeESessao'>
                    <h1>Comprador</h1>
                    <p>Nome: João da Silva Sauro</p>
                    <p>CPF: 123.456.789-10</p>
                </div>
            </div>
            <Link to={`/`}>
                <button>Voltar pra Home</button>
            </Link>
        </div>
    );
}