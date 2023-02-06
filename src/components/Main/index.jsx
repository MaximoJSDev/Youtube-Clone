import styles from "./main.module.css";
import ListVideos from "./ListVideos";

function index() {
  return (
    <main className={styles.main}>
      <header className={styles.main__header}>
        <span className={styles.main__header__active}>Todos</span>
        <span>Videojuegos</span>
        <span>En tiempo real</span>
        <span>Música</span>
        <span>Mixes</span>
        <span>Computadoras</span>
        <span>Programación</span>
        <span>Animación</span>
        <span>Diseño gráfico</span>
        <span>Animación</span>
        <span>Hardware</span>
        <span>Podcast</span>
        <span>Vistos</span>
        <span>Publicaciones</span>
        <span>Novedad para ti</span>
      </header>
      <ListVideos />
    </main>
  );
}

export default index;
