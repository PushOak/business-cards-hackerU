import React from 'react'
import useAlert from './useAlert'

export default function ShowAlert() {
    const [showAlert, handleAlert ] = useAlert();

  return (
    <>
    { showAlert && <h1>Alert!</h1>}
    <button onClick={handleAlert}>Show Alert</button>
    </>
  )
}
