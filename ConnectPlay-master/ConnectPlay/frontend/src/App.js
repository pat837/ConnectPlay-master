import logo from './logo.svg';
import './App.css';
import {Route , BrowserRouter , Redirect} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import BookingGame from './pages/BookingGame'
import 'antd/dist/antd.css';
import UserBookings from './pages/UserBookings';
import AddGame from './pages/AddGame';
import AdminHome from './pages/AdminHome';
import EditGame from './pages/EditGame';
import First from './pages/First';

import Home1 from './pages/Home1'
import BookingGame1 from './pages/BookingGame1'
import 'antd/dist/antd.css';
import UserBookings1 from './pages/UserBookings1';
import AddGame1 from './pages/AddGame1';
import AdminHome1 from './pages/AdminHome1';
import EditGame1 from './pages/EditGame1';

function App() {
  return (
    <div className="App">

         
         
         <BrowserRouter>
             
             <ProtectedRoute path='/home' exact component={Home} />
             <ProtectedRoute path='/home1' exact component={Home1} />


             <Route path='/first' exact component={First} />
             <Route path='/' exact component={Login} />
             <Route path='/register' exact component={Register} />

             
             <ProtectedRoute path='/booking/:gameid' exact component={BookingGame} />
             <ProtectedRoute path='/userbookings' exact component={UserBookings} />
             <ProtectedRoute path='/addgame' exact component={AddGame} />
             <ProtectedRoute path='/editgame/:gameid' exact component={EditGame} />
             <ProtectedRoute path='/admin' exact component={AdminHome} />

             <ProtectedRoute path='/booking1/:gameid' exact component={BookingGame1} />
             <ProtectedRoute path='/userbookings1' exact component={UserBookings1} />
             <ProtectedRoute path='/addgame1' exact component={AddGame1} />
             <ProtectedRoute path='/editgame1/:gameid' exact component={EditGame1} />
             <ProtectedRoute path='/admin1' exact component={AdminHome1} />
         
         </BrowserRouter>

    </div>
  );
}



export default App;


export function ProtectedRoute(props)
{


    if(localStorage.getItem('user'))
    {
      return <Route {...props}/>
    }
    else{
      return <Redirect to='/'/>
    }

}