import { useState } from 'react'
import ModalForm from '../components/ModalForm.jsx'

export default function Etapas() {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
        <h2>Etapas</h2>
        <button className="btn" onClick={() => setOpen(true)}>+ Nova Etapa</button>
      </div>

      {open && (
        <ModalForm title="Cadastro — Nova Etapa" onClose={() => setOpen(false)}>
          <div className="form">
            <div className="field"><label>Aeronave (código)</label><input placeholder="AC-101" /></div>
            <div className="field"><label>Nome da etapa</label><input placeholder="Montagem Estrutural" /></div>
            <div className="field"><label>Dias estimados</label><input type="number" placeholder="10" /></div>
            <div className="field"><label>Responsável</label><input placeholder="Engenheiro responsável" /></div>
          </div>
        </ModalForm>
      )}

      <div className="placeholder">[Tabela de etapas — mock]</div>
    </div>
  )
}
