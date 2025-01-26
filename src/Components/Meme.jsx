import React from "react"

function Meme() {

    const [allMemes, setAllMemes] = React.useState(memesData)

    function getMemeImage(){
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
    }

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])
    
    console.log(allMemes)

    return (
        <main>
            <form className="form">
            <div>
                <input
                    type="text"
                    id="name"
                    className="form--input"
                    placeholder="Top text"
                />
            </div>
    
            <div>
                <input
                        type="text"
                        id="name2"
                        className="form--input"
                        placeholder="Bottom text"
                />    
            </div>

            <button 
                type="submit" 
                className="form--button"
                onClick={getMemeImage}
            
            > Get a new meme image</button>

        </form>
        
        </main>
            
    )
}

export default Meme