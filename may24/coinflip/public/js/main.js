
const coinflipButton = document.querySelector("#flipper");
coinflipButton.addEventListener("click", coinflip);


async function coinflip() {
    const resultResponse = await fetch("/api");
    const result = await resultResponse.json();
    const resultLocation = document.querySelector("#result");

    console.log(result);
    resultLocation.innerText = result.flipResult;
}