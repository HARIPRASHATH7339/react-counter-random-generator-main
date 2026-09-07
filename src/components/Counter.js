import { useState } from "react"

const Counter = () => {

    const [count, setCount] = useState(0)

    return (
<section className="counter-card">
 <h2>Counter</h2>

<div className="counter-display"> {count}  </div>

    <div className="counter-buttons">
                <button onClick={() => count > 0 && setCount(count - 1)}> Decrement </button>

                <button onClick={() => setCount(count + 1)} > Increment </button>
            </div>

            <button
                className="reset-button"
                onClick={() => setCount(0)} >
                Reset
            </button>

            {count === 0 && (
                <p className="limit-message">
                    Minimum limit reached
                </p>
            )}

        </section>
    )
}

export default Counter