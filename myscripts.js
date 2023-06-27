const button = document.querySelector("input");
const paragraph = document.querySelector("p");

button.addEventListener("click", updateButton)

function updateButton() {
    if (button.value === "Click This") {
        button.value = "Clicked!";
        paragraph.textContent = "You clicked me!";
    } else {
        button.value = "Click This";
        paragraph.textContent = ""
    }
}