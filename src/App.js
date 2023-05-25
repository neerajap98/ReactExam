import './App.css';

import Dashboard from './components/Screens/Dashboard';
import Profile from './components/Screens/Profile';
import Statistics from './components/Screens/Statistics';
import Payment from './components/Screens/Payment';
import Transaction from './components/Screens/Transaction';
import Settings from './components/Screens/Settings';
import Support from './components/Screens/Support';
import LogOut from './components/Screens/LogOut';
import Remaining from './components/Screens/Remaining';
import Ongoing from './components/Screens/Ongoing';
import Completed from './components/Screens/Completed';

import Infobar from './components/includes/Infobar';
import Navbar from './components/includes/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
        
            <div className='gridContainer'>
                
                <Router>
                    <Navbar />

                    <Routes>

                        <Route path='/' element = { <Dashboard /> } >
                            <Route index element = { <Ongoing /> } />
                            <Route path='remaining' element = { <Remaining /> }/>
                            <Route path='completed' element = { <Completed /> }/>
                        </ Route> 

                        <Route path='profile' element = { <Profile /> }/>
                        <Route path='statistics' element = { <Statistics />} />
                        <Route path= 'payment' element = { <Payment /> } />
                        <Route path='transaction' element = { <Transaction /> } />
                        <Route path='settings' element = { <Settings /> } />
                        <Route path='support' element = { <Support /> } />
                        <Route path='logout' element = { <LogOut />} />
                    </Routes>
                </Router>
                <Infobar />
            </div>
        
    );
}

export default App;
