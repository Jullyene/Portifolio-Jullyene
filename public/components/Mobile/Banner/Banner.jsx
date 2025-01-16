import styles from "./sass/banner.module.css"



export default function Banner() {
    return (
      <section className={styles.bannerPrincipal}>
        <img className={styles.image} src="../../../assets/images/png/banner-portifolio.png" alt="Banner Principal"/>
      </section>
    );
  }