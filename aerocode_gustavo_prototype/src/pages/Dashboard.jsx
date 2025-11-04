export default function Dashboard() {
  return (
    <div className="grid">
      <div className="kpis">
        <div className="card">Aeronaves em produção: <strong>3</strong></div>
        <div className="card">Peças em transporte: <strong>5</strong></div>
        <div className="card">Testes pendentes: <strong>2</strong></div>
      </div>

      <div className="card">
        <h3>Visão geral</h3>
        <div className="placeholder">[Gráfico / Linha do tempo - mock]</div>
      </div>
    </div>
  )
}
