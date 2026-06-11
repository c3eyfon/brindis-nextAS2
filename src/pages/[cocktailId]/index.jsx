import { Fragment } from "react";
import Head from "next/head";

import CocktailDetail from "@/components/features/cocktails/CocktailDetail";

function CocktailDetailPage(props) {
  const { cocktail } = props;

  return (
    <Fragment>
      <Head>
        <title>{`Cocktail | ${cocktail.strDrink}`}</title>
        <meta
          name="description"
          content={cocktail.strDrink + " cocktail details"}
        />
      </Head>

      <CocktailDetail
        image={cocktail.strDrinkThumb}
        title={cocktail.strDrink}
        category={cocktail.strCategory}
        alcoholic={cocktail.strAlcoholic}
        instructions={cocktail.strInstructions}
      />
    </Fragment>
  );
}

export async function getStaticPaths() {
  const res = await fetch(
    `https://www.thecocktaildb.com/api/json/v2/${process.env.COCKTAILS_API_KEY}/popular.php`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch popular cocktails for static paths");
  }

  const data = await res.json();
  const drinks = data.drinks ?? [];

  const paths = drinks.map((cocktail) => ({
    params: { cocktailId: cocktail.idDrink.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context.params.cocktailId;

  const res = await fetch(
    `https://www.thecocktaildb.com/api/json/v2/${process.env.COCKTAILS_API_KEY}/lookup.php?i=${id}`
  );

  if (!res.ok) {
    return { notFound: true };
  }

  const data = await res.json();
  const cocktail = data.drinks?.[0];

  if (!cocktail) {
    return { notFound: true };
  }

  return {
    props: {
      cocktail,
    },
  };
}

export default CocktailDetailPage;