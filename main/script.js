const mainBtn = document.getElementById("starting-button");
const blinkingEye = document.getElementById("img");
const header = document.getElementById("header");
const mainText = document.getElementById("main-text");
const checkbox = document.getElementById("checkbox");
const chooseVolume = document.getElementById("sound-volume");
const keyButton = document.getElementById("key-button");
const label = document.getElementById("label");
const wrapper = document.getElementById("wrapper");
const textContainer = document.getElementById("text-container");
const counter = document.getElementById("counter");
const circle = document.getElementById("circle").style;
const chooseSound = document.getElementById("sound-pic");
const soundsList = document.getElementById("sounds-list");
const allSoundButtons = document.querySelectorAll("#sounds-list span");
const allElements = document.querySelectorAll("body *");
const volumesContainer = document.getElementById("soundrange-container");
const soundRange = document.getElementById("sound-range");
const recommendations = document.getElementById("recomendations");
const popupBox = document.getElementById("popup-box");

let currentVolume = 10;
let audio1 = new Audio("/misc/sounds/sound1.mp3");
let audio2 = new Audio("/misc/sounds/sound2.mp3");
let audio3 = new Audio("/misc/sounds/sound3.mp3");
let audio4 = new Audio("/misc/sounds/sound4.mp3");
let currentVolumeMenuOpen = false;

let IsDoNotShowAgain = localStorage.getItem("IsDoNotShowAgain") === "true";
checkbox.checked = IsDoNotShowAgain;

const allAudios = [audio1, audio2, audio3, audio4];
let intervalDuration = 1000;
let currentCounter = 20;
let currentSoundMenuOpen = false;
let currentAudio = audio1;

recommendations.addEventListener("click", function () {
    popupBox.style.display = "flex";
    setTimeout(() => {
        popupBox.style.opacity = 1;
    }, 600);
    setTimeout(() => {
        setTimeout(() => {
            popupBox.style.display = "none";
        }, 600);
        popupBox.style.opacity = 0;
    }, 3000);
});

document.querySelectorAll("body *:not(#sound-pic):not(#change-sound-button):not(#sounds-list):not(li):not(#nav)").forEach((element) => {
    element.onclick = function () {
        if (currentSoundMenuOpen == true) {
            soundsList.style.opacity = "0";
            currentSoundMenuOpen = false;
            setTimeout(() => {
                soundsList.style.display = "none";
            }, 300);
        }
    };
});

document.querySelectorAll("body *:not(#soundrange-container):not(#nav):not(#sound-volume):not(input)").forEach((element) => {
    element.onclick = function () {
        if (currentVolumeMenuOpen == true) {
            volumesContainer.style.opacity = "0";
            currentVolumeMenuOpen = false;
            setTimeout(() => {
                volumesContainer.style.display = "none";
            }, 300);
        }
    };
});

chooseSound.onclick = function () {
    if (currentSoundMenuOpen) {
        soundsList.style.opacity = "0";
        currentSoundMenuOpen = false;
        setTimeout(() => {
            soundsList.style.display = "none";
        }, 300);
    } else {
        soundsList.style.display = "flex";
        setTimeout(() => {
            soundsList.style.opacity = "1";
            currentSoundMenuOpen = true;
        }, 30);
    }
};

chooseVolume.addEventListener("click", function () {
    if (currentVolumeMenuOpen) {
        volumesContainer.style.opacity = "0";
        currentVolumeMenuOpen = false;
        setTimeout(() => {
            volumesContainer.style.display = "none";
        }, 300);
    } else {
        volumesContainer.style.display = "flex";
        setTimeout(() => {
            volumesContainer.style.opacity = "1";
            currentVolumeMenuOpen = true;
        }, 30);
    }
});

allSoundButtons.forEach((element) => {
    element.onclick = function () {
        allAudios.forEach((audioElement) => {
            audioElement.pause();
            audioElement.currentTime = 0;
        });

        chooseSound.innerHTML = element.innerHTML;

        const audioMap = {
            music_note: audio1,
            piano: audio2,
            speaker: audio3,
            music_off: audio4,
        };
        const audioToPlay = audioMap[element.innerHTML];
        if (audioToPlay) {
            currentAudio = audioToPlay;
            audioToPlay.play();
        }
    };
});

soundRange.onchange = function () {
    currentVolume = soundRange.value;
    allAudios.forEach((element) => {
        element.volume = currentVolume / 10;
    });
    currentAudio.play();
};

checkbox.onchange = function () {
    IsDoNotShowAgain = checkbox.checked;
    localStorage.setItem("IsDoNotShowAgain", IsDoNotShowAgain);
};

