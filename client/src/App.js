import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginScreen from "./components/screens/LoginScreen";
import Home from "../src/components/Home";


import AddUser from './components/Member/AddUser';
import Header from './components/Member/Header';
import UserLogin from "./components/screens/UserLogin";
import UpdateUser from './components/Member/UpdateUser';
import AdminHome from './components/Member/AdminHome';
import MemberHome from './components/Member/MemberHome';
import ViewUser from './components/Member/ViewUser';
import Icon from './components/Member/Icon';
import Recommend from './components/Member/Recommend';
import ViewRecommend from './components/Member/ViewRecommend';
import SearchBook from './components/Member/SearchBook';
import BReport from './components/Member/BookReport';
import AllUser from './components/Member/AllUser';


import AddBooks from './components/Books/AddBook';
import AllBooks from './components/Books/AllBooks';
import UpdateBooks from './components/Books/UpdateBooks';
import SearchBooks from './components/Books/SearchBooks';
import AddAuthors from './components/Authors/AddAuthor';
import AllAuthors from './components/Authors/AllAuthors';

import SearchAuthors from './components/Authors/SearchAuthors';

import RecomendedBooks from './components/Books/RecomendedBooks';
import AuthorReport from './components/Authors/AuthorReport';
import BookReport from './components/Books/BookReport';
import AddEBooks from './components/Books/AddEbook';
import DisplayEBooks from './components/Books/AllEBooks';





import AddTransaction from './components/Transaction/AddTransaction';
import TransactionHistory from './components/Transaction/TransactionHistory';
import UpdateTransaction from './components/Transaction/UpdateTransaction';
import TransactionReport from './components/Transaction/TransactionReport';

import PaymentHome from './components/Payment/paymenthome';
import AddDelaycharges from './components/Payment/Delaycharges';
import Monthlyfee from './components/Payment/Monthlyfee';
import PaymentHistory from './components/Payment/paymentHistory';
import Updatefee from './components/Payment/UpdateFee';
import PaymentReport from './components/Payment/PaymentReport';




function App() {
    return ( 
        <div className = 'App'>
            <Router>
                <Routes>
                   
                <Route path="/"element = { < AdminHome/> } />  
                    <Route path = "/LoginScreen" element = { < LoginScreen /> } />
                    <Route path="/home" element = { < Home /> } />
                    <Route path='/AddBooks' element={< AddBooks />} />
                    <Route path='/SearchBooks' element={< SearchBooks />} />
                    <Route path='/UpdateBooks' element={< UpdateBooks />} />
                    <Route path='/AllBooks' element={< AllBooks/>} />
                    <Route path='/RecomendedBooks' element={< RecomendedBooks/>} />
                    <Route path='/AddAuthors' element={< AddAuthors />} />
                    <Route path='/AllAuthors' element={< AllAuthors/>} />
                    <Route path='/SearchAuthors' element={< SearchAuthors/>} />
                    <Route path='/AuthorReport' element={< AuthorReport/>} />
                    <Route path='/BookReport' element={< BookReport/>} />
                    <Route path='/AddEBooks' element={< AddEBooks/>} />
                    <Route path='/DisplayEBooks' element={< DisplayEBooks/>} />
                    

                    

                    <Route path="/add"element = { < AddUser/> } />
                    <Route path="/header"element = { < Header/> } />
                    <Route path = "/User" element = { < UserLogin/> } />
                    <Route path="/update"element = { < UpdateUser/> } />
                    <Route path="/admin"element = { < AdminHome/> } />
                    <Route path="/member"element = { < MemberHome/> } />
                    <Route path="/user"element = { < ViewUser/> } />
                    <Route path="/icon"element = { < Icon/> } />
                    <Route path="/recommend"element = { < Recommend/> } />
                    <Route path="/delete"element = { < ViewRecommend/> } />
                    <Route path="/get"element = { < SearchBook/> } />
                    <Route path="/Borrowed"element = { < BReport/> } />
                    <Route path="/alluser"element = { < AllUser/> } />
                 



                    
                    <Route path='/AddTransaction' element={< AddTransaction/>} />
                    <Route path='/TransactionHistory' element={< TransactionHistory/>} />
                    <Route path='/UpdateTransaction' element={< UpdateTransaction/>} />
                    <Route path='/TransactionReport' element={< TransactionReport/>} />


                    <Route path='/PaymentHome' element={< PaymentHome/>} />
                    <Route path='/AddDelaycharges' element={< AddDelaycharges/>} />
                    <Route path='/Monthlyfee' element={< Monthlyfee/>} />
                    <Route path='/PaymentHistory' element={< PaymentHistory/>} />
                    <Route path='/Updatefee' element={< Updatefee/>} />
                    <Route path='/PaymentReport' element={< PaymentReport/>} />
                    



                </Routes>  
            </Router>  
        </div>
    )
}

export default App;








