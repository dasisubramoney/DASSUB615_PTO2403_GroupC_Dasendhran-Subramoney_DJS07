import React from "react"

function Meme() {
    return (
        <main>
            <form className="Form">
            <div>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Shut up"
                />
            </div>
    
            <div>
                <input
                        type="text"
                        id="name2"
                        name="name2"
                        placeholder="and take my money"
                />    
            </div>

            <button type="submit">Submit</button>

        </form>
        
        </main>
            
    )
}

export default Meme