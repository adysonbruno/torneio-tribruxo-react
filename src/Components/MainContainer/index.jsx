import {Component} from "react";

import WizardCard from "../WizardCard";

class MainContainer extends Component{


    render() {
        const {chosenWizards} = this.props;

        return (
            <div>
                {
                    chosenWizards.map((wizard) => {
                        return(
                            <WizardCard
                                imageLink = {wizard.image}
                                name = {wizard.name}
                                house = {wizard.house}
                                gender = {wizard.gender}
                                alive = {wizard.alive}
                            />
                        )
                    })
                }
            </div>
        );
    }
}

export default MainContainer;