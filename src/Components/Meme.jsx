import React from "react"

function Meme() {

    const [allMemes, setAllMemes] = React.useState(memesData)

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])
    
    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
        
    }

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }
    

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