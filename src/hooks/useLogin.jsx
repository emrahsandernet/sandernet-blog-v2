import {useAuthContext} from "../hooks/useAuthContext";
import { useState } from "react";
import jwt_decode from "jwt-decode";

export const useLogin = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const { dispatch } = useAuthContext();

    const login = async (username, password) => {
        setLoading(true);
        try {
            const res = await fetch("http://188.119.41.56:7072/api/token/", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                username,
                password,
              }),
            });
            const data = await res.json();

            if (res.status === 200) {

                
                localStorage.setItem("access_token", data.access);
                localStorage.setItem("refresh_token", data.refresh);
                localStorage.setItem("user", jwt_decode(data.access).name);
                
                dispatch({
                    type: "LOGIN",
                    payload: data,
                });
                setLoading(false);
                setError(null);
            }
            else {
                setError(data.detail);
                setLoading(false);
            }
        } catch (error) {
            setError(error);
        }
    }

    return { login, error, loading };
};
