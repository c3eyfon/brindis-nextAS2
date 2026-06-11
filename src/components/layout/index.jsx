import styles from './Layout.module.scss';
import Header from './Header';
import Footer from './Footer';
import { Charis_SIL, Lato } from 'next/font/google';
import 'remixicon/fonts/remixicon.css';

export const charis = Charis_SIL({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
});

export const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  style: ['normal', 'italic'],
});

function Layout(props) {
  return (
    <div className={`${styles.app} ${charis.className}`}>
      <Header />
      <main className={`${styles.main} ${lato.className}`}>
        {props.children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
