import Button from './Button';

const arr = [
    'chanchito feliz',
    'chanchito triste',
    'chanchito emocionado',
]


const App = () => {
    const mivariable = false;
    if (mivariable) {
        return <h1>La variable es false</h1>
    } else {
        return (
            <div>
                <h1 onClick={(e) => console.log('click',e)}>hola mundo</h1>
                {arr.map(el => <h5 key={el}> {el}</h5>)}
                <Button onClick={() => console.log('Boton presionado')}>
                    OLA K HACE
                </Button>
            </div>
        )
    }
    
}

export default App