const butt = document.getElementById("button");
const scorecontainer = document.getElementById("scorecontainer");
let counter = 0;

butt.onclick = function () {
    if (counter < 100) {
        scorecontainer.style.display = "block";
        counter++;

        scorecontainer.innerHTML = "Ви натиснули: " + counter + " разів";
        if (counter == 100) {
            scorecontainer.innerHTML = "Успішно. Видаю приз...";
            window.location.replace("https://gamlinskijoleg.github.io/prize/index.html");
        }
    }
};
