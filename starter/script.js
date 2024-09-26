'use strict';

const random_num = Math.trunc(Math.random() * 21)
// document.querySelector(".mark").textContent = random_num;

let score = 20
let high_score = 0

const null_value = function (no_value) {
    document.querySelector(".message").textContent = no_value

}

document.querySelector(".check").addEventListener("click",
    function () {
        let guess = document.querySelector(".guess").value
        let my_value = Number(guess)
        if (!my_value) {
            null_value("Please enter a value")


        }
        else if (random_num === my_value) {
            document.querySelector(".message").textContent = "🎉  your guess is correct"
            document.querySelector(".mark").textContent = random_num;

            document.querySelector("body").style.backgroundColor = 'orange'
            document.querySelector(".message").style.fontSize = "30px"
            document.querySelector(".message").style.color = "red"
            let high_score = document.querySelector(".highscore").textContent
            let scored = document.querySelector(".score").textContent

            if (score > high_score) {
                high_score = scored
                document.querySelector(".highscore").textContent = high_score
            }
        }

        else if (random_num > my_value) {
            if (score > 0) {
                null_value("⬇︎ your guess is too low")
                score = score - 2
                document.querySelector(".score").textContent = score
            }
            else {
                null_value("you loose the game")

            }


        }
        else if (random_num < my_value) {
            if (score > 0) {
                null_value("⬆︎ your guess is too high")
                score = score - 2
                document.querySelector(".score").textContent = score
            }
            else {
                null_value("you loose the game")

            }

        }

    }
)

document.querySelector(".again").addEventListener("click",
    function () {
        document.querySelector("body").style.backgroundColor = "#222"
        null_value("Start guessing...")
        document.querySelector(".message").style.fontSize = "20px"
        document.querySelector(".message").style.color = "white"
        document.querySelector(".mark").textContent = "?"
        document.querySelector(".guess").value = ""
        score = 20;
        Math.trunc(Math.random() * 21)


    }
)







