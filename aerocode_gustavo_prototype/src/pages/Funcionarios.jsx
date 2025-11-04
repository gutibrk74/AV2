import { useState } from 'react'
import ModalForm from '../components/ModalForm.jsx'

export default function Funcionarios() {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
        <h2>Funcionários</h2>
        <button className="btn" onClick={() => setOpen(true)}>+ Novo Funcionário</button>
      </div>

      {open && (
        <ModalForm title="Cadastro — Funcionário" onClose={() => setOpen(false)}>
          <div className="form">
            <div className="field"><label>Matrícula</label><input placeholder="000123" /></div>
            <div className="field"><label>Nome completo</label><input placeholder="Fulano de Tal" /></div>
            <div className="field"><label>Contato</label><input placeholder="(11) 9xxxx-xxxx" /></div>
            <div className="field"><label>Função</label><select><option>Operador</option><option>Engenheiro</option><option>Supervisor</option></select></div>
          </div>
        </ModalForm>
      )}

      <div className="placeholder">[Tabela de funcionários — mock]</div>
    </div>
  )
}
