import { useState } from 'react'
import { Link } from 'react-router-dom'
import ModalForm from '../components/ModalForm.jsx'

export default function Aeronaves() {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
        <h2>Aeronaves</h2>
        <div style={{ display: 'flex', gap: 8 }}>
          <button className="btn" onClick={() => setOpen(true)}>+ Nova Aeronave</button>
        </div>
      </div>

      {open && (
        <ModalForm title="Cadastro — Nova Aeronave" onClose={() => setOpen(false)}>
          <div className="form">
            <div className="field"><label>Código (único)</label><input placeholder="AC-101" /></div>
            <div className="field"><label>Modelo</label><input placeholder="A320neo" /></div>
            <div className="field"><label>Categoria</label><select><option>Comercial</option><option>Executiva</option></select></div>
            <div className="field"><label>Capacidade</label><input type="number" placeholder="passageiros" /></div>
          </div>
        </ModalForm>
      )}

      <div className="table" style={{ marginTop: 10 }}>
        <table>
          <thead><tr><th>Código</th><th>Modelo</th><th></th></tr></thead>
          <tbody>
            <tr><td>AC-101</td><td>A320neo</td><td><Link to="/aeronaves/AC-101">Abrir</Link></td></tr>
            <tr><td>AC-204</td><td>E195-E2</td><td><Link to="/aeronaves/AC-204">Abrir</Link></td></tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
