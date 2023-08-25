This is a simple HTML, CSS, and JavaScript code that allows a user to add paragraphs to a webpage.

Hosted Link : https://asgarsidd.github.io/JS_Assignment_All/day_9th/HW-9th/index.html

Step-by-Step Explanation
HTML
The HTML code creates a simple webpage with a text input, a button, and a div to hold the paragraphs.

<!DOCTYPE html>
<html>
<head>
    <title>Add Text to Paragraphs</title>
</head>
<body>
    <h1>Add Text to Paragraphs</h1>

    <input type="text" id="textInput" placeholder="Enter text">
    <button id="addButton">Add</button>

    <div id="output">
      
    </div>

    <script src="index.js"></script>
</body>
</html>

JavaScript
The JavaScript code adds a new paragraph to the webpage when the "Add" button is clicked.

const textInput = document.getElementById("textInput");
        const addButton = document.getElementById("addButton");
        const outputDiv = document.getElementById("output");

        addButton.addEventListener("click", () => {
            const text = textInput.value.trim();    //Remove extra spaces

            if (text !== "") {
                const paragraph = document.createElement("p");
                paragraph.textContent = text;
                outputDiv.appendChild(paragraph);
                textInput.value = "";    //Clear the input
            }
        });