let contacts = [];
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
        <button onclick="openNotifications()">🔔 NOTIFICATIONS</button>
        <button onclick="openSocialFeed()">🌐 SOCIAL FEED</button>
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

        <div id="contactsList"></div>

        <button onclick="addContact()">＋ ADD CONTACT</button>
    `;

    showContacts();
}

function addContact() {
    document.body.innerHTML = `
        <h1>＋ ADD CONTACT</h1>

        <p>Contact Name</p>

        <input type="text" id="contactName" placeholder="Enter a contact name">

        <br><br>

        <button onclick="saveContact()">ADD</button>
    `;
}

function saveContact() {
    const name = document.getElementById("contactName").value.trim();

    if (name === "") {
        alert("Please enter a contact name.");
        return;
    }

    contacts.push(name);

    openContacts();
}

function showContacts() {
    const contactsList = document.getElementById("contactsList");

    if (contacts.length === 0) {
        contactsList.innerHTML = "<p>No contacts yet.</p>";
        return;
    }

    contactsList.innerHTML = "";

    contacts.forEach(function(name) {
        contactsList.innerHTML += `<p>👤 ${name}</p>`;
    });
}

function openPhotos() {
    document.body.innerHTML = `
        <h1>📸 PHOTOS</h1>

        <div id="photoList">
            <p>No photos yet.</p>
        </div>

        <br>

        <button onclick="addPhoto()">＋ ADD PHOTO</button>
        <button onclick="openPhone()">← BACK</button>
    `;
}

function addPhoto() {  
    document.body.innerHTML = `
        <h1>＋ ADD PHOTO</h1>

        <p>Choose a photo</p>

        <input type="file" accept="image/*" id="photoInput">

        <br><br>

        <button onclick="savePhoto()">ADD PHOTO</button>
        <button onclick="openPhotos()">← BACK</button>
    `;
}
 function savePhoto() {
    const input = document.getElementById("photoInput");

    if (input.files.length === 0) {
        alert("Please choose a photo.");
        return;
    }

    const file = input.files[0];
    const imageURL = URL.createObjectURL(file);

    document.body.innerHTML = `
        <h1>📸 PHOTOS</h1>

        <img src="${imageURL}" width="250">

        <br><br>

        <button onclick="addPhoto()">＋ ADD PHOTO</button>
        <button onclick="openPhone()">← BACK</button>
    `;
}

function openNotifications() {
    document.body.innerHTML = `
        <h1>🔔 NOTIFICATIONS</h1>

        <div id="notificationsList">

            <p>💬 <strong>Luna</strong> sent you a message.</p>

            <p>❤️ <strong>Emma</strong> liked your post.</p>

            <p>👥 <strong>Alex</strong> added you to a group chat.</p>

        </div>

        <br>

        <button onclick="openPhone()">← BACK</button>
    `;
} 

function openSocialFeed() {
    document.body.innerHTML = `
        <h1>🌐 SOCIAL FEED</h1>

        <button onclick="createPost()">＋ CREATE POST</button>

        <hr>

        <div id="feed">

            <div>
                <h3>👤 Luna</h3>
                <p>Had such a beautiful day today ✨</p>
                <p>❤️ 12 Likes · 💬 3 Comments</p>
            </div>

            <hr>

            <div>
                <h3>👤 Emma</h3>
                <p>New photo from tonight 📸</p>
                <p>❤️ 24 Likes · 💬 5 Comments</p>
            </div>

        </div>

        <br>

        <button onclick="openPhone()">← BACK</button>
    `;
} 

 function createPost() {
    document.body.innerHTML = `
        <h1>📝 CREATE POST</h1>

        <p>What do you want to post?</p>

        <textarea id="postText" placeholder="Write something..."></textarea>

        <br><br>

        <button onclick="publishPost()">PUBLISH</button>
        <button onclick="openSocialFeed()">← BACK</button>
    `;
}

 function publishPost() {
    const text = document.getElementById("postText").value.trim();

    if (text === "") {
        alert("Please write something.");
        return;
    }

    document.body.innerHTML = `
        <h1>🌐 SOCIAL FEED</h1>

        <button onclick="createPost()">＋ CREATE POST</button>

        <hr>

        <div id="feed">
            <div>
                <h3>👤 You</h3>
                <p>${text}</p>
                <p>❤️ 0 Likes · 💬 0 Comments</p>
            </div>

            <hr>

            <div>
                <h3>👤 Luna</h3>
                <p>Had such a beautiful day today ✨</p>
                <p>❤️ 12 Likes · 💬 3 Comments</p>
            </div>

            <hr>

            <div>
                <h3>👤 Emma</h3>
                <p>New photo from tonight 📸</p>
                <p>❤️ 24 Likes · 💬 5 Comments</p>
            </div>
        </div>

        <br>

        <button onclick="openPhone()">← BACK</button>
    `;
}
