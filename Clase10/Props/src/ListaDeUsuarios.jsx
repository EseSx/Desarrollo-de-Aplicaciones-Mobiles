export function ListaDeUsuarios({ lista }) {
  return (
    <>
      {lista.map((usuario) => {
        return <div>{usuario}</div>;
      })}
    </>
  );
}
