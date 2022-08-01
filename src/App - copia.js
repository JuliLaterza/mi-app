import logo from './logo.svg';
import './main.css';
//import './App.css';



const boxShadow = {
  boxShadow:'0 5px 3px rgba(0, 0, 0, 0.5)'
}

const estilo = (bg='#333') => ({
  backgroundColor: bg,
  color: '#fff',
  padding: '10px 15px',
  margin: '10px 15px'
})
// Tener en cuenta el SPREAD Operation (serían los ... para que pueda tomar todos los atributos y sumarlos) style={{...boxShadow ,...estilo()}}
const Li = ({ children }) => {
  return (
    <li className="clase-li">{children}</li>
  )
}
//style= {{...boxShadow, ...estilo('#057')}}
const App = () => {
  const valor = 'Feliz';
  return (
    <ul className ="clase-css">
      <Li estado = 'feliz'>hola</Li>
    </ul>
  );
}

export default App;
