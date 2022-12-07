import React from 'react'
import { Navigate } from 'react-router-dom';
import { isAuthenticate } from '../utils/localstorage';

type PrivateRouterProps = {
    children: JSX.Element
}

const PrivateRouter = (props: PrivateRouterProps) => {
    const { user: { role } } = isAuthenticate();
    console.log(role);

    if (!role) {
        return <Navigate to="/" />
    }
    return props.children
}

export default PrivateRouter