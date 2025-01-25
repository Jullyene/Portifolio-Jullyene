import Link from 'next/link';
import styles from "./sass/header.module.css";
import { useState } from 'react';

export default function Header() {
  // Criar um estado para controlar a abertura do menu
  const [menuOpen, setMenuOpen] = useState(false);

  // Alternar o estado de menu aberto/fechado
  const handleClick = () => {
    setMenuOpen(!menuOpen);
    console.log("MenuOpen:", menuOpen);
  };

  return (
    <>
      <section className={styles.headerMobile}>
        <h3 className={styles.title}>Portfólio</h3>
        {/* <button onClick={handleClick} className={styles.btn}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"> <line x1="4" x2="20" y1="12" y2="12"></line> <line x1="4" x2="20" y1="6" y2="6"></line> <line x1="4" x2="20" y1="18" y2="18"></line> </svg>
        </button> */}
      </section>

      {/* <section className={styles.sideMenu}>
          {menuOpen && (
            <nav className={styles.menu}>
              <ul>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="about">Sobre</Link>
                </li>
                <li>
                  <Link href="projects">Projetos</Link>
                </li>
              </ul>
            </nav>
          )}
      </section> */}
    </>
  );
}
