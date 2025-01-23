
import styles from './sass/aboutMe.module.css'

export default function AboutMeDesk() {
    return(
        <section className={styles.aboutMe} id='about'>
           <div className={styles.informationMe}>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#8c52ff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user text-purple-500" data-id="element-20"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            <h2 className={styles.title}>Sobre Mim</h2>
           </div>

            <div className={styles.sectionEntire}>
                <div className={styles.dataAbout}>
                    <div className={styles.data}>
                        <h3 className={styles.subtitle}>Quem Sou</h3>
                        <p className={styles.text}>Desenvolvedora apaixonada por criar experiências digitais únicas e inovadoras. Sempre em busca de novos desafios e aprendizados na área de tecnologia.</p>
                    </div>

                    <div className={styles.data}>
                        <h3 className={styles.subtitle}>Habilidades</h3>

                    <div className={styles.habilities}>
                        <p className={styles.btnHabilities}>React</p>
                        <p className={styles.btnHabilities}>JavaScript</p>
                        <p className={styles.btnHabilities}>TypeScript</p>
                        <p className={styles.btnHabilities}>VTEX IO</p>
                        <p className={styles.btnHabilities}>HTML</p>
                        <p className={styles.btnHabilities}>CSS</p>
                        <p className={styles.btnHabilities}>Sass</p>
                    </div>

                        <div className={styles.habilities}>
                            <p className={styles.btnHabilities}>Next.js</p>
                        </div>
                    </div>
                </div>

                
                <div className={styles.dataAbout}>
                    <div className={styles.data}>

                                        <h3 className={styles.subtitle}>Experiência</h3>

                                        <div className={styles.experienceObject}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8c52ff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-code-xml text-purple-500 mt-1" data-id="element-31"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
                                            <div className={styles.descriptionExperience}>
                                                <p className={styles.description}>Desenvolvimento Web</p>
                                                <p className={styles.function}>Frontend</p>
                                            </div>
                                        </div>

                                        <div className={styles.experienceObject}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8c52ff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users-round text-purple-500 mt-1" data-id="element-36"><path d="M18 21a8 8 0 0 0-16 0"></path><circle cx="10" cy="8" r="5"></circle><path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"></path></svg>
                                            <div className={styles.descriptionExperience}>
                                                <p className={styles.description}>Repositora</p>
                                                <p className={styles.function}>Atendimento ao Público & Reposição</p>
                                            </div>
                                        </div>
                                    
                                </div>

                            <div className={styles.dataAbout}>
                                <div className={styles.data}>
                                    <h3 className={styles.subtitle}>Objetivos</h3>
                                    
                                    <div className={styles.experienceObject}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8c52ff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rocket text-purple-500 mt-1" data-id="element-49"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
                                        
                                        <div className={styles.descriptionExperience}>
                                            <p className={styles.description}>Inovação Constante</p>
                                            <p className={styles.function}>Busca por novas tecnologias e soluções</p>
                                        </div>
                                    </div>

                                    <div className={styles.experienceObject}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8c52ff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users-round text-purple-500 mt-1" data-id="element-36"><path d="M18 21a8 8 0 0 0-16 0"></path><circle cx="10" cy="8" r="5"></circle><path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"></path></svg>
                                        <div className={styles.descriptionExperience}>
                                            <p className={styles.description}>Aprendizado Contínuo</p>
                                            <p className={styles.function}>Desenvolvimento profissional constante</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                </div>
            </div>
        </section>
    )
}