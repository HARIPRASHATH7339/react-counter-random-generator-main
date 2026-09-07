import { useState } from "react"

const RandomNumber = () => {

  const [randomNumber, setRandomNumber] = useState(null)
    return (
 <section className="random-card">
      <h2>Random Number</h2>
            <div className="random-display">
                {randomNumber ?? "?"}
            </div>


            {randomNumber === null && (
                <p className="random-message">No number generated yet</p>
            )}

            <button
                className="generate-button"
                onClick={() =>  setRandomNumber(


                        Math.floor(Math.random() * 100) + 1
                    )
                } >
                Generate Random Number
            </button>

        </section>
    )
}

export default RandomNumber