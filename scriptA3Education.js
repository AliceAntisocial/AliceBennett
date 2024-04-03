window.addEventListener('offline', () => {
    window.alert("you are offline, this could create issues generating pages");
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