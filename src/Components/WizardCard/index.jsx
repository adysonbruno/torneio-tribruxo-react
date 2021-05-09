import {Component} from "react";

class WizardCard extends Component{
    render() {
        const {imageLink, name, house, gender, alive} = this.props;
        return (
            <div>
                <figure>
                    <img src={imageLink} alt={name}/>
                </figure>
                <h2>{name}</h2>
                <h3>{house}</h3>
                <h3>{gender}</h3>
                <h3>{`${alive}`}</h3>
            </div>
        );
    }
}

export default WizardCard;