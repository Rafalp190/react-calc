import React from 'react'
import PropTypes from 'prop-types'

const EqualButton = ({ value, pressButton }) => (
  <div className="equal" onClick={() => (pressButton(value))}>{ value }</div>
)

EqualButton.propTypes = {
  value: PropTypes.any.isRequired,
  onPressButton: PropTypes.func,
}
export default EqualButton
