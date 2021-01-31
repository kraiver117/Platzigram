import React from 'react';
import { Mutation } from 'react-apollo';
import { gql } from 'apollo-boost';

const Login = gql`
    mutation signup($input: UserCredentials!) {
        login(input: $input)
    }
`

export const LoginMutation = ({ children }) => {
    return <Mutation mutation={Login}>
        {children}
    </Mutation>
}