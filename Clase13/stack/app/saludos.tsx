import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";

export default function Saludos () {
    const params = useLocalSearchParams()
    return (
        <View className="bg-dark-bg flex-1">
            <View className="h-[100%] items-center gap-8">
                <Text className="color-white text-[32px]">Hola {params.name} {params.apellido}</Text>
            </View>
        </View>
    )
}