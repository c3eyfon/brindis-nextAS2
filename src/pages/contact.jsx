import { Fragment } from "react";

const ContactPage = () => {
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <Fragment>
      <section className="container contact">
        <h1 className="contact__title">Contact</h1>

        <form className="contact__form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="date" />

          <textarea placeholder="Message" rows="9"></textarea>

          <button type="submit" className="contact__submit">
            Send us a message
          </button>
        </form>
      </section>
    </Fragment>
  );
};

export default ContactPage;