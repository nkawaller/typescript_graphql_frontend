import Layout from "../components/Layout";
import { Formik, Field } from "formik";
import InputField from "../components/fields/InputField";

const register = () => {
  return (
    <Layout title="Register page">
      <Formik
        onSubmit={(data) => {
            console.log(data)
        }}
        initialValues={{
          email: "",
          firstName: "",
          lastName: "",
          password: "",
        }}
      >
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Field
              name="firstName"
              placeholder="First Name"
              component={InputField}
            />
            <Field
              name="lastName"
              placeholder="Last Name"
              component={InputField}
            />
            <Field name="email" placeholder="email" component={InputField} />
            <Field
              name="password"
              placeholder="password"
              type='password'
              component={InputField}
            />
            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
    </Layout>
  );
};

export default register;
