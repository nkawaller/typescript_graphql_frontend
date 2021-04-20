import { gql } from "apollo-boost";
import Link from "next/link";
import * as React from "react";
import { Mutation } from "react-apollo";
import Layout from "../components/Layout";
import { LoginMutation, LoginMutationVariables } from "../generated/apolloComponents";
import { loginMutation } from "../graphql/user/mutations/login";

const IndexPage: React.FunctionComponent = () => {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>hello Next.js 👋</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
      <Mutation<LoginMutation, LoginMutationVariables>
        mutation={loginMutation}
      >
        {mutate => (
          <button
            onClick={async () => {
              const response = await mutate({
                variables: {email: 'test@test.com', password: 'password'}
              });
              console.log(response);
            }}
          >
            call login mutation
          </button>
        )}
      </Mutation>
    </Layout>
  );
};

export default IndexPage;
