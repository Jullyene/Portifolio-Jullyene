import styles from "./sass/projects.module.css"

export default function Projects({success= false, urlI, textoAlternativo, texto}) {
    return(
        <section className={styles.sectionProjects}>
            {success && <h3 className={styles.titleProjects}>PROJECTS</h3>}
            <img className={styles.image} src={urlI} alt={textoAlternativo} />
            <p className={styles.texto}>{texto}</p>
        </section>
    );
}