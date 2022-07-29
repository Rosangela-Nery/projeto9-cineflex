import { Link } from 'react-router-dom';
import '../pages.css';

export default function BarraTopo() {
    return (
        <Link to="/">
            <div className="barraTopo">
                <h1>CINEFLEX</h1>
            </div>
        </Link>
    );
}