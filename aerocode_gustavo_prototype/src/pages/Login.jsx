import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className="login-page">
      <div className="card">
        <h2>Entrar no Aerocode</h2>
        <div className="form">
          <div className="field">
            <label>Usuário</label>
            <input placeholder="seu.usuario" />
          </div>
          <div className="field">
            <label>Senha</label>
            <input type="password" placeholder="senha" />
          </div>
          <Link to="/dashboard" className="btn primary">Acessar</Link>
        </div>
      </div>
    </div>
  )
}



