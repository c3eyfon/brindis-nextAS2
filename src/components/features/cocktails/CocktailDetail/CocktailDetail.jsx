import Image from "next/image";
import styles from "./CocktailDetail.module.scss";
import Card from "@/components/common/Card";
import ButtonLink from "@/components/common/ButtonLink";

function CocktailDetail(props) {
  return (
    <Card size="single">
      <div className={styles.cocktailMain}>
        <div className={styles.imageBox}>
          <Image
            className={styles.nextImage}
            src={props.image}
            alt={props.title}
            fill
            sizes="100vw"
            priority
          />
        </div>

        <div className={styles.cocktailContent}>
          <h1>{props.title}</h1>
          <p>
            <strong>Category:</strong> {props.category}
          </p>
          <p>
            <strong>Alcoholic:</strong> {props.alcoholic}
          </p>
          <p>{props.instructions}</p>
        </div>
      </div>

      <div className={styles.cocktailFooter}>
        <ButtonLink path="/">Back to Home</ButtonLink>
      </div>
    </Card>
  );
}

export default CocktailDetail;
