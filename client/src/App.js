import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from "./components/screens/LoginScreen";

function App() {
    return ( 
        <div className = 'App'>
            <Router>
                <Routes>
                    <Route path = '/'element = { < LoginScreen /> } />
                </Routes>  
            </Router>  
        </div>
    )
}

export default App;