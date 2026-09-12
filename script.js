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

        <p>Universe Description</p>
        <textarea id="universeDescription" placeholder="Describe your universe..."></textarea>

        <br><br>

        <button onclick="saveUniverse()">CREATE</button>
    `;
}
function saveUniverse() {
    const name = document.getElementById("universeName").value.trim();
    const description = document.getElementById("universeDescription").value.trim();

    if (name === "") {
        alert("Please enter a universe name.");
        return;
    }

    let universes = JSON.parse(localStorage.getItem("universes")) || [];

    universes.push({
        name: name,
        description: description,
        createdAt: new Date().toISOString()
    });

    localStorage.setItem("universes", JSON.stringify(universes));

    document.body.innerHTML = `
        <h1>🌌 ${name}</h1>
        <p>${description}</p>

        <p>Your universe is ready.</p>

        <button onclick="createCharacter()">CREATE CHARACTER</button>
        <button onclick="openMyStories()">MY STORIES</button>
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
    const name = document.getElementById("characterName").value.trim();
    const age = document.getElementById("characterAge").value.trim();
    const personality = document.getElementById("characterPersonality").value.trim();
    const appearance = document.getElementById("characterAppearance").value.trim();
    const backstory = document.getElementById("characterBackstory").value.trim();

    if (name === "" || age === "") {
        alert("Please enter the character name and age.");
        return;
    }

    let characters = JSON.parse(localStorage.getItem("characters")) || [];

    characters.push({
        name: name,
        age: age,
        personality: personality,
        appearance: appearance,
        backstory: backstory
    });

    localStorage.setItem("characters", JSON.stringify(characters));

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
    let universes = JSON.parse(localStorage.getItem("universes")) || [];

    let universeList = "";

    if (universes.length === 0) {
        universeList = "<p>No universes created yet.</p>";
    } else {
        universes.forEach((universe, index) => {
            universeList += `
                <div>
                    <h3>🌌 ${universe.name}</h3>
                    <button onclick="openSavedUniverse(${index})">OPEN</button>
                </div>
                <hr>
            `;
        });
    }

    document.body.innerHTML = `
        <h1>MY STORIES</h1>

        <p>Create your own story and universe.</p>

        <button onclick="createUniverse()">＋ CREATE NEW STORY</button>

        <br><br>

        <h2>MY UNIVERSES</h2>

        ${universeList}

        <br>

        <button onclick="startGame()">← BACK</button>
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

    const chatBox = document.getElementById("chatBox");

    chatBox.innerHTML +=
        `<p><strong>You:</strong> ${message}</p>`;

    let response;

    const lowerMessage = message.toLowerCase();

    if (lowerMessage.includes("hello") || lowerMessage.includes("hi")) {
        response = "Hello! I'm Luna. It's nice to hear from you. 🌙";
    } else if (lowerMessage.includes("how are you")) {
        response = "I'm doing well. I've been thinking about the secrets of Eclipse. ✨";
    } else if (lowerMessage.includes("who are you")) {
        response = "I'm Luna. There's more to my story than I usually tell people.";
    } else if (lowerMessage.includes("eclipse")) {
        response = "Eclipse has many secrets. Some of them are better left undiscovered... 🌌";
    } else {
        response = "That's interesting. Tell me more.";
    }

    chatBox.innerHTML +=
        `<p><strong>Luna:</strong> ${response}</p>`;

    input.value = "";
}

function openProfile() {
    document.body.innerHTML = `
        <h1>👤 PROFILE</h1>

        <h2>Luna Vale</h2>

        <p>This is your character profile.</p>

        <button onclick="createCharacter()">EDIT CHARACTER</button>
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
               <button onclick="likePost(this)">❤️ 0 Likes</button>
