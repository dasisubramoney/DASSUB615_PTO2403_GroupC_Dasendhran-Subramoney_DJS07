import React from "react"

function Meme() {

    // State to hold the meme object, including topText, bottomText, and randomImage URL
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" // Default meme image URL
    })

    // State to hold the list of all memes fetched from the API
    const [allMemes, setAllMemes] = React.useState([])

    // Fetch memes from the API when the component first renders
    React.useEffect(() => {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes) // Store the memes in state
        }
        getMemes()
    }, [])
    
     // Function to get a random meme image from the list
    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url // Get the URL of the random meme
        setMeme(prevMeme => ({
            ...prevMeme, // Keeps the previous state
            randomImage: url
        }))
        
    }

    // Function to handle text input changes for the top and bottom text
    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme, // Keeps the previous state
            [name]: value // Dynamically update topText or bottomText based on the input's name
        }))
    }
    

    return (
        <main>
           {/* Form for entering meme text and generating a new meme */}
            <div className="form">
            <div>
                {/* Input field for the top text */}
                <input
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
            </div>
    
            <div>
                {/* Input field for the bottom text */}
                <input
                       type="text"
                       placeholder="Bottom text"
                       className="form--input"
                       name="bottomText"
                       value={meme.bottomText}
                       onChange={handleChange}
                />    
            </div>
            {/* Button to fetch a new random meme image */}
            <button 
                type="submit" 
                className="form--button"
                onClick={getMemeImage}
            
            > Get a new meme image</button>

            </div>

            <div className="meme">
                 {/* Display the current meme image */}
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        
        </main>
            
    )
}

export default Meme