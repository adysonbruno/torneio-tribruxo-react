import {Component} from "react";

import WizardCard from "../WizardCard";
import "./style.css"

class MainContainer extends Component{

    render() {
        const {chosenWizards} = this.props;

        return (
            <div className={"main-container"}>
                {
                    chosenWizards.map((wizard) => {
                        let className = "card"
                        if(wizard.house === "Gryffindor"){
                            className = `${className} house-gryffindor`;
                        }else if(wizard.house === "Slytherin"){
                            className = `${className} house-slytherin`;
                        }else if(wizard.house === "Hufflepuff"){
                            className =`${className} house-hufflepuff`;
                        }else{
                            className = `${className} house-ravenclaw`;
                        }

                        return(
                        <div className = {className}>
                                <WizardCard
                                    imageLink = {wizard.image}
                                    name = {wizard.name}
                                    house = {wizard.house}
                                    gender = {wizard.gender}
                                    alive = {wizard.alive}
                                />
                        </div>

                        )
                    })
                }
            </div>
        );
    }
}

export default MainContainer;