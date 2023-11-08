import { Link } from 'react-router-dom'
import Container from './Container'
import styles from './Navbar.module.css'
import logo from '../../img/logot.png'
import { Dropdown } from 'react-bootstrap'
import { FaUser } from 'react-icons/fa'


function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Container>
                <Link to={"/"}>
                    <img
                        src={logo}
                        alt="Logo"
                        width={80}
                        height={80}
                        className="d-inline-block align-top-left"
                    />
                </Link>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to={"/home"}>Home</Link>
                    </li >

                    <li className={styles.item}>
                        <Link to={"/criar-projeto"}>Criar</Link>
                    </li>

                    <li className={styles.item}>
                        <Link to={"/visualizar-projeto"}>Projetos</Link>
                    </li>

                    <li className={styles.item}>
                        <Link to={"/add-requisitos"}>Adicionar Requisitos</Link>
                    </li>

                    <li className={styles.item}>
                        <Dropdown alignRight className={styles.dropdown}>
                            <Dropdown.Toggle variant="link" id="dropdown-login">
                                <FaUser className={styles.icon} />
                                Login
                            </Dropdown.Toggle>
                            <Dropdown.Menu className={styles.menu}>
                                <Dropdown.Item href="/cadastro" onClick={() => console.log("Criar usuário")}>
                                    Criar Usuário
                                </Dropdown.Item>

                                <Dropdown.Item href="/" onClick={() => console.log("Sair")}>
                                    Sair
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </li>
                </ul>
            </Container>
        </nav>
    )
}

export default Navbar