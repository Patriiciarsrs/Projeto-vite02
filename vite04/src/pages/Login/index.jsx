import './styles.css' 

export function Login() {
    return (
       <div className='login-container'>
        <form className ='login-form'>
            <h1 className='login-titulo'>Login</h1>

            <input type="text" className='login-input'/>
            <input type="text" className='login-input'/>

            <div className="btn-group">
                <button className='login-btn'>Entrar</button>
                <button className='login-btn'>Cadastrar</button>

            </div>
        </form>
       </div>
    )
}