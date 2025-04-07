import React from "react";
import { View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import Moedas from "../Interfaces/Moedas";

interface PickerItemProps {
  moedas: Moedas[],
  moedaSelecionada: string | null
  onChange: Function
}

const PickerItem = (props: PickerItemProps) => {
  const { moedas, moedaSelecionada, onChange } = props
  
  return (
    <View>
      <Picker
        selectedValue={moedaSelecionada}
        onValueChange={(valor) => { onChange(valor)}}
      >
        {moedas.map((item, index) => (
          <Picker.Item 
            value={item.key}
            key={index}
            label={item.key}
          />
        ))}
      </Picker>
    </View>
  )
}

export {
  PickerItem
} 