function removeItems(blacklist) {
    const allElements = document.querySelectorAll("body *");
    allElements.forEach((element) => {
        let shouldRemove = true;

        blacklist.forEach((selector) => {
            if (element.closest(selector) || element.matches(selector)) {
                shouldRemove = false;
            }
        });
        if (shouldRemove) {
            element.style.transition = "0.3s";
            element.style.opacity = "0";
            setTimeout(() => {
                element.remove();
            }, 300);
        }
    });
}

const firstPage = function function1() {
    blinkingEye.style.left = "0px";
    blinkingEye.style.top = "0px";
    blinkingEye.style.margin = "10px";
    blinkingEye.style.transform = "translate(0%,0%)";
    blinkingEye.style.scale = "0.5";
    textContainer.style.left = "0px";
    textContainer.style.top = "50%";

    const blacklist = [
        "#popup-box",
        "#img",
        "#change-language-button",
        "#change-sound-button",
        "#change-volume",
        "#nav",
        "#header",
        "#main-text",
        "#checkbox",
        "#key-button",
        "#label",
        "#wrapper",
        "#text-container",
        "#counter",
        "#circle",
        "#grid",
        "footer",
    ];

    removeItems(blacklist);
};

const main = function Main() {
    let blacklist = [
        "#img",
        "nav",
        "#change-language-button",
        "#change-sound-button",
        "#change-volume",
        "#text-container",
        "#header",
        "#main-text",
        "#counter",
        "#grid",
        "#circle",
        "footer",
    ];
    removeItems(blacklist);
    mainText.innerHTML = "Заплющіть очі і не відкривайте до того, як почуєте звуковий сигнал";
    textContainer.style.top = "30%";
    counter.style.left = "50%";
    header.style.justifyContent = "center";
    header.style.display = "flex";
    mainText.style.position = "relative";
    mainText.style.top = "20px";
    circle.display = "flex";
    textContainer.style.left = "0px";
    blinkingEye.style.left = "0px";
    blinkingEye.style.top = "0px";
    blinkingEye.style.margin = "10px";
    blinkingEye.style.transform = "translate(0%,0%)";
    blinkingEye.style.scale = "0.5";
    textContainer.style.left = "0px";

    currentCounter = 20;
    counter.innerHTML = currentCounter;
    const interval1 = setInterval(() => {
        counter.innerHTML = currentCounter;
        currentCounter -= 1;
        header.style.textAlign = "center";
        mainText.style.textAlign = "center";

        if (currentCounter < 0) {
            clearInterval(interval1);
            currentAudio.play();

            circle.animation = "moveUPDOWN 4s forwards infinite";
            header.innerHTML = "Вгору-вниз";
            mainText.innerHTML = "На секунду затримуйте погляд у верхній та нижній точках";

            currentCounter = 20;
            counter.innerHTML = currentCounter;
            const interval2 = setInterval(() => {
                counter.innerHTML = currentCounter;
                currentCounter -= 1;

                if (currentCounter < 0) {
                    clearInterval(interval2);
                    currentAudio.play();

                    circle.animation = "none";
                    circle.display = "none";
                    header.innerHTML = "Покліпайте очима";
                    mainText.innerHTML = "Покліпайте очима або прикрийте очі до сигналу";

                    currentCounter = 20;
                    counter.innerHTML = currentCounter;
                    const interval3 = setInterval(() => {
                        counter.innerHTML = currentCounter;
                        currentCounter -= 1;

                        if (currentCounter < 0) {
                            clearInterval(interval3);
                            currentAudio.play();

                            circle.display = "flex";
                            circle.animation = "moveLEFTRIGHT 4s forwards infinite";
                            header.innerHTML = "Вліво-вправо";
                            mainText.innerHTML = "Погляд відводьте максимально, але щоб не було напруги в очах";

                            currentCounter = 20;
                            counter.innerHTML = currentCounter;
                            const interval4 = setInterval(() => {
                                counter.innerHTML = currentCounter;
                                currentCounter -= 1;

                                if (currentCounter < 0) {
                                    clearInterval(interval4);
                                    currentAudio.play();

                                    circle.display = "flex";
                                    circle.animation = "moveDIAGONALLY 4s forwards infinite";
                                    header.innerHTML = "По діагоналі";
                                    mainText.innerHTML = "Дивіться по кутах, круг покаже, як";

                                    currentCounter = 20;
                                    counter.innerHTML = currentCounter;
                                    const interval5 = setInterval(() => {
                                        counter.innerHTML = currentCounter;
                                        currentCounter -= 1;

                                        if (currentCounter < 0) {
                                            clearInterval(interval5);
                                            currentAudio.play();

                                            circle.display = "none";
                                            header.innerHTML = "Покліпайте очима";
                                            mainText.innerHTML = "Покліпайте очима або прикрийте очі до сигналу";

                                            currentCounter = 20;
                                            counter.innerHTML = currentCounter;
                                            const interval6 = setInterval(() => {
                                                counter.innerHTML = currentCounter;
                                                currentCounter -= 1;

                                                if (currentCounter < 0) {
                                                    clearInterval(interval6);
                                                    currentAudio.play();

                                                    circle.display = "flex";
                                                    circle.animation = "moveBYCLOCKARROW 4s linear infinite";
                                                    header.innerHTML = "За годинниковою стрілкою";
                                                    mainText.innerHTML = "Виконуйте плавно, не треба поспішати";

                                                    currentCounter = 20;
                                                    counter.innerHTML = currentCounter;
                                                    const interval7 = setInterval(() => {
                                                        counter.innerHTML = currentCounter;
                                                        currentCounter -= 1;

                                                        if (currentCounter < 0) {
                                                            clearInterval(interval7);
                                                            currentAudio.play();

                                                            circle.animation = "moveBYSPIRAL 4s forwards infinite";
                                                            header.innerHTML = "По спіралі";
                                                            mainText.innerHTML = "Робіть не менше, ніж чотири кола очима за раз";
                                                            counter.innerHTML = currentCounter;
                                                            currentCounter = 20;
                                                            const interval8 = setInterval(() => {
                                                                counter.innerHTML = currentCounter;
                                                                currentCounter -= 1;

                                                                if (currentCounter < 0) {
                                                                    clearInterval(interval8);
                                                                    currentAudio.play();

                                                                    circle.display = "none";
                                                                    header.innerHTML = "Покліпайте очима";
                                                                    mainText.innerHTML = "Покліпайте очима або прикрийте очі до сигналу";

                                                                    currentCounter = 20;
                                                                    const interval9 = setInterval(() => {
                                                                        counter.innerHTML = currentCounter;
                                                                        currentCounter -= 1;

                                                                        if (currentCounter < 0) {
                                                                            clearInterval(interval9);
                                                                            currentAudio.play();

                                                                            header.innerHTML = "Там-тут";
                                                                            mainText.innerHTML = "Подивіться на предмет за пристроєм, потім на пристрій";

                                                                            currentCounter = 20;
                                                                            const interval10 = setInterval(() => {
                                                                                counter.innerHTML = currentCounter;
                                                                                currentCounter -= 1;

                                                                                if (currentCounter < 0) {
                                                                                    clearInterval(interval10);
                                                                                    currentAudio.play();

                                                                                    header.innerHTML = "Розслабтесь";
                                                                                    mainText.innerHTML = "Заплющіть очі, залишилось небагато";

                                                                                    currentCounter = 20;
                                                                                    const interval11 = setInterval(() => {
                                                                                        counter.innerHTML = currentCounter;
                                                                                        currentCounter -= 1;

                                                                                        if (currentCounter < 0) {
                                                                                            clearInterval(interval11);
                                                                                            currentAudio.play();

                                                                                            textContainer.style.top = "50%";
                                                                                            header.innerHTML =
                                                                                                "Ви молодець! Якщо захочете пройти заняття ще раз, то чекаємо вас на нашому сайті.";
                                                                                            header.style.top = "50%";
                                                                                            header.style.transform = "translate(-50%,-50%)";
                                                                                            header.style.marginLeft = "0px";
                                                                                            header.style.marginTop = "100px";
                                                                                            header.style.left = "50%";
                                                                                            header.style.transition = "0s";
                                                                                            mainText.innerHTML = "";
                                                                                            counter.innerHTML = "";
                                                                                            blinkingEye.style.height = "90px";
                                                                                            blinkingEye.style.position = "absolute";
                                                                                            blinkingEye.style.transform = "translate(-50%, -50%)";
                                                                                            blinkingEye.style.left = "50%";
                                                                                            blinkingEye.style.top = "20%";
                                                                                            blinkingEye.style.margin = "0px";
                                                                                            blinkingEye.style.scale = "1";
                                                                                        }
                                                                                    }, intervalDuration);
                                                                                }
                                                                            }, intervalDuration);
                                                                        }
                                                                    }, intervalDuration);
                                                                }
                                                            }, intervalDuration);
                                                        }
                                                    }, intervalDuration);
                                                }
                                            }, intervalDuration);
                                        }
                                    }, intervalDuration);
                                }
                            }, intervalDuration);
                        }
                    }, intervalDuration);
                }
            }, intervalDuration);
        }
    }, intervalDuration);
};

if (IsDoNotShowAgain == true) {
    mainBtn.onclick = main;
} else {
    mainBtn.onclick = firstPage;
}
keyButton.onclick = main;
