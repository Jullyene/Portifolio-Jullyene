
import Link from 'next/link'

import styles from "./sass/header.module.css"


export default function Header() {
    return (
      <>
        <section className={styles.header}>

          <a target='_blank' href="https://www.linkedin.com/in/jullyene-patta-ramos-8654b5230/">
            <img src="../../../assets/images/svg/icone-linkedin.svg"/>
          </a>

        <div className={styles.headerLinks}>
          <div className={styles.itensMenu}>
            <Link className={styles.link} href="#about">ABOUT ME</Link>
          </div>

          {/* <div className={styles.itensMenu}>
            <Link className={styles.link} href="#projects">PROJECTS</Link>
          </div> */}
        </div>
        </section>
      </>
    );
  }