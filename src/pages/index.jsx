import { Fragment } from "react";
import Head from "next/head";
import { useQuery } from "@tanstack/react-query";

import Banner from "@/components/layout/Banner/Banner";
import CocktailList from "@/components/features/cocktails/CocktailList";

const HERO_IMAGE =
  "/images/home.avif";

function HomePage() {
  const {
    data: cocktails = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["popular-cocktails"],
    queryFn: async () => {
      const res = await fetch(
        `https://www.thecocktaildb.com/api/json/v2/${process.env.COCKTAILS_API_KEY}/popular.php`,
      );

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || "Failed to fetch cocktails");
      }

      const data = await res.json();
      return data.drinks ?? [];
    },
  });

  return (
    <Fragment>
      {/* SEO HEAD */}
      <Head>
        <title>Popular Cocktails</title>

        <meta
          name="description"
          content="Discover popular cocktails and explore your next favourite drink."
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Banner
        title="Popular Cocktails"
        subtitle="Discover your next favourite drink"
        backgroundImage={HERO_IMAGE}
      />

      <section className="popular-cocktails">
        {isLoading && <p>Loading cocktails...</p>}
        {isError && <p>{error.message}</p>}
        {!isLoading && !isError && <CocktailList cocktails={cocktails} />}
      </section>
    </Fragment>
  );
}

export default HomePage;
