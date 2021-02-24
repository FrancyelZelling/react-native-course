import React from 'react'
import {Button} from 'react-native'

const Botao = () => {
  function executar(){
    console.warn("exec #01!")
  }

  return (
    <>
    <Button title="executar #01" onPress={executar} />
    <Button title="executar #02" onPress={() => console.warn("Exec #02!")} />
    </>
  )
}

export default Botao
