import styles from './ProjectForm.module.css'
import Input from '../form/Input'
import Submit from '../form/Submit'

function ProjectForm({btnText}) {
    return (
        <form className={styles.form}>
            <Input
                type="text"
                text="Nome do Projeto"
                name="nome"
                placeholder="Insira o nome do Projeto"
            />

            <Input
                type="text"
                text="Descrição do Projeto"
                name="descricao"
                placeholder="Insira a Descrição do Projeto"
            />

            <Input
                type="date"
                text="Data de Início"
                name="data"
                placeholder="Data de Início"
            />

            <Submit text={btnText} />
        </form>
    )
}

export default ProjectForm                                                                                                                                                                                                                                                          