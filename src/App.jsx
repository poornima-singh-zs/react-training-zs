import React from "react"; 
import TopComponent from "./components/TopComponent";
import { ThemeProvider } from "./components/ThemeChanger";
import BottomComponent from "./components/BottomComponent";
import "./App.css";
function App() {
    return (
        <div className="app">
            <TopComponent />
            <ThemeProvider>
                <BottomComponent/>
            </ThemeProvider>
        </div>
    );
}

export default App;

