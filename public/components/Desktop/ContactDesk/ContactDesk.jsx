
import styles from './sass/contactDesk.module.css'

export default function ContactDesk() {
    return(
       <section className={styles.sectionContact}>

        <div className={styles.contact}>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#8c52ff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-send text-purple-500" data-id="element-88"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
            <h2 className={styles.titleContact}>Contato</h2>
        </div>

        <div className={styles.informationContact}>
            <p className={styles.text}>Vamos conectar? Me encontre nas redes sociais:</p>
            
            <div className={styles.links}>
                <a className={styles.linkContact} href='https://www.linkedin.com/in/jullyene-patta-ramos-8654b5230' target='_blank'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8c52ff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin" data-id="element-94"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>

                <a className={styles.linkContact}  href='https://github.com/Jullyene' target='_blank'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8c52ff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github" data-id="element-97"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                </a>

                <a className={styles.linkContact}  href='https://web.whatsapp.com/send?phone=5551997446860' target='_blank'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8c52ff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-circle" data-id="element-100"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path></svg>
                </a>
            </div>
        </div>
       </section>
      
    )
}