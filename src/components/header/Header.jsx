import "./header.css"
import {Link} from 'react-router-dom'

 function Header(){
     return (
        <>
        <header>
            <h1>Loja Boa</h1>
            <nav>
            <ul>
                <li>
                    <Link to={'/'}>Home</Link>
                </li>
                <li>
                    <Link to={'/produtos'}>Produtos</Link>
                </li>
               <li>
                   <Link to={'/sobre'}>Sobre</Link>
               </li>
            </ul>
            </nav>
        </header>
    </> 
    );
};

export default Header;