const butt = document.getElementById("button");
const scorecontainer = document.getElementById("scorecontainer");
let counter = 90;

butt.onclick = function () {
    if (counter < 100) {
        scorecontainer.style.display = "block";
        counter++;

        scorecontainer.innerHTML = "Ви натиснули: " + counter + " разів";
        if (counter == 10) {
            alert("Так тримати!");
        } else if (counter == 50) {
            alert("Вже половина!");
        } else if (counter == 100) {
            scorecontainer.innerHTML = "Успішно. Видаю приз...";
            window.location.href = "https://google.com";
        }
    }
};
