import React from 'react'
import { View, Text } from 'react-native'
import Style from "./style"

export default () => {
  return <Text style={Style.txtG}>Comp 0</Text>
}

const Comp1 = () => {
  return <Text style={Style.txtG}>Comp 0</Text>
}

const Comp2 = () => {
  return <Text style={Style.txtG}>Comp 0</Text>
}

export { Comp1, Comp2}