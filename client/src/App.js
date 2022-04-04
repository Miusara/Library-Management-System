import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from "./components/screens/LoginScreen";
import Home from "../src/components/Home";

function App() {
    return ( 
        <div className = 'App'>
            <Router>
                <Routes>
                    <Route path = '/'element = { < LoginScreen /> } />
                    <Route path="/home"element = { < Home /> } />

                </Routes>  
            </Router>  
        </div>
    )
}

export default App;