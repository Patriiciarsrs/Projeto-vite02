import './styles.css'

export function Register() {
    return (
        <div className='register-container'>
            <form className='register-form'>
                <h1 className='register-titulo'>Register</h1>

                <input type="text" placeholder='Nome' />
                <input type="text" placeholder='Email' />
                <input type="text" placeholder='Senha' />
                <input type="text" placeholder='Confirmar-senha' />

                <div className='register-group'>
                    <button>Cadastrar</button>
                    <button>Voltar</button>
                </div>
            </form>

        </div>
    )
}