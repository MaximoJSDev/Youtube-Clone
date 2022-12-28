import styles from "./aside.module.css";
import Home from "../Icons/Home";
import Shorts from "../Icons/Shorts";
import TusVideos from "../Icons/TusVideos";
import Biblioteca from "../Icons/Biblioteca";
import Historial from "../Icons/Historial";
import { VerMasTarde } from "../Icons/VerMasTarde";
import MostrarMas from "../Icons/MostrarMas";
import TusClips from "../Icons/TusClips";
import Suscripciones from "../Icons/Suscripciones";

function index() {
  return (
    <aside className={styles.aside}>
      <ul className={styles.aside__lista}>
        <li>
          <Home /> Principal
        </li>
        <li>
          <Shorts /> Shorts
        </li>
        <li>
          <Suscripciones /> Suscripciones
        </li>
        <br />
        <li>
          <Biblioteca /> Biblioteca
        </li>
        <li>
          <Historial /> Historial
        </li>
        <li>
          <TusVideos /> Tus videos
        </li>
        <li>
          <VerMasTarde /> Ver más tarde
        </li>
        <li>
          <TusClips /> Tus clips
        </li>
        <li>
          <MostrarMas /> Mostrar más
        </li>
        <br />
        <h3>Suscripciones</h3>
        <li>
          <img src="https://thispersondoesnotexist.com/image" alt="Canal" />
          <span>Midudev</span>
        </li>
        <li>
          <img src="https://thispersondoesnotexist.com/image" alt="Canal" />
          <span>Fazt</span>
        </li>
        <li>
          <img src="https://thispersondoesnotexist.com/image" alt="Canal" />
          <span>Aquino</span>
        </li>
        <li>
          <img src="https://thispersondoesnotexist.com/image" alt="Canal" />
          <span>Cordura</span>
        </li>
        <li>
          <img src="https://thispersondoesnotexist.com/image" alt="Canal" />
          <span>Mr. Beast</span>
        </li>
        <li>
          <img src="https://thispersondoesnotexist.com/image" alt="Canal" />
          <span>Beniju</span>
        </li>
        <li>
          <img src="https://thispersondoesnotexist.com/image" alt="Canal" />
          <span>Conterstine</span>
        </li>
        <li>
          <MostrarMas /> Mostrar <span>&nbsp;{230}&nbsp;</span> más
        </li>
      </ul>
    </aside>
  );
}

export default index;
