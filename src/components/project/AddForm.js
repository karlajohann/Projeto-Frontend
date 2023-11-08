import styles from './AddForm.module.css'
import Input from '../form/Input'
import Submit from '../form/Submit'

function AddForm({ btnText }) {
    return (
        <form className={styles.form}>
            <div> <p>Requisitos Funcionais</p>
                <Input
                    type="text"
                    text="Requisito funcional"
                    name="nome"
                    placeholder="Insira um Requisito Funcional"
                />

                <Input
                    type="text"
                    text="Requisito funcional"
                    name="nome2"
                    placeholder="Insira mais um Requisito Funcional"
                />
            </div>

            <div> <p>Requisitos Não Funcionais</p>
                <Input
                    type="text"
                    text="Requisito não funcional"
                    name="nome n"
                    placeholder="Insira um Requisito Não Funcional"
                />

                <Input
                    type="text"
                    text="Requisito não funcional"
                    name="nome n2"
                    placeholder="Insira mais um Requisito Não Funcional"
                />
            </div>

            <Submit text={btnText} />
        </form>
    )
}

export default AddForm      