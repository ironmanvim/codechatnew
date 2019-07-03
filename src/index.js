import React from 'react';
import ReactDOM from 'react-dom';
import './Assets/css/index.css';
import StartPage from './Components/StartPage';

class App extends React.Component {
    render() {
        return (
            <div>
                <StartPage />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));


