import Button from './Button';


const App = () => {
    return (
        <div>
            <h1 onClick={(e) => console.log('click',e)}>hola mundo</h1>
            <Button onClick={() => console.log('Boton presionado')}>
                OLA K HACE
            </Button>
        </div>
    )
}

export default App