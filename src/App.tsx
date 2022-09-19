import {createTheme, CssBaseline, ThemeProvider, useMediaQuery} from "@mui/material";
import React from "react";
import Site from "./Site";

function App() {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode: prefersDarkMode ? 'dark' : 'light',
                },
                typography: {
                    fontSize: 20
                }
            }),
        [prefersDarkMode],
    )

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Site/>
        </ThemeProvider>
    )
}

export default App
