document.querySelector('button').addEventListener('click', getDuck)


function getDuck(){
    let word = document.querySelector('input').value.toLowerCase()

    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then(res => res.json())
    .then(data => {
        console.log(data) 
        document.querySelector('.word').innerText = data[0].word.toUpperCase()
        let definitions = data[0].meanings[0].definitions[0].definition
        document.querySelector('.definition').innerText = definitions
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}