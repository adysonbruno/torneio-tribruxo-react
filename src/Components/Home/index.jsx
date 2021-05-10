import {Component} from "react";

import "./style.css"

class Home extends Component{
    render() {
        const {handleShowHome, changeWizards} = this.props;
        return (
            <div>
                <h2 className={"tournament-name"}>Torneio tribruxo</h2>
                <h3>Clique no botão para encontrar os feiticeiros!</h3>
                <button onClick={ () => {handleShowHome(); changeWizards()}} >Começar</button>
            </div>
        );
    }
}

export default Home;