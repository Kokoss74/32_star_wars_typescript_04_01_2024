import React from 'react'

const Planet = ({ value }) => {
  return (
    <option value={value}>{`${value}`}</option>
  )
}

export default Planet