import styles from "./navbar.module.css";
import Menu from "../icons/Menu";
import Youtube from "../icons/Youtube";
import Search from "../icons/Search";
import Microfono from "../icons/Microfono";
import Campana from "../icons/Campana";
import Camara from "../icons/Camara";

function index() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Menu className={styles.logo__menu} />
        <Youtube className={styles.logo__img} />
        <a className={styles.logo__title} href="/">
          YouTube
        </a>
      </div>
      <div className={styles.search}>
        <form className={styles.search__form}>
          <input className={styles.search__form__input} placeholder="Search" />
          <button className={styles.search__form__btnIcon}>
            <Search className={styles.search__form__icon} />
          </button>
        </form>
        <button className={styles.search__btnMicrofono}>
          <Microfono className={styles.search__microfono} />
        </button>
      </div>
      <div className={styles.buttons}>
        <Camara className={styles.buttons__create} />
        <Campana className={styles.button__notifications} />
        <img
          className={styles.buttons__avatar}
          src="src/assets/avatar.jpg"
          alt="Avatar"
        />
      </div>
    </nav>
  );
}

export default index;
