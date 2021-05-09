import {Component} from "react";
import './App.css';

import MainContainer from "./Components/MainContainer";



class App extends Component{

    state = {
        wizards: [],
        filteredGryffindor: [],
        filteredSlytherin: [],
        filteredHufflepuff: [],
        filteredRavenclaw: []
    }

    componentDidMount() {
        fetch("http://hp-api.herokuapp.com/api/characters/students")
            .then((response) => response.json())
            .then((response) => this.setState({ wizards: response }))
    }

    wizardsGryffindor = () =>{
        const {wizards, filteredGryffindor} = this.state;

        this.setState({
            filteredGryffindor: wizards.filter(wizard => wizard.house === "Gryffindor")
        })
        console.log(filteredGryffindor);
    }

    wizardsSlytherin = () =>{
        const {wizards, filteredSlytherin} = this.state;

        this.setState({
            filteredSlytherin: wizards.filter(wizard => wizard.house === "Slytherin")
        })
        console.log(filteredSlytherin);
    }

    wizardsHufflepuff = () =>{
        const {wizards, filteredHufflepuff} = this.state;

        this.setState({
            filteredHufflepuff: wizards.filter(wizard => wizard.house === "Hufflepuff")
        })
        console.log(filteredHufflepuff);
    }

    wizardsRavenclaw= () =>{
        const {wizards, filteredRavenclaw} = this.state;

        this.setState({
            filteredRavenclaw: wizards.filter(wizard => wizard.house === "Ravenclaw")
        })
        console.log(filteredRavenclaw);
    }



    render() {
        const {wizards} = this.state
        console.log(wizards);

        return (

        <div className="App">
          <MainContainer wizards={wizards}/>
            <button onClick={this.wizardsRavenclaw}>Click me</button>
        </div>
    );
  }
}

export default App;
