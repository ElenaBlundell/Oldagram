const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

function postRender() {
        
        const main = document.getElementById("main")
        let oldgramPosts = ""

    for (let i = 0; i < posts.length; i++){
        
        const nameValue = posts[i].name
        const usernameValue = posts[i].username
        const locationValue = posts[i].location
        const avatarValue = posts[i].avatar
        const postValue = posts[i].post
        const commentValue = posts[i].comment
        const likesValue = posts[i].likes

        if (i === 0) {
            oldgramPosts = ""
        }else {
            oldgramPosts += `
            <div class="grey-break"></div>`
        }

        oldgramPosts += `
                <div class="artist align-items-center m-10-15">
                    <img id="avatar" src="${avatarValue}">
                    <div class="artist-info">
                        <h3 id="name">${nameValue}</h3>
                        <p id="location">${locationValue}</p>
                    </div>
                </div>
                <div class="post">
                    <img id="post" src="${postValue}">
                </div>
                <div class="icons m-10-15">
                    <img src="images/icon-heart.png">
                    <img src="images/icon-comment.png">
                    <img src="images/icon-dm.png">
                </div>
                <div class="photo-feedback m-10-15">
                    <p class="bold-text"><span id="likes">${likesValue}</span> likes</p>
                    <p><span id="username" class="bold-text">${usernameValue}</span><span id="comment"> ${commentValue}</span></p>
                </div>
                `
    }
    main.innerHTML += oldgramPosts
}

postRender();