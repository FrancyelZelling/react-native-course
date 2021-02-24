import React, {useState} from 'react'
import { Button, Text } from 'react-native'
import Style from "./style"

interface props {
  inicial: number;
  step: number;
}

const Contador:React.FC<props> = (props) => {
  let numero = props.inicial;

  const [number,setNumber] = useState(numero)

  const inc = () => setNumber(number + props.step)
  const dec = () => setNumber(number - props.step)

  return (
    <>
      <Text style={Style.txtG}>{number}</Text>
      <Button title="+" onPress={inc} />
      <Button title="-" onPress={dec} />
    </>
  )
}

export default Contador
