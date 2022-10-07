import * as React from 'react'
import {Navigate, Route} from 'react-router-dom'

import {useKeycloak} from '@react-keycloak/web'


export function PrivateRoute({
                                 component,
                                 ...rest
                             }) {
    const {keycloak} = useKeycloak()

    return (
        <Route
            {...rest}
            render={(props) =>
                keycloak?.authenticated ? (
                    <component {...props} />
                ) : (
                    <Navigate
                        to={{
                            pathname: '/login',
                            state: {from: props.location},
                        }}
                    />
                )
            }
        />
    )
}