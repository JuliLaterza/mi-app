import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import App from './nuevaApp'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
// El StrictMode sirve para que indique mayores errores en la consola (Mejores practicas)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//const root = ReactDOM.createRoot(document.getElementById('root'));

//const component = React.createElement('h1',null,"Hi"); //Creación de un componente de React.

// const Li = ({ children, estado, edad=19, casa=true }) => {
//     console.log(edad,casa)
//     if (casa) {
//         return <li> {children} estoy {estado}</li>
//     } else {
//         return <li> {children} estoy {edad}</li>
//     }
    
// } 

// const X = () => <ul>
//     <Li 
//     estado = {'feliz'}
//     casa = {false}
//     edad = {20}
//     >
//         Chanchito
//     </Li>
//     <Li estado = {'triste'}>
//         Chanchito
//     </Li>
//     <Li estado = {'borracho'} casa = {false}>Chanchito</Li>
// </ul> //Elemento funcional que retorna contenido JSX.



// root.render(X()); //Con este metodo renderizamos un elemento.



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
