import { Component } from 'react'

class App extends Component {
  render() {
    return (
      <div>
        <h3>Toca el botoncito por un helado</h3>
        <button onClick={() => console.log('HELADO')}>Heladito 🍿🌭</button>
      </div>
    )
  }
}

export default App;
