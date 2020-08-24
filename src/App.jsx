import React, {Component} from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {

    state = {
        advice : ''
    };

    componentDidMount() {
        console.log('Component did mount');
    }

    render() {
        return (
            <div>
                App
            </div>
        );
    }
}

export default App;