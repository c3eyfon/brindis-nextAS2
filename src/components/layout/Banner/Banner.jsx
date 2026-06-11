import styles from "./Banner.module.scss";

function Banner({ title, subtitle, backgroundImage }) {
  return (
    <section
      className={styles.banner}
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1>{title}</h1>
          {subtitle && <p>{subtitle}</p>}
        </div>
      </div>
    </section>
  );
}

export default Banner;
