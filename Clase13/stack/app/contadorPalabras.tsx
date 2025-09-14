import { View, Text } from "react-native";
import { TextInput } from "react-native";
import { useState } from "react";

export default function ContadorPalabras() {
  const [texto, setTexto] = useState("")

  const contarPalabras = (str: string) => {
    return str.trim() === "" ? 0 : str.trim().split(/\s+/).length
  }
  
  return (
    <View className="bg-dark-bg flex-1">
      <View className="h-[100%] items-center gap-8">
        <TextInput placeholder="Ingrese palabras y yo las cuenta" placeholderTextColor={"#7B6C8C"} className="text-base border border-[#5D3A73] w-[300px] rounded-[10px] text-[#E0DCE6] bg-[#3A3548] p-[15px] mt-8" value={texto} onChangeText={setTexto}></TextInput>
        <Text className="color-white text-[32px]">Palabras: {contarPalabras(texto)}</Text>
      </View>
    </View>
  );
}
