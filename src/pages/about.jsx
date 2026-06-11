import { Fragment } from "react";
import Banner from "@/components/layout/Banner/Banner";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=1600&q=80";

const AboutPage = () => {
  return (
    <Fragment>
      <Banner
        title="About Us"
        subtitle="Simple cocktail inspiration, one glass at a time"
        backgroundImage={HERO_IMAGE}
      />

      <section className="container about">
        <h1>About Us</h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos deserunt nemo debitis hic, unde earum reiciendis fugit magni perferendis blanditiis.
        </p>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed dignissimos corporis reprehenderit dolorum expedita, fugiat pariatur incidunt quae natus aut?
        </p>
      </section>
    </Fragment>
  );
};

export default AboutPage;
