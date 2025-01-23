import styles from './sass/header.module.css'

export default function Projectsdesk() {
    return(
        <section className={styles.projects}>
            <div className={styles.texts}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#8c52ff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-folder-git2 text-purple-500" data-id="element-61"><path d="M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5"></path><circle cx="13" cy="12" r="2"></circle><path d="M18 19c-2.8 0-5-2.2-5-5v8"></path><circle cx="20" cy="19" r="2"></circle></svg>
                <h2 className={styles.subtitles}>Projetos</h2>
            </div>

            <section className={styles.sectionSpecifies}>
                <div className={styles.projectBlock}>
                    <img className={styles.imageProject} src="../../../assets/images/png/centric.png" alt="site da Centric"/>

                    <h3 className={styles.nameProject}>Página da Centric</h3>
                    <p className={styles.descriptionProject}>Durante meu período de estágio na Wecode, em Caxias do Sul - RS, participei do desenvolvimento do site da Centric.ag. O projeto envolveu a implementação das funcionalidades e estruturação do site com base no layout fornecido pelo time de design, garantindo uma experiência de navegação fluida e alinhada às expectativas do cliente.</p>
                </div>

                <div className={styles.projectBlock}>
                    <img className={styles.imageProject} src="../../../assets/images/png/banner-portifolio.png" alt="site da Centric"/>

                    <h3 className={styles.nameProject}>Portifólio</h3>
                    <p className={styles.descriptionProject}>Recriei meu portfólio com um estilo moderno e criativo, utilizando uma abordagem inovadora. Desenvolvi layouts iniciais no Figma e solicitei a colaboração de uma IA para refiná-los, garantindo uma estrutura mais organizada e visualmente atrativa. O resultado final reflete minha identidade profissional e habilidades no desenvolvimento web.</p>
                </div>

                <div className={styles.projectBlock}>
                    <img className={styles.imageProject} src="../../../assets/images/png/salve-o-sul.png" alt="site da Centric"/>

                    <h3 className={styles.nameProject}>Projeto de Apoio às Enchentes no RS</h3>
                    <p className={styles.descriptionProject}>Projeto acadêmico realizado durante o período de enchentes no RS, focado em uma corrente de apoio. Desenvolvemos um sistema em C para identificar formas de ajuda e, como iniciativa extra do grupo, criamos um site informativo para ampliar a disseminação de informações e suporte à comunidade. Atualmente, o site está sendo refeito com um design aprimorado, visando melhorar a usabilidade e o impacto visual.</p>
                </div>
            </section>

            <section className={styles.sectionVideo}>
                <video className={styles.videoBanner} controls autoPlay loop>
                    <source src="../../../assets/videos/banner-video.mp4" type="video/mp4" />
                </video>
            </section>
        </section>
    )
}