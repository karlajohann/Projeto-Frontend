import styles from './Home.module.css'

import ideias from '../../img/ideias.jpg'
import LinkButton from '../layout/LinkButton'

function Home() {
    return (
        <section className={styles.home_container}>
            <h1>Bem-vindo ao <span>P.TECH</span></h1>
            <p>Gerencie seus projetos!</p>
            <LinkButton to="/criar-projeto" text="Criar Projeto" />
            <img src={ideias} alt="P.TECH"
                width={80}
                height={80}
                justify-content='center'
            />
        </section>
    )
}

export default Home