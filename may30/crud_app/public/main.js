

const update = document.querySelector("#update-button");

update.addEventListener("click", () => {
    fetch("/quotes", {
        method: "put",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({
            name: "Darth Vadar",
            quote: "I find your lack of faith disturbing."
        })
    })
    .then(res => res.json())
    .then( res => {
        console.log(res);
        window.location.reload(true);
    });
});

const deleteButton = document.querySelector("#delete-button");

const messageSection = document.querySelector("#message");

deleteButton.addEventListener("click", () => {
    fetch("/quotes", {
        method: "delete",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            name: "Darth Vadar"
        })
    })
    .then(res => {
        if(res.ok) return res.json();
    })
    .then(data => {
        if(data === "No quote to delete") {
            messageSection.textContent = "No Darth Vadar quote to delete...";
        }
        else
        {
            window.location.reload(true);
        }
    })
})