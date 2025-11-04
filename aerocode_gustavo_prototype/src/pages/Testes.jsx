import { useState } from 'react'
import ModalForm from '../components/ModalForm.jsx'

export default function Testes() {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
        <h2>Testes</h2>
        <button className="btn" onClick={() => setOpen(true)}>+ Registrar Teste</button>
      </div>

      {open && (
        <ModalForm title="Registrar Teste" onClose={() => setOpen(false)}>
          <div className="form">
            <div className="field"><label>Aeronave (código)</label><input placeholder="AC-101" /></div>
            <div className="field"><label>Tipo de teste</label><select><option>Estrutural</option><option>Elétrico</option><option>Funcional</option></select></div>
            <div className="field"><label>Resultado</label><select><option>Aprovado</option><option>Reprovado</option></select></div>
            <div className="field"><label>Observações</label><textarea rows="3" placeholder="Observações (opcional)" /></div>
          </div>
        </ModalForm>
      )}

      <div className="placeholder">[Tabela de testes — mock]</div>
    </div>
  )
}
