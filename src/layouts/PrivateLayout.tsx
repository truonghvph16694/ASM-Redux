import React from "react";
import { Navigate } from "react-router-dom";

type LayoutPrivateProps = {
    children: React.ReactElement;
};

const PrivateLayout = ({ children }: LayoutPrivateProps) => {
    const isAdmin = true;
    if (!isAdmin) return <Navigate to="/login" />;
    return children;
};

export default PrivateLayout;