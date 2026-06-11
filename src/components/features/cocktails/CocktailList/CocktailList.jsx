import Container from "@/components/common/Container/Container";
import CocktailItem from "../CocktailItem/CocktailItem";

function CocktailList({ cocktails }) {
  return (
    <Container>
      {cocktails.map((cocktail) => (
        <CocktailItem
          key={cocktail.idDrink}
          id={cocktail.idDrink}
          image={cocktail.strDrinkThumb}
          title={cocktail.strDrink}
          category={cocktail.strCategory}
        />
      ))}
    </Container>
  );
}

export default CocktailList;
