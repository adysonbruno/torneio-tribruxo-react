import {Component} from "react";
import "./style.css"

class WizardCard extends Component{
    render() {
        const {imageLink, name, house, gender, alive} = this.props;
        return (
            <div>
                <figure>
                    <img src={imageLink} alt={name}/>
                </figure>
                <h2>{name}</h2>
                <h3 className={"house"}>{house }</h3>
                <h3>{gender[0].toUpperCase() + gender.slice(1)}</h3>
                <h3>{(alive) ? "Alive": "Not Alive"}</h3>
            </div>
        );
    }
}

export default WizardCard;