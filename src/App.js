import { Component } from 'react'

class Button extends Component {
  constructor(props) {
    super(props)
    console.log('Constructor',props);
  }

  componentDidMount() {
  console.log('ComponentDidMount');
  }

  render() {
    console.log('Ejecutando metodo del button')
    return (
      <button>
        Enviar
      </button>
    )
  } 
}


class App extends Component {
  state = {
    valor: 3
  }
  render() {
    console.log('Ejecutando APP component');
    return (
      <div>
        <h3>Toca el botoncito por un helado</h3>
        <Button chanchito = 'feliz'></Button>
        <br></br>
        <button className= {`${this.state.valor}`} onClick={() => this.setState({ valor: 2 })}>Heladito 🍿🌭</button>
      </div>
    )
  }
}

export default App;
