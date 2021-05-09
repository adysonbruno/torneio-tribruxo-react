import {Component} from "react";
import './App.css';

import MainContainer from "./Components/MainContainer";

class App extends Component{

    state = {
        wizards: [],
        chosenWizards: []
    }

    componentDidMount() {

        fetch("http://hp-api.herokuapp.com/api/characters/students")
            .then((response) => response.json())
            .then((response) => this.setState({ wizards: response }))
            .then((response)=>{
                    const {wizards} = this.state
                    this.setState({
                        chosenWizards: this.choiceWizards(wizards)
                    }
                )})
    }

    wizardsGryffindor = (wizards) =>{

      return wizards.filter(wizard => wizard.house === "Gryffindor")

    }

    wizardsSlytherin = (wizards) =>{

        return wizards.filter(wizard => wizard.house === "Slytherin")

    }

    wizardsHufflepuff = (wizards) =>{

        return wizards.filter(wizard => wizard.house === "Hufflepuff")

    }

    wizardsRavenclaw = (wizards) =>{

        return wizards.filter(wizard => wizard.house === "Ravenclaw")

    }

    createArrayWithHouses = (wizards) => {
       let houseGryffindor =this.wizardsGryffindor(wizards);
       let houseSlytherin = this.wizardsSlytherin(wizards);
       let houseHufflepuff = this.wizardsHufflepuff(wizards);
       let houseRavenclaw = this.wizardsRavenclaw(wizards);

       return [houseGryffindor, houseSlytherin, houseHufflepuff, houseRavenclaw]
    }

    choiceThreeHouses = (wizards) =>{
        let houses = this.createArrayWithHouses(wizards);

        let first= Math.floor(Math.random() * 4);
        let second= Math.floor(Math.random() * 4);
        let third = Math.floor(Math.random() * 4);

        while(second === first){
            second= Math.floor(Math.random() * 4);
        }

        while(third === first || third === second){
            third = Math.floor(Math.random() * 4);
        }

        return [houses[first], houses[second], houses[third]]
    }

    choiceWizards = (wizards) => {
       let chosenHouses = this.choiceThreeHouses(wizards);
       let chosenWizard  = [];
       chosenHouses.forEach(house =>{
           let max = house.length;
           let randomPosition = Math.floor(Math.random() * (max));
           chosenWizard.push(house[randomPosition])
       })

       return chosenWizard;
    }

    render() {
        const {chosenWizards} = this.state;

        return (

        <div className="App">
          <MainContainer chosenWizards={chosenWizards}/>
        </div>
    );
  }
}

export default App;
