function startGame() {
    document.body.innerHTML = `
        <h1>EBR: UNIVERSE</h1>
        <p>Welcome to your universe.</p>

        <button onclick="createUniverse()">CREATE UNIVERSE</button>
        <button>MY STORIES</button>
        <button>SETTINGS</button>
    `;
}

function createUniverse() {
    document.body.innerHTML = `
        <h1>Create Your Universe</h1>

        <p>Universe Name</p>
        <input type="text" id="universeName" placeholder="Enter a name">

        <br><br>

        <button onclick="saveUniverse()">CREATE</button>
    `;
}

function saveUniverse() {
    const name = document.getElementById("universeName").value;

    if (name.trim() === "") {
        alert("Please enter a universe name.");
        return;
    }

    document.body.innerHTML = `
        <h1>${name}</h1>
        <p>Your universe has been created!</p>

        <button>CREATE CHARACTER</button>
    `;
}
