import React from 'react'
import PropTypes from 'prop-types'

const NumberButton = ({ value, pressButton }) => (
  <div onClick={() => (pressButton(value))}>{ value }</div>
)

NumberButton.propTypes = {
  value: PropTypes.any.isRequired,
  onPressButton: PropTypes.func,
}
export default NumberButton
