import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

export default function App() {
  const [text, setText] = useState("");
  const [tarea, setTarea] = useState<Tarea[]>([]);
  const [isHovered, setIsHovered] = useState(false);
  const [tachar, setTachar] = useState([]);

  type Tarea = {id: number, texto: string, tachado: boolean}

  const handlePress = () => {
    const nuevaTarea = { id: tarea.length + 1, texto: text, tachado: false };
    setTarea((prevTarea) => [nuevaTarea, ...prevTarea]);
  };

  const handleTachar = (id: number, tachar: boolean) => {
    setTarea((prevTarea) =>
      prevTarea.map((t) => (t.id === id ? { ...t, tachado: tachar } : t))
    );
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#2C2A36", height: "100%" }}>
      <View style={styles.container}>
        <Text style={styles.titulo}>Bienvenido a tu To-Do List</Text>
        <TextInput
          placeholder="Ingrese una tarea"
          placeholderTextColor={"#7B6C8C"}
          onChangeText={(newText) => setText(newText)}
          style={styles.input}
        ></TextInput>

        <Pressable
          onPress={text === "" ? null : handlePress}
          onPressOut={(hover) => setIsHovered(false)}
          style={({ pressed }) => [
            { backgroundColor: pressed ? "#9B59B6" : "#7D3C98" },
            styles.botonSumar,
          ]}
        >
          <Text style={{ color: "#E0DCE6" }}>Añadir a la lista</Text>
        </Pressable>

        <View style={styles.contenedorLista}>
          <FlatList
            data={tarea}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item, index }) => (
              <View
                style={[
                  styles.item,
                  { backgroundColor: index % 2 === 0 ? "#3B3345" : "#342F41" },
                ]}
              >
                <Text style={styles.lista}>
                  •{" "}
                  <Text
                    style={
                      item.tachado && {
                        textDecorationLine: "line-through",
                        color: "#888",
                      }
                    }
                  >
                    {item.texto}
                  </Text>
                </Text>
                <Pressable
                  style={styles.botonEliminar}
                  onPress={() => handleTachar(item.id, !item.tachado)}
                >
                  <Text style={{ color: "#FFFFFF" }}>X</Text>
                </Pressable>
              </View>
            )}
          ></FlatList>
        </View>
        <StatusBar style="light" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: "center", gap: 32 },
  input: {
    fontSize: 16,
    borderColor: "#5D3A73",
    borderWidth: 1,
    width: 300,
    borderRadius: 10,
    color: "#E0DCE6",
    backgroundColor: "#3A3548",
    padding: 15,
    marginTop: 32,
  },
  botonSumar: {
    borderColor: "#884EA0",
    borderWidth: 1,
    padding: 9,
    borderRadius: 6,
  },
  lista: {
    color: "#E0DCE6",
    fontSize: 17,
    display: "flex",
    justifyContent: "center",
  },
  contenedorLista: {
    textAlign: "left",
    width: "70%",
    height: "58%",
    margin: 32,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 6,
    marginBottom: 10,
    justifyContent: "space-between",
  },
  botonEliminar: {
    borderColor: "#D94F5C",
    borderWidth: 1,
    borderRadius: 6,
    paddingVertical: 3,
    paddingHorizontal: 7,
    backgroundColor: "#B3414A",
  },
  titulo: {
    fontSize: 24,
    fontWeight: "700",
    color: "#E0DCE6",
    marginTop: 50,
    textShadowColor: "#7D3C98",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 3,
  },
});
