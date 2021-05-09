import {Component} from "react";

import WizardCard from "../WizardCard";

class MainContainer extends Component{


    render() {
        const {wizards} = this.props

        return (
            <div>
                {
                    wizards.map(wizard=>{
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