import { createContext, useReducer, useEffect } from "react";
export const ThemeContext = createContext();

export const themeReducer = (state, action) => {
    console.log(action);
    if(action.type === "DARK"){
        localStorage.setItem("theme", "dark");
    }else{
        localStorage.setItem("theme", "light");
    }
    switch (action.type) {
        case "DARK":
        return {
            ...state,
            isDark: true,
            

        };
        case "LIGHT":
        return {
            ...state,
            isDark: false,
        };
        default:
        return state;
    }
    }

export const ThemeContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(themeReducer, {
        isDark: true,
    });

    useEffect(() => {
        if (localStorage.getItem("theme") === "dark") {
            dispatch({
                type: "DARK",
            });
        } else {
            dispatch({
                type: "LIGHT",
            });
        }
    }, []);

    return (
        <ThemeContext.Provider value={{ state, dispatch }}>
            {children}
        </ThemeContext.Provider>
    );
}

