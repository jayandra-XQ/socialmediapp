let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");

/**
 * ! Buton Click -> Submit
 */
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("button clicked")
    formValidation();

});

/**
 * ! form validation function
 */
let formValidation = () => {
    if (input.value === "") {
        msg.innerHTML = "Post cannot be blank";
        console.log("failure")
    }
    else {
        console.log("success");
        msg.innerHTML = "";
        acceptData();
    }
};

/**
 * ! data is accepted
 */
let data = {};

let acceptData = () => {
    data["text"] = input.value;
    console.log(data);
    createPost();

}

/**
 * ! upload on screen
 */
let createPost = () => {
    posts.innerHTML +=
        `
    <div>
        <p>${data.text}</p>
        <span class="options">
            <i class="fa-solid fa-pen-to-square"></i>
            <i onClick="deletePost(this)" class="fa-solid fa-trash"></i>
        </span>
    </div>
    `;
    input.value =  "";
};

/**
 * ! Delete post
 */
let deletePost = (e) => {
    e.parentElement.parentElement.remove();
} 