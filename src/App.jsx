import React, {Component} from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {

    state = {
        advice : ''
    };

    componentDidMount() {
        this.fetchAdvice();
    }

    fetchAdvice = () => {
      axios.get('https://api.adviceslip.com/advice')
          .then((response) => {
              const {advice} = response.data.slip; // Destructuring

              this.setState({ advice });

          })
          .catch((error) => {
              console.log(error);
          })
    };

    render() {

        const {advice} = this.state; // Destructuring

        return (
            <div className='main'>
                <div className="card">
                    <h1 className="advice">{ advice }</h1>
                </div>
                <button className="button" onClick={this.fetchAdvice}><span>Give me an advice!!</span></button>
                <span className='name'>Arpit Shrivastava</span>
            </div>
        );
    }
}

export default App;