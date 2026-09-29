let contacts = [];

function enterUniverse() {
    const intro = document.getElementById("cinematicIntro");
    const opening = document.getElementById("openingScreen");

    if (!intro || !opening) {
        console.error("EBR: Intro or opening screen not found.");
        return;
    }

    intro.remove();
    opening.style.display = "flex";
}

function playMusic() {
    const music = document.getElementById("bgMusic");

    if (music) {
        music.volume = 0.45;

        music.play()
            .then(() => {
                console.log("EBR music started.");
            })
            .catch(error => {
                console.log("EBR music could not start:", error);
            });
    }
}

function skipIntro() {
    enterUniverse();
}

function startGame() {
    playMusic();
    showGirlIntroduction();
}

function showGirlIntroduction() {
    document.body.innerHTML = `
        <section class="character-introduction girl-introduction">

            <div class="magic-particles">
                ✦ · ✧ · ⋆ · ✦ · ✧ · ⋆ · ✦
            </div>

            <div class="magic-portal">
                <div class="portal-ring"></div>
                <div class="portal-ring portal-ring-two"></div>

               <img
    src="assets/ChatGPT%20Image%2014%20sept%202026%2C%2004_28_52%20a.m..png"
    class="intro-girl"
    alt="EBR Universe character"
/>
            </div>

            <div class="character-dialogue">
                <p>Welcome, would you like some help?</p>
            </div>

            <button class="character-continue" onclick="startMainMenu()">
                CONTINUE ✦
            </button>

        </section>
    `;
}
/* Intro automático de 60 segundos */

document.addEventListener("DOMContentLoaded", function() {

    setTimeout(function() {
        enterUniverse();
    }, 60000);

});


function startMainMenu() {
    document.body.innerHTML = `
        <main class="main-menu">

            <div class="menu-header">
                <p class="version">VERSION 1.0</p>
                <h1>EBR: UNIVERSE</h1>
                <p>Welcome to your universe.</p>
            </div>

            <section class="menu-options">

                <button class="menu-button active"
                    onclick="openReadStories()">
                    📖 READ STORIES
                    <span>AVAILABLE NOW</span>
                </button>

                <button class="menu-button"
                    onclick="showComingSoon('CREATE UNIVERSE')">
                    🌌 CREATE UNIVERSE
                    <span>COMING SOON</span>
                </button>

                <button class="menu-button"
                    onclick="showComingSoon('CHARACTERS')">
                    👤 CHARACTERS
                    <span>COMING SOON</span>
                </button>

                <button class="menu-button"
                    onclick="showComingSoon('CHAT')">
                    💬 CHAT
                    <span>COMING SOON</span>
                </button>

                <button class="menu-button"
                    onclick="showComingSoon('MY PHONE')">
                    📱 MY PHONE
                    <span>COMING SOON</span>
                </button>

                <button class="menu-button"
                    onclick="showComingSoon('SOCIAL')">
                    🌐 SOCIAL
                    <span>COMING SOON</span>
                </button>

                <button class="menu-button"
                    onclick="showComingSoon('GROUP CHATS')">
                    👥 GROUP CHATS
                    <span>COMING SOON</span>
                </button>

                <button class="menu-button"
                    onclick="showComingSoon('AI EXPERIENCES')">
                    ✨ AI EXPERIENCES
                    <span>COMING SOON</span>
                </button>

            </section>

            <p class="menu-footer">
                More experiences are coming to EBR: UNIVERSE.
            </p>

        </main>
    `;
}

function openSettings() {
    document.body.innerHTML = `
        <div class="settings-page">

            <h1>SETTINGS</h1>

            <button>🔒 Privacy</button>

            <button>🔔 Notifications</button>

            <button>🌎 Language</button>

            <button>🔠 Text Size</button>

            <button onclick="openAccount()">👤 My Account</button>

            <button>❓ Help & Support</button>

            <button onclick="startGame()">↩️ Back to Main Menu</button>

        </div>
    `;
}

function openAccount() {
    document.body.innerHTML = `
        <div class="account-page">

            <h1>MY ACCOUNT</h1>

            <p>Welcome to your EBR Universe account.</p>

            <button>👤 Profile</button>

            <button>🔐 Account & Security</button>

            <button>📧 Email</button>

            <button onclick="openSettings()">↩️ Back to Settings</button>

        </div>
    `;
}

