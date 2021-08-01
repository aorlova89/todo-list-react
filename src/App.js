import React from "react";

import {BuildMarkup} from "./pages/Main/Main";

import './pages/Main/Main.css';
import './components/TaskItem.css';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div className="header">ToDo List</div>
            </header>
            <div>
                <BuildMarkup />
            </div>
        </div>
    );
}

export default App;
