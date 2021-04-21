import Layout from "../components/Layout";
import { Formik } from "formik";

const register = () => {
  return (
    <Layout title="Register page">
      <Formik
        onSubmit={() => {}}
        initialValues={{
          email: "",
          firstName: "",
          lastName: "",
          password: "",
        }}
      >
        {({values, handleSubmit}) => <form onSubmit={handleSubmit}>
            
            </form>}
      </Formik>
    </Layout>
  );
};

export default register;
