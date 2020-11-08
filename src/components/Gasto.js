import React from 'react'
import PropTypes from 'prop-types'

const Gasto = ({ gasto }) => {
  return (
    <div>
      <li className="gastos">
        <p>
          {gasto.nombre.toUpperCase()}
          <span className="gasto">S/. {gasto.cantidad}</span>
        </p>
      </li>
    </div>
  )
}

Gasto.propTypes = {
  gasto: PropTypes.object.isRequired,
}

export default Gasto
