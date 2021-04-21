import React from 'react';
import Layout from "../components/Layout";
import { Formik, Field } from "formik";
import InputField from "../components/fields/InputField";
import { RegisterComponent } from "../generated/apolloComponents";

const register = () => {
  return (
    <Layout title="Register page">
      <RegisterComponent>
        {(register) => (
      <Formik
        onSubmit={async data => {
            const response = await register({variables: {
              data
            }})
            console.log(response)
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
        )}
        </RegisterComponent>
    </Layout>
  );
};

export default register;
