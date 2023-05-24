import './App.css';

import Dashboard from './components/Screens/Dashboard';
import Profile from './components/Screens/Profile';
import Statistics from './components/Screens/Statistics';
import Payment from './components/Screens/Payment';
import Transaction from './components/Screens/Transaction';
import Settings from './components/Screens/Settings';
import Support from './components/Screens/Support';
import LogOut from './components/Screens/LogOut';

import Infobar from './components/includes/Infobar';
import Navbar from './components/includes/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
        
            <div className='gridContainer'>
                
                <Router>
                    <Navbar />

                    <Routes>
                        <Route index element = { <Dashboard /> } />
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
