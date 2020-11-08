import React, { useState } from 'react'
import Error from './Error'
import PropTypes from 'prop-types'

const Pregunta = ({
  guardarPresupuesto,
  guardarRestante,
  actualizarPregunta,
}) => {
  // Definir el state
  const [cantidad, guardarCantidad] = useState(0)
  const [error, setError] = useState(false)

  // función que lee el presupuetto
  const definirPresupuesto = (e) => {
    guardarCantidad(parseInt(e.target.value))
  }

  // Dubmit para definir el presupuesto
  const agregarPresupuesto = (e) => {
    e.preventDefault()
    // validar
    if (cantidad < 1 || isNaN(cantidad)) {
      setError(true)
    } else {
      // si se pasa la validación
      setError(false)
      guardarPresupuesto(cantidad)
      guardarRestante(cantidad)
      actualizarPregunta(false)
    }
  }

  return (
    <>
      <h2>Coloca tu presupuesto</h2>
      {error ? <Error mensaje="El Presupuesto es incorrecto" /> : null}
      <form onSubmit={agregarPresupuesto}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Coloca tu presupuesto"
          onChange={definirPresupuesto}
        />
        <input
          type="submit"
          className="button-primary u-full-width"
          value="Definir presupuesto"
        />
      </form>
    </>
  )
}

Pregunta.propTypes = {
  guardarPresupuesto: PropTypes.func.isRequired,
  guardarRestante: PropTypes.func.isRequired,
  actualizarPregunta: PropTypes.func.isRequired,
}

export default Pregunta
