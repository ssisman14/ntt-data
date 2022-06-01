import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import {Case1, Case2, Case3, Home} from "./pages";
import {ThemeProvider} from "@mui/material";
import theme from "./theme";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Home />}> </Route>
                    <Route exact path="/case1" element={<Case1 />}> </Route>
                    <Route exact path="/case2" element={<Case2 />}> </Route>
                    <Route exact path="/case3" element={<Case3 />}> </Route>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
