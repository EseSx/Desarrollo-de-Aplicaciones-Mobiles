import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useState } from "react";

const dorado = "#D4AF37";
const blanco = "#E0E0E0";

export default function App() {
  const [contador, setContador] = useState(0);

  const mensajeContador = () => {
    if (contador >= 100) {
      return (
        <>
          <Text style={styles.felicitaciones}>
            Felicitaciones no pense que fueras a seguir hasta
          </Text>
          <Text style={styles.numeroMensaje}> 100</Text>
          <Text style={styles.felicitaciones}> tremendo logro!!!{"\n"}</Text>
          <Text style={styles.burla}>
            Para la aplicacion, no para tu vida {"\n"} Para tu vida esto deberia
            ser una decepcion {"\n"} Apretaste 100 veces un boton, o más, como
            te hace sentir eso?
          </Text>
        </>
      );
    } else if (contador >= 50) {
      return (
        <>
          <Text style={styles.felicitaciones}>Felicitaciones llegaste a</Text>
          <Text style={styles.numeroMensaje}> 50</Text>
          <Text style={styles.felicitaciones}> !!!{"\n"}</Text>
          <Text style={styles.burla}>
            Nose cuanto te tomo {"\n"} Que forma de malgastar tu tiempo{"\n"}{" "}
            Terrible vago, anda a tocar pasto, labura o hace algo
          </Text>
        </>
      );
    } else if (contador >= 20) {
      return (
        <>
          <Text style={styles.felicitaciones}>Felicitaciones llegaste a</Text>
          <Text style={styles.numeroMensaje}> 20</Text>
          <Text style={styles.felicitaciones}> !!!{"\n"}</Text>
          <Text style={styles.burla}>
            Good boy {"\n"} Obedeces bien anda y revisa la mision que cambio
          </Text>
        </>
      );
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Bienvenido al contador</Text>

      <Text style={styles.contenedorMision}>
        <Text style={styles.tituloMision}>MISION: </Text>
        <Text style={styles.textoMision}>
          {contador >= 100
            ? "Ganaste deja de apretar porfavor"
            : contador >= 50
            ? "Ganaste?"
            : contador < 20
            ? "Llegar a 20"
            : "Llegar a 50"}
        </Text>
      </Text>

      <Pressable
        style={[styles.botonR, styles.boton]}
        onPress={() => (contador == 0 ? null : setContador(contador - 1))}
      >
        <Text style={styles.textoBoton}>RESTAR</Text>
      </Pressable>

      <Pressable
        style={[styles.botonS, styles.boton]}
        onPress={() => setContador(contador + 1)}
      >
        <Text style={styles.textoBoton}>SUMAR</Text>
      </Pressable>

      <Text style={styles.contador}>
        Contador: <Text style={styles.numero}>{contador}</Text>
      </Text>

      <Text style={styles.mensaje}>{mensajeContador()}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#22002F",
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
  },
  titulo: {
    textAlign: "center",
    color: dorado,
    fontSize: 32,
    position: "absolute",
    top: 200,
    borderBottomColor: dorado,
    borderBottomWidth: 1,
    width: 500,
    paddingBottom: 16,
  },
  contenedorMision: {
    fontSize: 32,
    color: blanco,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    position: "absolute",
    top: 340,
  },
  tituloMision: { color: dorado, fontWeight: "bold" },
  textoMision: { color: blanco },
  boton: {
    position: "absolute",
    bottom: 140,
    borderRadius: 18,
    padding: 10,
    borderColor: dorado,
    borderStyle: "solid",
    borderWidth: 1,
  },
  botonR: {
    backgroundColor: "#6E1414",
    left: 25,
  },
  botonS: {
    backgroundColor: "#1C3A5F",
    right: 25,
  },
  contador: { fontSize: 32, color: blanco },
  numero: { color: dorado },
  textoBoton: { color: "#F5F5F5" },
  mensaje: {
    textAlign: "center",
    marginVertical: 20,
    position: "absolute",
    bottom: 180,
  },
  felicitaciones: { color: dorado, fontSize: 22, fontWeight: "bold" },
  numeroMensaje: { color: "#5A7FA5", fontSize: 26, fontWeight: "bold" },
  burla: { color: "#D46A87", fontSize: 20, fontStyle: "italic" },
});
