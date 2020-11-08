import React, { useState } from 'react'
import Error from './Error'
import shortid from 'shortid'
import PropTypes from 'prop-types'

const Formulario = ({ presupuesto, guardarGasto, setcrearGasto, restante }) => {
  const [nombre, setNombre] = useState('')
  const [cantidad, setCantidad] = useState(0)
  const [error, setError] = useState(false)
  const [exhedido, setexhedido] = useState(false)

  // Cuando el usuario agrega un gasto
  const agregarGasto = (e) => {
    e.preventDefault()

    // Validar
    if (cantidad < 1 || isNaN(parseInt(cantidad)) || nombre.trim() === '') {
      setError(true)
    } else {
      setError(false)
      if (cantidad > presupuesto || cantidad > restante) {
        setexhedido(true)
      } else {
        setexhedido(false)
        // Construir el gasto
        const gasto = {
          nombre,
          cantidad,
          id: shortid.generate(),
        }
        // console.log(gasto)

        // Pasar el gasto al component principal
        guardarGasto(gasto)
        setcrearGasto(true)

        // Resetear el form
        setNombre('')
        setCantidad(0)
      }
    }
  }

  return (
    <>
      <form onSubmit={agregarGasto}>
        <h2>Agrega tus gastos aquí</h2>
        {error ? <Error mensaje="Ambos campos son obligatorios" /> : null}
        {exhedido ? <Error mensaje="No tiene suficientes fondos" /> : null}
        <div className="campo">
          <label>Nombre Gastos</label>
          <input
            type="text"
            className="u-full-width"
            placeholder="Ejemplo: Transporte"
            value={nombre.toUpperCase()}
            onChange={(e) => {
              setNombre(e.target.value)
            }}
          />
        </div>
        <div className="campo">
          <label>Cantidad Gastos</label>
          <input
            type="number"
            className="u-full-width"
            placeholder="Ejemplo: 300"
            value={cantidad}
            onChange={(e) => {
              setCantidad(parseInt(e.target.value, 10))
            }}
          />
        </div>
        <input
          type="submit"
          className="button-primary u-full-width"
          value="Agregar Gasto"
        />
      </form>
    </>
  )
}

Formulario.propTypes = {
  presupuesto: PropTypes.number.isRequired,
  restante: PropTypes.number.isRequired,
  guardarGasto: PropTypes.func.isRequired,
  setcrearGasto: PropTypes.func.isRequired,
}

export default Formulario
