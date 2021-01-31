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
                            (register, { data, loading, error }) => {
                                const onSubmit = ({ email, password }) => {
                                    const input = { email, password }
                                    const variables = { input }
                                    register({ variables }).then(activateAuth)
                                }

                                const errorMsg = error && 'El usuario ya existe o hubo algún problema';

                                return <UserForm disabled={loading} error={errorMsg} title='Registrarse' onSubmit={onSubmit} />
                            }
                        }
                    </RegisterMutation>
                }
            }
        </Context.Consumer>
    )
}
