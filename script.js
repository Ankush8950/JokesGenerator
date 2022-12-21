const joke = document.getElementById("joke")
const jokeBtn = document.getElementById("jokeBtn")


jokeBtn.addEventListener("click",async function(){
    const res = await fetch('https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist&type=single')
    const data = await res.json()
    
    
    joke.innerHTML = data.joke
})