<button onclick="commentPost()">💬 0 Comments</button>
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

   function likePost(button) { 
        let likes = parseInt(button.dataset.likes || "0");

    if (button.dataset.liked === "true") {
        likes--;
        button.dataset.liked = "false";
    } else {
        likes++;
        button.dataset.liked = "true";
    }

    button.dataset.likes = likes;
    button.innerHTML = `❤️ ${likes} Likes`;
}
function commentPost() {
    document.body.innerHTML = `
        <h1>💬 COMMENT</h1>

        <p>Write your comment:</p>

        <textarea id="commentText" placeholder="Write a comment..."></textarea>

        <br><br>

        <button onclick="publishComment()">POST COMMENT</button>
        <button onclick="openSocialFeed()">← BACK</button>
    `;
}

function publishComment() {
    const text = document.getElementById("commentText").value.trim();

    if (text === "") {
        alert("Please write a comment.");
        return;
    }

    document.body.innerHTML = `
        <h1>🌐 SOCIAL FEED</h1>

        <button onclick="createPost()">＋ CREATE POST</button>

        <hr>

        <div>
            <h3>👤 You</h3>
            <p>Your post</p>
            <p>❤️ 0 Likes</p>

            <div>
                <p>💬 <strong>You:</strong> ${text}</p>
                <button onclick="replyToComment()">↩️ REPLY</button>
            </div>
        </div>

        <br>

        <button onclick="openPhone()">← BACK</button>
    `;
}

function replyToComment() {
    document.body.innerHTML = `
        <h1>↩️ REPLY</h1>

        <p>Write your reply:</p>

        <textarea id="replyText" placeholder="Write a reply..."></textarea>

        <br><br>

        <button onclick="publishReply()">POST REPLY</button>
        <button onclick="openSocialFeed()">← BACK</button>
    `;
}

function publishReply() {
    const text = document.getElementById("replyText").value.trim();

    if (text === "") {
        alert("Please write a reply.");
        return;
    }

    document.body.innerHTML = `
        <h1>🌐 SOCIAL FEED</h1>

        <hr>

        <div>
            <h3>👤 You</h3>
            <p>Your post</p>

            <p>💬 <strong>You:</strong> Your comment</p>

            <div>
                <p>↳ <strong>You:</strong> ${text}</p>
            </div>
        </div>

        <br>

        <button onclick="openSocialFeed()">← BACK</button>
    `;
}

   function openSavedUniverse(index) {
    let universes = JSON.parse(localStorage.getItem("universes")) || [];
    let characters = JSON.parse(localStorage.getItem("characters")) || [];
    let universe = universes[index];

    if (!universe) {
        alert("Universe not found.");
        return;
    }

    let characterList = "";

    if (characters.length === 0) {
        characterList = "<p>No characters created yet.</p>";
    } else {
        characters.forEach((character) => {
            characterList += `
                <div>
                    <button onclick="openCharacter(${characters.indexOf(character)})">
    👤 ${character.name} — ${character.age} years old
</button>
                    <p>${character.age} years old</p>
                </div>
                <hr>
            `;
        });
    }

    document.body.innerHTML = `
        <h1>🌌 ${universe.name}</h1>

        <p>Your universe is ready.</p>

        <h2>CHARACTERS</h2>

        ${characterList}

        <button onclick="createCharacter()">＋ CREATE CHARACTER</button>

        <br><br>

        <button onclick="openMyStories()">← MY STORIES</button>
    `;
}


function openCharacter(index) {
    let characters = JSON.parse(localStorage.getItem("characters")) || [];
    let character = characters[index];

    if (!character) {
        alert("Character not found.");
        return;
    }

    document.body.innerHTML = `
        <h1>👤 ${character.name}</h1>

        <h2>${character.age} years old</h2>

        <h3>Personality</h3>
        <p>${character.personality}</p>

        <h3>Appearance</h3>
        <p>${character.appearance}</p>

        <h3>Backstory</h3>
        <p>${character.backstory}</p>

        <br>

        <button onclick="openChat()">💬 CHAT</button>
        <button onclick="openPhone()">📱 PHONE</button>

        <br><br>

        <button onclick="openMyStories()">← MY STORIES</button>
    `;
}
