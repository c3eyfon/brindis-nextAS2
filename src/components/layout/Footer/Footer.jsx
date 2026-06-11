import Link from "next/link";
import styles from "./Footer.module.scss";

function Footer() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <footer className={styles.footer}>
      {/* Footer Upper*/}
      <div className={styles.footerTop}>
        <Link href="mailto:your@email.com" className={styles.contactItem}>
          afake@email.com
        </Link>

        <Link
          href="https://github.com/yourusername"
          target="_blank"
          rel=""
          className={styles.contactItem}
          aria-label="GitHub"
        >
          <i className="ri-github-fill"></i>
        </Link>

        <Link
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          rel=""
          className={styles.contactItem}
          aria-label="LinkedIn"
        >
          <i className="ri-linkedin-box-fill"></i>
        </Link>
      </div>

      {/* Footer bar */}
      <div className={styles.footerBottom}>
        <div className="container">
          <p>&copy; {getCurrentYear()}&nbsp;Brindis</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
