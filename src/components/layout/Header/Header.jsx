import Link from "next/link";
import styles from "./Header.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <Link href="/">
          <span className={styles.logoCore}>Brindis</span>
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/about">
              <span>About</span>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <span>Contact</span>
            </Link>
          </li>
          <li>
            <Link href="/login">
              <i className="ri-user-line"></i>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