function createUniverse() {
    document.body.innerHTML = `
        <div class="universe-page">

            <h1 style="font-size: 70px;">Create Your Universe</h1>

            <p style="font-size: 100px !important; color: red !important;">
    UNIVERSE NAME TEST
</p>
            <input
                type="text"
                id="universeName"
                placeholder="Enter a name"
                style="font-size: 24px; padding: 15px; width: 80%;"
            >

            <p style="font-size: 40px !important;">Universe Description</p>

            <textarea
                id="universeDescription"
                placeholder="Describe your universe..."
                style="font-size: 24px; padding: 15px; width: 80%; height: 200px;"
            ></textarea>

            <br><br>

            <button
                onclick="saveUniverse()"
                style="font-size: 24px; padding: 15px 40px;"
            >
                CREATE
            </button>

        </div>
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
    const currentCharacter = localStorage.getItem("currentCharacter");

    let characters = JSON.parse(localStorage.getItem("characters")) || [];
    let character = characters[currentCharacter];

    if (!character) {
        alert("Character not found.");
        return;
    }

    const chatKey = "chatMessages_" + currentCharacter;
    let messages = JSON.parse(localStorage.getItem(chatKey)) || [];

    let chatHTML = `
        <h1>💬 CHAT</h1>

        <h2>${character.name}</h2>

        <div id="chatBox">
            <p><strong>${character.name}:</strong> Hello. Welcome to Eclipse.</p>
    `;

    messages.forEach(message => {
        chatHTML += `
            <p><strong>${message.sender}:</strong> ${message.text}</p>
        `;
    });

    chatHTML += `
        </div>

        <br>

        <input type="text" id="messageInput" placeholder="Write a message">

        <button onclick="sendMessage()">SEND</button>

        <br><br>

        <button onclick="openCharacter(${currentCharacter})">← BACK TO CHARACTER</button>
    `;

    document.body.innerHTML = chatHTML;
}
async function sendMessage() {
    const input = document.getElementById("messageInput");
    const message = input.value.trim();

    if (message === "") {
        return;
    }

    const currentCharacter = localStorage.getItem("currentCharacter");

    let characters = JSON.parse(localStorage.getItem("characters")) || [];
    let character = characters[currentCharacter];

    if (!character) {
        alert("Character not found.");
        return;
    }

    const chatKey = "chatMessages_" + currentCharacter;
    const chatBox = document.getElementById("chatBox");

    chatBox.innerHTML +=
        `<p><strong>You:</strong> ${message}</p>`;

    input.value = "";

    chatBox.innerHTML +=
        `<p id="aiThinking"><strong>${character.name}:</strong> Thinking... ✨</p>`;

    try {
        const characterContext = `
You are ${character.name}, a character inside the EBR: UNIVERSE game.

Personality:
${character.personality || "Not specified"}

Appearance:
${character.appearance || "Not specified"}

Backstory:
${character.backstory || "Not specified"}

Stay in character while responding to the player.

Player message:
${message}
`;

        const response = await fetch("/api/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                message: characterContext
            })
        });

        const data = await response.json();

        const thinking = document.getElementById("aiThinking");

        if (thinking) {
            thinking.remove();
        }

        if (!response.ok) {
            throw new Error(data.error || "AI request failed");
        }

        const aiReply = data.reply;

        chatBox.innerHTML +=
            `<p><strong>${character.name}:</strong> ${aiReply}</p>`;

        let messages = JSON.parse(localStorage.getItem(chatKey)) || [];

        messages.push({
            sender: "You",
            text: message
        });

        messages.push({
            sender: character.name,
            text: aiReply
        });

        localStorage.setItem(chatKey, JSON.stringify(messages));

    } catch (error) {

        const thinking = document.getElementById("aiThinking");

        if (thinking) {
            thinking.remove();
        }

        chatBox.innerHTML +=
            `<p><strong>System:</strong> The AI could not respond right now. Please try again.</p>`;

        console.error(error);
    }
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


function openReadStories() {

    document.body.innerHTML = `
        <main class="read-stories-loading">

            <img
                src="assets/read-stories-loading.png"
                alt="EBR Read Stories"
                class="read-stories-loading-image"
            >

            <div class="loading-overlay">
                <div class="loading-content">

                    <p class="loading-brand">EBR: UNIVERSE</p>

                    <h1>📖 READ STORIES</h1>

                    <p class="loading-text">
                        ENTERING THE UNIVERSE...
                    </p>

                    <div class="loading-bar">
                        <div class="loading-progress"></div>
                    </div>

                    <p class="loading-chapter">
                        LOADING STORY...
                    </p>

                </div>
            </div>

        </main>
    `;

    setTimeout(() => {
        showStoriesCatalog();
    }, 3000);
}

 function showComingSoon(feature) {
    alert(
        feature +
        "\n\nCOMING SOON ✦\n\n" +
        "This experience is currently being developed for a future EBR: UNIVERSE update."
    );
}

function openStory(storyId) {

    if (storyId !== "first-story") {
        alert("Story not found.");
        return;
    }

    document.body.innerHTML = `
        <main class="story-page">

            <div class="story-page-header">

                <p>EBR: READ STORIES</p>

                <h1>THE FIRST STORY</h1>

                <p>
                    A new universe is waiting for you.
                    Enter the story and discover what happens next.
                </p>

            </div>

            <section class="season-section">

                <h2>SEASON 1</h2>

                <p>5 CHAPTERS</p>

                <div class="chapter-list">

                    <button onclick="openChapter(1)">
                        CHAPTER 1
                    </button>

                    <button onclick="openChapter(2)">
                        CHAPTER 2
                    </button>

                    <button onclick="openChapter(3)">
                        CHAPTER 3
                    </button>

                    <button onclick="openChapter(4)">
                        CHAPTER 4
                    </button>

                    <button onclick="openChapter(5)">
                        CHAPTER 5
                    </button>

                </div>

            </section>

            <button
                class="back-button"
                onclick="showStoriesCatalog()">
                ← BACK TO STORIES
            </button>

        </main>
    `;
}
 function showStoriesCatalog() {

    document.body.innerHTML = `
        <main class="stories-catalog-page">

            <header class="stories-catalog-header">
                <p class="stories-brand">EBR: UNIVERSE</p>

                <h1>📖 READ STORIES</h1>

                <p class="stories-subtitle">
                    Choose a story and enter its universe.
                </p>
            </header>

            <section class="stories-grid">

                <article class="story-card">

                    <div class="story-card-cover">
                        🌹
                    </div>

                    <div class="story-card-content">

                        <p class="story-label">
                            ORIGINAL STORY
                        </p>

                        <h2>THE FIRST STORY</h2>

                        <p class="story-description">
                            A new universe is waiting for you.
                            Meet new characters, discover secrets
                            and begin a story that is only yours to experience.
                        </p>

                        <div class="story-details">
                            <span>SEASON 1</span>
                            <span>·</span>
                            <span>5 CHAPTERS</span>
                        </div>

                        <button
                            class="story-read-button"
                            onclick="openStory('first-story')">
                            READ STORY ✦
                        </button>

                    </div>

                </article>

            </section>

            <button
                class="back-button stories-back"
                onclick="startMainMenu()">
                ← BACK
            </button>

        </main>
    `;
}

function openChapter(chapterNumber) {

    if (chapterNumber < 1 || chapterNumber > 5) {
        alert("Chapter not found.");
        return;
    }

    const chapters = {

        1: {
            title: "A NEW BEGINNING",
            background: "assets/chapter1-bedroom.png",

            dialogues: [

                {
                    speaker: "ELIZABETH",
                    text: "The night was unusually quiet.",
                    character: "elizabeth"
                },

                {
                    speaker: "ELIZABETH",
                    text: "Beyond the window, thousands of lights illuminated a city that never seemed to sleep.",
                    character: "elizabeth"
                },

                {
                    speaker: "MYSTERIOUS VOICE",
                    text: "Elizabeth...",
                    character: "mysterious"
                },

                {
                    speaker: "ELIZABETH",
                    text: "I froze. Someone had called my name.",
                    character: "elizabeth"
                },

                {
                    speaker: "MYSTERIOUS VOICE",
                    text: "Your story has already begun.",
                    character: "mysterious"
                },

                {
                  speaker: "ELIZABETH",
                 text: "Who are you?",
                character: "elizabeth",
               expression: "surprised",

              choice: {
            question: "What will Elizabeth do?",
            options: [
            {
                text: "Follow the voice.",
                action: "follow"
            },
            {
                text: "Ignore the voice.",
                action: "ignore"
            },
            {
                text: "Ask who they are.",
                action: "ask"
              }
              ]
           }
            },

                {
                    speaker: "MYSTERIOUS VOICE",
                    text: "That is something you will discover soon.",
                    character: "mysterious"
                }

            ]
        },

        2: {
            title: "THE UNKNOWN",
            background: "assets/chapter1-morning.png",

            dialogues: [

                {
                    speaker: "ELIZABETH",
                    text: "The next morning, something had changed.",
                    character: "elizabeth"
                },

                {
                    speaker: "ELIZABETH",
                    text: "A mysterious message appeared on my phone.",
                    character: "elizabeth"
                },

                {
                    speaker: "UNKNOWN",
                    text: "You shouldn't have ignored my warning.",
                    character: "mysterious"
                },

                {
                    speaker: "ELIZABETH",
                    text: "What warning?",
                    character: "elizabeth"
                }

            ]
        },

        3: {
            title: "THE SECRET",
            background: "assets/chapter1-secret.png",

            dialogues: [

                {
                    speaker: "ELIZABETH",
                    text: "I followed the mysterious clues.",
                    character: "elizabeth"
                },

                {
                    speaker: "MYSTERIOUS VOICE",
                    text: "You were never supposed to find this place.",
                    character: "mysterious"
                },

                {
                    speaker: "ELIZABETH",
                    text: "Then tell me why I am here.",
                    character: "elizabeth"
                }

            ]
        },

        4: {
            title: "THE CHOICE",
            background: "assets/chapter1-choice.png",

            dialogues: [

                {
                    speaker: "ELIZABETH",
                    text: "Every answer seemed to create another question.",
                    character: "elizabeth"
                },

                {
                    speaker: "MYSTERIOUS VOICE",
                    text: "Now you must decide what happens next.",
                    character: "mysterious"
                },

                {
                    speaker: "ELIZABETH",
                    text: "There has to be another way.",
                    character: "elizabeth"
                }

            ]
        },

        5: {
            title: "THE BEGINNING OF EVERYTHING",
            background: "assets/chapter1-ending.png",

            dialogues: [

                {
                    speaker: "ELIZABETH",
                    text: "The first chapter of my new life had reached its end.",
                    character: "elizabeth"
                },

                {
                    speaker: "MYSTERIOUS VOICE",
                    text: "It was only the beginning.",
                    character: "mysterious"
                }

            ]
        }
    };

    const chapter = chapters[chapterNumber]; 

     const characterExpressions = {
    elizabeth: {
        neutral: "assets/elizabeth-neutral.png",
        surprised: "assets/characters/elizabeth-surprised.png",
        worried: "assets/characters/elizabeth-worried.png",
        serious: "assets/characters/elizabeth-serious.png"
    }
};
    let dialogueIndex = 0;

    function renderDialogue() {

        const dialogue = chapter.dialogues[dialogueIndex];
         const expression = dialogue.expression || "neutral";

const characterImage =
    characterExpressions[dialogue.character]?.[expression] ||
    characterExpressions[dialogue.character]?.neutral;

        
        const elizabethActive =
            dialogue.character === "elizabeth"
                ? "active-character"
                : "inactive-character";

        const mysteriousActive =
            dialogue.character === "mysterious"
                ? "active-character"
                : "inactive-character";

        document.body.innerHTML = `

            <main
                class="visual-novel"
                style="--scene-background: url('${chapter.background}')"
            >

                <div class="scene-background"></div>

                <div class="scene-glow"></div>

                <div class="scene-particles">
                    ✦　·　✧　·　⋆　·　✦　·　✧
                </div>

                <header class="visual-novel-header">

                    <div>
                        <p>EBR ✦ UNIVERSE</p>
                        <span>
                            THE FIRST STORY · SEASON 1
                        </span>
                    </div>

                    <div class="visual-novel-icons">
                        <button>☰</button>
                        <button>♡</button>
                        <button>⚙</button>
                    </div>

                </header>

                <div class="scene-location">
                    ✦ ${chapter.title}
                </div>


                <div class="character-layer">

                    <div class="${elizabethActive} character-slot character-left">

                        <img
                           src="assets/elizabeth-neutral.png"
                            class="visual-novel-character"
                            alt="Elizabeth"
                        >

                    </div>


                    <div class="${mysteriousActive} character-slot character-right">

                        <div class="mysterious-character">
                            ✦
                        </div>

                    </div>

                </div>


                <section class="visual-novel-dialogue">

                    <div class="character-name">
                        ✦ ${dialogue.speaker}
                    </div>

                    <div class="dialogue-text">

                        <p>
                            ${dialogue.text}
                        </p>

                    </div>

                    <div class="dialogue-controls">

                        <button
                            onclick="showStoriesCatalog()">
                            MENU
                        </button>

                        ${
                            dialogueIndex < chapter.dialogues.length - 1
                            ? `
                                <button
                                    class="next-button"
                                    onclick="nextDialogue()">
                                    NEXT →
                                </button>
                            `
                            : chapterNumber < 5
                            ? `
                                <button
                                    class="next-button"
                                    onclick="openChapter(${chapterNumber + 1})">
                                    NEXT CHAPTER →
                                </button>
                            `
                            : `
                                <button
                                    class="next-button"
                                    onclick="openStory('first-story')">
                                    CHAPTERS
                                </button>
                            `
                        }

                    </div>

                </section>


                <div class="chapter-progress">

                    ✦ ${chapterNumber} / 5

                    <div class="progress-line">

                        <div
                            style="width:${chapterNumber * 20}%">
                        </div>

                    </div>

                </div>

            </main>
        `;
    }


    window.nextDialogue = function() {

        if (dialogueIndex < chapter.dialogues.length - 1) {

            dialogueIndex++;

            renderDialogue();
        }
    };


    renderDialogue();
}
