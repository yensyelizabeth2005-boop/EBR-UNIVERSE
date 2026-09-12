function startGame() {
    document.body.innerHTML = `
        <h1>EBR: UNIVERSE</h1>
        <p>Welcome to your universe.</p>

        <button onclick="createUniverse()">CREATE UNIVERSE</button>
        <button onclick="openMyStories()">MY STORIES</button>
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

        <button onclick="createCharacter()">CREATE CHARACTER</button>
    `;
}

function createCharacter() {
    document.body.innerHTML = `
        <h1>Create Your Character</h1>

        <p>Name</p>
        <input type="text" id="characterName" placeholder="Character name">

        <p>Age</p>
        <input type="number" id="characterAge" placeholder="Age">

        <p>Personality</p>
        <textarea id="characterPersonality" placeholder="Character personality"></textarea>

        <p>Appearance</p>
        <textarea id="characterAppearance" placeholder="Character appearance"></textarea>

        <p>Backstory</p>
        <textarea id="characterBackstory" placeholder="Character backstory"></textarea>

        <br><br>

        <button onclick="saveCharacter()">CREATE CHARACTER</button>
    `;
}

function saveCharacter() {
    const name = document.getElementById("characterName").value;
    const age = document.getElementById("characterAge").value;

    if (name.trim() === "" || age.trim() === "") {
        alert("Please enter the character name and age.");
        return;
    } 

    document.body.innerHTML = `
        <h1>${name}</h1>
        <h2>${age} years old</h2>

        <p>Character created successfully!</p>

        <br>

        <button onclick="openChat()">💬 CHAT</button>
        <button onclick="openPhone()">📱 PHONE</button>
        <button onclick="openProfile()">👤 PROFILE</button>
        <button onclick="openMyStories()">MY STORIES</button>
    `;
}

function openMyStories() {
    document.body.innerHTML = `
        <h1>MY STORIES</h1>

        <p>Create your own story and universe.</p>

        <button onclick="createUniverse()">＋ CREATE NEW STORY</button>

        <br><br>

        <h2>MY UNIVERSES</h2>

        <p>No universes created yet.</p>
    `;
}
function openChat() {
    document.body.innerHTML = `
        <h1>CHAT</h1>

        <div id="chatBox">
            <p><strong>Character:</strong> Hello. Welcome to Eclipse.</p>
        </div>

        <br>

        <input type="text" id="messageInput" placeholder="Write a message">

        <button onclick="sendMessage()">SEND</button>
    `;
}

function sendMessage() {
    const input = document.getElementById("messageInput");
    const message = input.value.trim();

    if (message === "") {
        return;
    }

    document.getElementById("chatBox").innerHTML +=
        `<p><strong>You:</strong> ${message}</p>`;

    input.value = "";
}

function openProfile() {
    document.body.innerHTML = `
        <h1>PROFILE</h1>
        <p>This is your character profile.</p>
    `;
}

function openPhone() {
    document.body.innerHTML = `
        <h1>📱 PHONE</h1>

        <p>Welcome to your character's phone.</p>

        <button onclick="openMessages()">💬 MESSAGES</button>
       <button onclick="openContacts()">👥 CONTACTS</button>
        <button onclick="openPhotos()">📸 PHOTOS</button>
        <button>🔔 NOTIFICATIONS</button>
    `;
}
   
function openMessages() {
    document.body.innerHTML = `
        <h1>💬 MESSAGES</h1>

        <p>No messages yet.</p>

        <button>＋ NEW MESSAGE</button>
    `;
}

function openContacts() {
    document.body.innerHTML = `
        <h1>👥 CONTACTS</h1>

        <p>No contacts yet.</p>

        <button>＋ ADD CONTACT</button>
    `;
}

function openPhotos() {
    document.body.innerHTML = `
        <h1>📸 PHOTOS</h1>

        <p>No photos yet.</p>

        <button>＋ ADD PHOTO</button>
    `;
}
