import { Field, Form, Formik } from "formik";
import { Link } from "react-router-dom";

import "./Authorization.scss";

const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = () => {};
  return (
    <div className="auth">
      <div className="auth__wrapper">
        <h1>Welcome back</h1>
        <h2>Login to continue</h2>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <Form className="auth__form" id="login">
            <label htmlFor="email">Email</label>
            <Field
              className="auth__fields"
              required={true}
              id="email"
              name="email"
            />
            <label htmlFor="password">Password</label>
            <Field
              type="password"
              required={true}
              className="auth__fields"
              id="password"
              name="password"
            />
            <button className="btn" type="submit">
              Login
            </button>
          </Form>
        </Formik>
        <p className="auth__signup-link">
          Don&apos;t have an account?
          <Link to="/register"> Create</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
