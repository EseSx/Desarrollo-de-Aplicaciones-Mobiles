import { Text, View } from "react-native";
import { Link } from "expo-router";

import "../global.css"

export default function Index() {
  return (
    <View className="bg-dark-bg flex-1">
      <View className="h-[100%] items-center gap-8">
      <Link href="/contadorPalabras" asChild>
        <Text className="border border-[#884EA0] p-[9px] rounded-md color-[#E0DCE6] bg-light-purple mt-20 text-[32px]">Contar palabras</Text>
      </Link>
      <Link href={{pathname: "/saludos", params: {name: "pablo", apellido: "tyron"} }} asChild>
        <Text className="border border-[#884EA0] p-[9px] rounded-md color-[#E0DCE6] bg-light-purple mt-20 text-[32px]">Saludos</Text>
      </Link>
      </View>
    </View>
  );
}
