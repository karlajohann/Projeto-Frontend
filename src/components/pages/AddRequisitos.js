import AddForm from '../project/AddForm'
import styles from './AddRequisitos.module.css'

function AddRequisitos() {
    return (
        <div className={styles.addrequisitos_container}>
            <h1>Adicione os requisitos ao seu Projeto</h1>
            <p>Crie seu projeto para depois adicionar os requisitos.</p>
            <AddForm btnText="Adicionar Requisitos" />
        </div>
    )
}

export default AddRequisitos