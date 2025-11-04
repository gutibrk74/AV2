import { NavLink } from 'react-router-dom'

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="logo">AG</div>
        <strong>AEROCODE</strong>
      </div>

      <nav className="menu">
        <NavLink to="/dashboard" end>Dashboard</NavLink>
        <NavLink to="/aeronaves">Aeronaves</NavLink>
        <NavLink to="/pecas">Peças</NavLink>
        <NavLink to="/etapas">Etapas</NavLink>
        <NavLink to="/funcionarios">Funcionários</NavLink>
        <NavLink to="/testes">Testes</NavLink>
        <NavLink to="/relatorio">Relatório</NavLink>
      </nav>
    </aside>
  )
}
