export default function AeronaveDetalhe() {
  return (
    <div className="grid">
      <div className="card">
        <h3>Dados da Aeronave</h3>
        <p>[Código, Modelo, Capacidades, Categoria]</p>
      </div>
      <div className="card">
        <h3>Etapas vinculadas</h3>
        <div className="placeholder">[Etapas listadas]</div>
      </div>
      <div className="card">
        <h3>Peças vinculadas</h3>
        <div className="placeholder">[Peças da aeronave]</div>
      </div>
      <div className="card">
        <h3>Testes realizados</h3>
        <div className="placeholder">[Testes e relatórios de qualidade]</div>
      </div>
    </div>
  )
}
