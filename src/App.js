import Counter from "./components/Counter"
import RandomNumber from "./components/RandomNumber"

function App() {

    return (
        <div className="app">

            <header>
                <h1>React Pulse</h1>
                <p>Interactive Counter & Random Number Generator</p>
            </header>

            <main className="container">

                <Counter />

                <RandomNumber />

            </main>

        </div>
    )
}

export default App