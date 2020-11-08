import { useEffect, useState } from 'react'
import ControlPresupuesto from './components/ControlPresupuesto'
import Formulario from './components/Formulario'
import Listado from './components/Listado'
import Pregunta from './components/Pregunta'

function App() {
  // Definir el state
  const [presupuesto, guardarPresupuesto] = useState(0)
  const [restante, guardarRestante] = useState(0)
  const [mostrarpregunta, actualizarPregunta] = useState(true)
  const [gastos, setGastos] = useState([])
  const [gasto, guardarGasto] = useState({})
  const [crearGasto, setcrearGasto] = useState(false)

  // Definiendo el useEffect que actualiza el restante
  useEffect(() => {
    if (crearGasto) {
      // Agrega el nuevo presupuesto
      setGastos([...gastos, gasto])

      // Resta del presupuesto actual
      const presupuestoRestante = restante - gasto.cantidad
      guardarRestante(presupuestoRestante)

      // Resetear a false
      setcrearGasto(false)
    }
  }, [gasto, gastos, crearGasto, restante])

  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>
      </header>
      <main>
        <div className="contenido-principal contenido">
          {mostrarpregunta ? (
            <Pregunta
              guardarPresupuesto={guardarPresupuesto}
              guardarRestante={guardarRestante}
              actualizarPregunta={actualizarPregunta}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Formulario
                  presupuesto={presupuesto}
                  guardarGasto={guardarGasto}
                  setcrearGasto={setcrearGasto}
                  restante={restante}
                />
              </div>
              <div className="one-half column">
                <Listado gastos={gastos} />
                <ControlPresupuesto
                  presupuesto={presupuesto}
                  restante={restante}
                />
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

export default App
