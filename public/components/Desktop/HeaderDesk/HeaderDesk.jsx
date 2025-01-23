import styles from "./sass/header.module.css"
import Link from "next/link"

export default function HeaderDesk() {
    return (
        <header className={styles.headerDesk}>
            <div className={styles.redirection}>
                <h3 className={styles.title}>Portifólio</h3>
                <div className={styles.redirectionLinks}>
                    <div>
                        <Link className={styles.links} href="#about">About</Link>
                    </div>

                    <div>
                        <Link className={styles.links}  href="#projects">Projects</Link>
                    </div>

                    <div>
                        <Link className={styles.links} href="#contact">Contact</Link>
                    </div>

                </div>
            </div>
        </header>
    )
}


