window.addEventListener('offline', () => {
    window.alert("you are offline, this could create issues generating pages");
});

let clickCounter = 1;
document.getElementById("photo").addEventListener("click", () => {
    clickCounter++;
    if(clickCounter > 10){
        if(clickCounter >= 10 && clickCounter < 20){
            document.getElementById("header-text").innerText = "This was written on...";
        }
        else if(clickCounter >= 20 && clickCounter < 30){
            document.getElementById("header-text").innerText = "Trans Day of Visibility!";
        }
        else{
            document.getElementById("header-text").innerText = "Trans Pride!";
        }
    }
});


document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("sign-up-form");
    const email = document.getElementById("email");
    const num = document.getElementById("num");
    const message = document.getElementById("message");
    const option1 = document.getElementById("option1");
    const option2 = document.getElementById("option2");
    const option3 = document.getElementById("option3");
    const option4 = document.getElementById("option4");
    const name = document.getElementById("text");
    const textArea = document.getElementById("text-area");
    const emailPattern = email.getAttribute('pattern');
    let PLEASE = new RegExp(emailPattern);

    document.addEventListener("submit", () =>{
        event.preventDefault();
        console.log("Email:"+ email.value);
        console.log("Number:"+ num.value);
        if(name.value.trim() === ""){
            message.innerHTML = "<p>please state your name</p>";
            return;
        }
        if(email.value.trim() === "" && num.value.trim() === ""){
            message.innerHTML = "<p>please add either a phone number or email before submitting</p>";
            return;
        }
        if((!email.value.includes("@") || !PLEASE.test(email.value)) && (parseInt(num.value) < 1000000 || num.value === "")){
            console.log(PLEASE.test(email.value))
            message.innerHTML = "<p>please add a valid email or phone number</p>";
            return;
        }
         if (!option1.checked && !option2.checked && !option3.checked && !option4.checked) {
            console.log((parseInt(num.value) < 1000000 || num.value === ""))
            message.innerHTML = "<p>Please select one of the options under 'What do you need to contact me about?'</p>";
            return;
        }


        let selectedOption;
        if (option1.checked) {
            selectedOption = option1.value;
        } else if (option2.checked) {
            selectedOption = option2.value;
        } else if (option3.checked) {
            selectedOption = option3.value;
        } else if (option4.checked) {
            selectedOption = option4.value;
        }

        console.log("Selected option:", selectedOption);
        console.log("Name:", name.value);
        console.log("Email:", email.value);
        console.log("Phone Number:", num.value);
        if (textArea.value.trim() !== "") {
            console.log("The user also stated:", textArea.value);
        }
        message.innerHTML = "<p></p>";
    });
});



const page = document.documentElement;
const button1 = document.getElementById("button-box1");
const button2 = document.getElementById("button-box2");
const button3 = document.getElementById("button-box3");

button1.addEventListener("click", () => {
    page.style.setProperty('--backgroundColor', '#d2b2ee');
    page.style.setProperty('--titleBoxColor', '#ba87e3');
    page.style.setProperty('--navContainerColor', '#7600b6');
    page.style.setProperty('--navBoxColor', '#58009a');
    page.style.setProperty('--innerBoxColor', '#00b2ba');
    page.style.setProperty('--photoBorderColor', '#00594c');
});

button2.addEventListener("click", () => {
    page.style.setProperty('--backgroundColor', '#edb6d2');
    page.style.setProperty('--titleBoxColor', '#e191bb');
    page.style.setProperty('--navContainerColor', '#b5227c');
    page.style.setProperty('--navBoxColor', '#9e1768');
    page.style.setProperty('--innerBoxColor', '#00a658');
    page.style.setProperty('--photoBorderColor', '#037b33');
});

button3.addEventListener("click", () => {
    page.style.setProperty('--backgroundColor', '#d2c2b4');
    page.style.setProperty('--titleBoxColor', '#b29c88');
    page.style.setProperty('--navContainerColor', '#8494a3');
    page.style.setProperty('--navBoxColor', '#5c6c7a');
    page.style.setProperty('--innerBoxColor', '#b3b9a7');
    page.style.setProperty('--photoBorderColor', '#5e7c71');
});