
import Link from 'next/link'

import styles from "./sass/header.module.css"


export default function Header() {
    return (
      <section className={styles.headerMobile}>
        <h3 className={styles.title}>Portfólio</h3>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu" data-id="element-7"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
      </section>
    );
  }