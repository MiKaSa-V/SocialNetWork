import React from 'react';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Messages from './components/body/Messages/Messages';
import NavBar from './components/body/NavBar/NavBar';
import Profile from './components/body/Profile/Profile';
import Header from './components/Header/Header.jsx';
import News from './components/body/News/News.jsx';
import Music from './components/body/Music/Music.jsx';
import Settings from './components/body/Settings/Settings.jsx';

const App = () => {
    return (
        <BrowserRouter>
            <div className="app">
                <div className='app-wrapper'>
                    <Header />
                    <div className="Nav-content">
                        <NavBar />
                        <div className="app-wrapper-content">
                            <Route exact path='/messages' component={Messages} />
                            <Route exact path='/profile' component={Profile} />
                            <Route path='/news' component={News} />
                            <Route path='/music' component={Music} />
                            <Route path='/settings' component={Settings} />
                        </div>
                    </div>    
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
