
document.getElementById("back-btn").addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "index.html";

})


function genrandomColor() {
    let randomcolor = "#" + Math.floor(Math.random() * 16777215).toString(16);

    return randomcolor;
}

