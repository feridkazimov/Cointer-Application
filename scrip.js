
let content1 = document.querySelector(".zero");
let minus = document.querySelector(".minus");
let plus = document.querySelector(".plus");
let Reset = document.querySelector(".Reset");

let number = 0;

function coloring() {
    number++
    content1.textContent = number;
    if (number > 0) {
        content1.style.color = "green";
    }
    if (number === 0) {
        content1.style.color = "black"
    }
}
function decremnnt() {
    if (number > 0) {
        number--
        content1.textContent = number;
    }
    if (number === 0) {
        content1.style.color = "black"
    }
}
function ResetValue() {
    number = 0;
    content1.textContent = number;
    content1.style.color = "black"
}

plus.addEventListener("click", coloring);
minus.addEventListener("click", decremnnt);
Reset.addEventListener("click", ResetValue);

