import { useState } from 'react'
import ModalForm from '../components/ModalForm.jsx'

export default function Pecas() {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
        <h2>Peças</h2>
        <button className="btn" onClick={() => setOpen(true)}>+ Nova Peça</button>
      </div>

      {open && (
        <ModalForm title="Cadastro — Nova Peça" onClose={() => setOpen(false)}>
          <div className="form">
            <div className="field"><label>Aeronave (código)</label><input placeholder="AC-101" /></div>
            <div className="field"><label>Referência</label><input placeholder="PN-1234" /></div>
            <div className="field"><label>Origem</label><select><option>Nacional</option><option>Importada</option></select></div>
            <div className="field"><label>Fornecedor</label><input placeholder="Fornecedor" /></div>
          </div>
        </ModalForm>
      )}

      <div className="placeholder">[Tabela de peças — mock]</div>
    </div>
  )
}
