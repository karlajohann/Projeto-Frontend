import { Link } from 'react-router-dom'
import Container from './Container'
/*import styles from './Navbar.module.css'*/
import logo from '../../img/logo.png'


function Navbar() {
    return (
        <nav>
            <Container>
                <Link to={"/"}>
                    <img src={logo} alt="Logo" />
                </Link>
                <ul>
                    <li>
                        <Link to={"/home"}>Home</Link>
                    </li>

                    <li>
                        <Link to={"/criar-projeto"}>Criar Projeto</Link>
                    </li>

                    <li>
                        <Link to={"/visualizar-projeto"}>Visualizar Projeto</Link>
                    </li>

                    <li>
                        <Link to={"/add-requisitos"}>Adicionar Requisitos</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    )
}

export default Navbar