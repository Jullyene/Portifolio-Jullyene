import styles from "./sass/sobreMim.module.css"


export default  function SobreMim() {
    return (
        <section id="about">
            <section className={styles.sectionSobreMim}>
                <h1 className={styles.title}>ABOUT ME</h1>
                <img className={styles.image} src="../../../assets/images/png/me.png" alt="Foto minha | Quem sou eu" />
            </section>

            <aside className={styles.informacoesPessoais}>
                <div className={styles.divisaoInformacoes}>
                    <h3 className={styles.dado}>Nome</h3>
                    <p className={styles.informacaodoDado}>Jullyene Patta Ramos</p>
                </div>

                <div className={styles.divisaoInformacoes}>
                    <h3 className={styles.dado}>Email</h3>
                    <p className={styles.informacaodoDado}>jilesss9023Caju@gmail.com</p>
                </div>

                <div className={styles.divisaoInformacoes}>
                    <h3 className={styles.dado}>Idiomas</h3>
                    <p className={styles.informacaodoDado}>Espanhol, Intermediário</p>
                </div>
            </aside>


            <section className={styles.sectionFormacaoAcademica}>
            <h3>Formação Acadêmica</h3>

            <div className={styles.divisaoTextoReta}>
                <div className={styles.retaFormacoes}>

                    <div className={styles.circle1}>   
                    </div>

                    <div className={styles.circle2}>  
                    </div>

                </div>

                    <div className={styles.text}>
                        <p>Atualmente estou cursando Análise e Desenvolvimento de Sistemas na UNIFTEC.</p>
                        <p>Estou cursando também Modelagem 3D no SAGA.</p>
                    </div>
            </div>
            </section>


            <section className={styles.habilidades}>
            <h3>Habilidades</h3>

            <div className={styles.divisaoHabilidades}>
                <div className={styles.blocoHabilidade}>
                    <p>Proatividade</p>
                </div>
            
                <div className={styles.blocoHabilidade}>
                    <p>Organização</p>
                </div>
            </div>
            </section>
        </section>
        
    );
}