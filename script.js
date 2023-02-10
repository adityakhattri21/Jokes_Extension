async function joke(){
    const recieve = await fetch("https://api.chucknorris.io/jokes/random");
    const data = await recieve.json();
    // console.log(data.value);

    const show = document.querySelector(".joke");
    show.innerText = data.value
}

joke();