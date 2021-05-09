import {Component} from "react";
import './App.css';

import MainContainer from "./Components/MainContainer";



class App extends Component{

    state = {
        wizards: [],
        filteredGryffindor: [],
        filteredSlytherin: [],
        filteredHufflepuff: []
    }

    componentDidMount() {
        fetch("http://hp-api.herokuapp.com/api/characters/students")
            .then((response) => response.json())
            .then((response) => this.setState({ wizards: response }))
    }


    render() {
        const {wizards} = this.state
        console.log(wizards);

        return (

        <div className="App">
          <MainContainer wizards={wizards}/>
            <button onClick={this.wizardsHufflepuff }>Click me</button>
        </div>
    );
  }
}

export default App;
