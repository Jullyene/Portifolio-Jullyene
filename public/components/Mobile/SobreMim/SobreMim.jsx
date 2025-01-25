import styles from "./sass/sobreMim.module.css"


export default  function SobreMim() {
    return (
        <section className={styles.aboutMe}>
            <div className={styles.texts}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#8c52ff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user text-purple-500" data-id="element-20"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                <h1 className={styles.title}>Sobre Mim</h1>
            </div>

            <section className={styles.sectionsAbout}>
                <div className={styles.dataAbout}>
                    <h2 className={styles.subtitle}>Quem Sou</h2>
                    <p className={styles.textAbout}>Desenvolvedora apaixonada por criar experiências digitais únicas e inovadoras. Sempre em busca de novos desafios e aprendizados na área de tecnologia.</p>
                </div>

                <div className={styles.dataAbout}>
                    <h2 className={styles.subtitle}>Experiência</h2>

                    <div className={styles.experienceObject}>
                        <div className={styles.sectionaboutExperience}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8c52ff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-code-xml text-purple-500 mt-1" data-id="element-31"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
                            <div className={styles.textsDesciption}>
                                <h4 className={styles.titleh4}>Desenvolvimento Web</h4>
                                <p className={styles.description}>Frontend & Backend</p>
                            </div>
                        </div>
                        
                        <div className={styles.sectionaboutExperience}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8c52ff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users-round text-purple-500 mt-1" data-id="element-36"><path d="M18 21a8 8 0 0 0-16 0"></path><circle cx="10" cy="8" r="5"></circle><path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"></path></svg>
                            <div className={styles.textsDesciption}>
                                <h4 className={styles.titleh4}>Atendimento ao Público</h4>
                                <p className={styles.description}>Frontend & Backend</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.dataAbout}>
                    <h2 className={styles.subtitle}>Habilidades</h2>

                    <div className={styles.habilities}>
                        <p className={styles.btnHabilities}>React</p>
                        <p className={styles.btnHabilities}>JavaScript</p>
                        <p className={styles.btnHabilities}>Sass</p>
                    </div>

                    <div className={styles.habilities}>
                        <p className={styles.btnHabilities}>TypeScript</p>
                        <p className={styles.btnHabilities}>VTEX IO</p>
                        <p className={styles.btnHabilities}>HTML</p>
                    </div>

                    <div className={styles.habilities}>
                        <p className={styles.btnHabilities}>CSS</p>
                    </div>
                </div>

                <div className={styles.dataAbout}>
                    <h2 className={styles.subtitle}>Objetivos</h2>

                    <div className={styles.experienceObject}>
                        <div className={styles.sectionaboutExperience}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8c52ff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rocket text-purple-500 mt-1" data-id="element-49"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>                            <div className={styles.textsDesciption}>
                                <h4 className={styles.titleh4}>Inovação Constante</h4>
                                <p className={styles.description}>Busca por novas tecnologias e soluções</p>
                            </div>
                        </div>
                        
                        <div className={styles.sectionaboutExperience}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8c52ff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-graduation-cap text-purple-500 mt-1" data-id="element-54"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg>                            <div className={styles.textsDesciption}>
                                <h4 className={styles.titleh4}>Aprendizado Contínuo</h4>
                                <p className={styles.description}>Desenvolvimento profissional constante</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
        
    );
}