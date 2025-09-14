import { Stack } from "expo-router";

export default function RootLayout() {
  return (
  <Stack>
    <Stack.Screen name="index" options={{title: "Home"}} />
    <Stack.Screen name="contadorPalabras" options={{title: "Contador Palabras"}} />
    <Stack.Screen name="saludos" options={{title: "Saludo"}} />
  </Stack>
    )
} 
