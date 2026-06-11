import { Fragment } from "react";
import Link from "next/link";

const LoginPage = () => {
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <Fragment>
      <section className="login-page">
        <div className="login-card">
          <h1 className="login-card__title">Log in here</h1>

          <form className="login-card__form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email Address"
            />

            <input
              type="password"
              placeholder="Password"
            />

            <Link
              href="#"
              className="login-card__forgot"
            >
              Forgotten your password?
            </Link>

            <button
              type="submit"
              className="login-card__button"
            >
              Login to your Account
            </button>
          </form>
        </div>
      </section>
    </Fragment>
  );
};

export default LoginPage;