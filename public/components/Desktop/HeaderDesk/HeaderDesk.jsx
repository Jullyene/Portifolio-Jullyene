import styles from "./sass/header.module.css"
import Link from "next/link"

export default function HeaderDesk() {
    return (
        <header className={styles.headerDesk}>
            <div className={styles.redirection}>
                <h3 className={styles.title}>Portifólio</h3>
                <div className={styles.redirectionLinks}>
                    <div>
                        <a className={styles.links} href="#">About</a>
                    </div>

                    <div>
                        <a className={styles.links}  href="#">Projects</a>
                    </div>

                    <div>
                        <a className={styles.links} href="#">Contact</a>
                    </div>

                </div>
            </div>
        </header>
    )
}


