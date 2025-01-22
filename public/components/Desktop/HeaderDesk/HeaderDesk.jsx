import styles from "./sass/header.module.css"
import Link from "next/link"

export default function HeaderDesk() {
    return (
        <section className={styles.headerDesk}>

            <a className={styles.linkRede} target='_blank' href="https://www.linkedin.com/in/jullyene-patta-ramos-8654b5230/">
                <img src="../../../assets/images/svg/icone-linkedin.svg"/>
            </a>

            <div>
                <ul>
                    <div className={styles.itemsMenu}>
                        <Link className={styles.link} href="#about">ABOUT ME</Link>
                        {/* <Link className={styles.link} href="#contact">CONTACT</Link>
                        <Link className={styles.link} href="#projects">PROJECTS</Link> */}
                    </div>
                </ul>
            </div>

        </section>
    )
}


