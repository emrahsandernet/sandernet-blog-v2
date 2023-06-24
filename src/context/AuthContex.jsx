import { createContext,useReducer,useEffect } from "react";
import jwt_decode from "jwt-decode";
export const AuthContext = createContext();

export const authReducer = (state, action) => {

    switch (action.type) {
       
      
        case "LOGIN":
            return {
              ...state,
              user: jwt_decode(action.payload.access).name,
              isAuthenticated: true,
              authLoading: false,
            };
        case "LOGOUT":
            return {
                user: null,
                isAuthenticated: false,
                authLoading: false,
            };
        default:
            return state;
    }
};

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, {
        authLoading: true,
        isAuthenticated: false,
        user: null,
        });
    useEffect(() => {
        const token = localStorage.getItem("access_token");
        
       

        if (token) {
            const decode = jwt_decode(token);

            if (decode.exp * 1000 < Date.now()) {
              localStorage.removeItem("access_token");
              localStorage.removeItem("refresh_token");
              localStorage.removeItem("user");
              dispatch({
                    type: "LOGOUT",
                });

            }


            dispatch({
                type: "LOGIN",
                payload: {
                    access: token,
                },
            });
        }
        else {
            dispatch({
                type: "LOGOUT",
            });
        }
    }, []);
      

        return (
          <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
          </AuthContext.Provider>
        );
};
