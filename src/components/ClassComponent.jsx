import { Component } from "react";

class MyComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            contador: 0
        }
    }

    add = () => {
        this.setState({contador: this.state.contador + 1})
    }

    sub = () => {
        this.setState({contador: this.state.contador - 1})
    }

    render() {
        return (
            <div>
                <h1>Contador: {this.state.contador}</h1>
                <button onClick={this.add}>Adicionar</button>
                <button onClick={this.sub}>Diminuir</button>
            </div>
        )
    }
}

export default MyComponent;