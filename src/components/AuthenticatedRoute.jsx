import React, { useContext } from "react";
import Authentification from "../context/Authentification";

const AuthenticatedRoute = ({ path, component }) => {
    const { isAuthenticated } = useContext(Authentification);
    return
}