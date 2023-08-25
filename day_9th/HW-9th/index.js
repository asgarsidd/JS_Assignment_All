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