import { createTheme } from "@mui/material/styles";

export const shades ={

    primary: {
        100: "#cccccc",
        200: "#999999",
        300: "#666666",
        400: "#333333",
        500: "#000000",
        600: "#000000",
        700: "#000000",
        800: "#000000",
        900: "#000000"
    },

    secondary: {
        100: "#f8ccd2",
        200: "#f199a4",
        300: "#e96677",
        400: "#e23349",
        500: "#db001c",
        600: "#af0016",
        700: "#830011",
        800: "#58000b",
        900: "#2c0006"
    },
    
    neutral: {
        100: "#f5f8f8",
        200: "#ecf1f1",
        300: "#e2eaea",
        400: "#d9e3e3",
        500: "#cfdcdc",
        600: "#a6b0b0",
        700: "#7c8484",
        800: "#535858",
        900: "#292c2c"
    },
};

export const theme = createTheme({
    palette : {
        primary: {
            main: shades.primary[500]
        },
        secondary: {
            main: shades.secondary[500]
        },
        neutral: {
            dark: shades.neutral[700],
            main: shades.neutral[500],
            light: shades.neutral[100]
        }
    },
    typography: {
        fontFamily: ["Fauna One", "sans-serif"].join(","),
        fontSize: 11,
        h1: {
            fontFamily: ["Cinzel","sans-serif"].join(","),
            fontSize: 48,
        },
        h2: {
            fontFamily: ["Cinzel","sans-serif"].join(","),
            fontSize: 36,
        },
        h3: {
            fontFamily: ["Cinzel","sans-serif"].join(","),
            fontSize: 20,
        },
        h4: {
            fontFamily: ["Cinzel","sans-serif"].join(","),
            fontSize: 14,
        },
    }
})