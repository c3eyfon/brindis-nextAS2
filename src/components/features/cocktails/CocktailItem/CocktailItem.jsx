import Image from "next/image";
import Link from "next/link";

import styles from "./CocktailItem.module.scss";

function CocktailItem(props) {
  return (
    <Link href={`/${props.id}`} className={styles.cocktailCard}>
      <div className={styles.imageBox}>
        <Image
          className={styles.nextImage}
          src={props.image}
          alt={props.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>

      <div className={styles.cocktailContent}>
        <h2>{props.title}</h2>
        <p>{props.category}</p>
      </div>
    </Link>
  );
}

export default CocktailItem;
