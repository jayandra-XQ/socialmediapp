let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");

/**
 * ! Buton Click -> Submit
 */
form.addEventListener("submit", (e) =>{
    e.preventDefault();
    console.log("button clicked")
    formValidation();
    
});

/**
 * ! form validation function
 */
let formValidation = () => {
    if(input.value === ""){
        msg.innerHTML = "Post cannot be blank";
        console.log("failure")
    }
    else{
        console.log("success");
        msg.innerHTML = "";
    }
}
