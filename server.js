const express = require('express');


const app = express();


app.get('/alexia', (request, response) => {
    response.send(`
        <button
            id="clickMeButton"
        >
            Click Me!
        </button>

        <div
            id="content"
            style="display: none;"
        >
            You've gotta dance like there's nobody watching!
        </div>

        <style>
            body {
                display: grid;
                place-content: center;
            }

            #clickMeButton {
                background-color: slateblue;
                border: none;
                width: 400px;
                height: 100px;
                display: grid;
                place-content: center;
                outline: none;
                color: white;
                font-family: cursive;
                letter-spacing: 7px;
                font-size: 3rem;
                padding: 2rem;
                border-radius: 100px;
                box-shadow: 0px 10px 15px 3px hsla(200, 20%, 20%, 0.8);
                cursor: pointer;
                transition: background-color 300ms linear;
            }

            #content {
                position: absolute;
                bottom: 4rem;
                right: 4rem;
                font-size: 2rem;
                color: white;
                font-family: cursive;
            }

            #clickMeButton:hover {
                background-color: darkslateblue;
            }
        </style>

        <script>
            const quotes = [
                "You\'ve gotta dance like there\'s nobody watching.",
                "It is better to be hated for what you are than to be loved for what you are not.",
                "You only live once, but if you do it right, once is enough.",
                "To live is the rarest thing in the world. Most people exist, that is all.",
                "It does not do to dwell on dreams and forget to live",
            ];

            const button = document.getElementById("clickMeButton");
            const content = document.getElementById("content");

            let showButton = false;

            button.addEventListener('click', () => {
                const red = Math.random() * 255;
                const green = Math.random() * 255;
                const blue = Math.random() * 255;
                const color = 'rgb(' + red + ', ' + green + ', ' + blue + ')';

                const quoteIndex = Math.floor(Math.random() * 5);
                console.log('quoteIndex', quoteIndex);

                document.body.style.backgroundColor = color;

                if (showButton) {
                    content.style.display = "none";
                    showButton = false;
                } else {
                    content.style.display = "block";
                    content.innerHTML = quotes[quoteIndex];
                    showButton = true;
                }
            });
        </script>
    `);
});

app.get('*', (request, response) => {
    response.send('Nothing has been found');
});


app.listen(8082, () => {
    console.log('Alexia Server is running on port 8082');
});


/**
 * Red
 * Green
 * Blue
 *
 * RGB
 *
 * R - 254
 * G - 100
 * B - 200
 *
 * 0 ... 100
 * 0 ... 255
 *
 * 0 1 - baza 2
 *
 * 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2
 *
 * 2 ^ 8
 *
 * 1 2 3 4 5
 *
 * 0 1 2 3 4 5
 *
 *
 */
