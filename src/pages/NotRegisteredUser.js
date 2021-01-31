import React from 'react';
import Context from '../Context';
import { UserForm } from '../components/UserForm';
import { RegisterMutation } from '../container/RegisterMutacion';

export const NotRegisteredUser = () => {
    return (
        <Context.Consumer>
            {
                ({ activateAuth }) => {
                    return <RegisterMutation>
                        {
                            (register) => {
                                const onSubmit = ({ email, password }) => {
                                    const input = { email, password }
                                    const variables = { input }
                                    register({ variables }).then(activateAuth)
                                }
                                return <UserForm title='Registrarse' onSubmit={onSubmit} />
                            }
                        }
                    </RegisterMutation>
                }
            }
        </Context.Consumer>
    )
}
