import React from 'react';
import ReactDOM from 'react-dom';
import './Assets/css/index.css';
import StartPage from './Components/StartPage';
import FrontPage from './Components/FrontLayout';

class App extends React.Component {
    render() {
        return (
            <div>
                {/*<StartPage />*/}
                <FrontPage/>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));


