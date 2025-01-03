import styles from "./sass/header.module.css"


export default function Header() {
    return (
      <>
        <section className={styles.header}>

          <a href="https://www.linkedin.com/in/jullyene-patta-ramos-8654b5230/">
            <img src="../../../assets/images/svg/icone-linkedin.svg"/>
          </a>

        <div className={styles.headerLinks}>
          <div className={styles.itensMenu}>
            <a className={styles.link} href="">ABOUT ME</a>
          </div>

          <div className={styles.itensMenu}>
            <a className={styles.link} href="">PROJECTS</a>
          </div>
        </div>
        </section>
      </>
    );
  }