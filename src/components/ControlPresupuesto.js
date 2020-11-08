import React from 'react'
import { revisarPresupuesto } from '../helpers/helper'
import PropTypes from 'prop-types'

const ControlPresupuesto = ({ presupuesto, restante }) => {
  return (
    <>
      <div className="alert alert-primary">Presupuesto: S/. {presupuesto}</div>
      {restante !== 0 ? (
        <div className={revisarPresupuesto(presupuesto, restante)}>
          Restante: S/. {restante}
        </div>
      ) : (
        <div className={revisarPresupuesto(presupuesto, restante)}>
          Restante: S/. {restante}
          <p className="alert alert-warning">
            <b>
              <em>GASTÓ TODO SU DINERO!!!</em>
            </b>
          </p>
        </div>
      )}
    </>
  )
}

ControlPresupuesto.propTypes = {
  presupuesto: PropTypes.number.isRequired,
  restante: PropTypes.number.isRequired,
}

export default ControlPresupuesto
