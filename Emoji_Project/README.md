
# Emoji Search Project

## Overview

This project allows users to search for emojis and display them in a table format. The search functionality updates the displayed emojis as the user types.

## JavaScript Functionality

### Emoji Data

In JavaScript, we define our emoji data as an array of objects. Each object represents an emoji and includes properties for the emoji icon, name, and description. These properties allow us to store and display emoji information.

### Displaying Emojis

To display emojis on the webpage, we use a function called `displayEmojis`. This function takes the emoji data and renders it in a table format. It creates table rows for each emoji, and within each row, it adds cells to display the emoji icon, name, and description. By dynamically generating these elements, we can ensure that our emoji data is presented neatly to the user.

### Searching Emojis

The core functionality of this project is the search feature. Users can input text into a search bar, and as they type, the emoji list updates to display only the emojis that match the search criteria. To implement this, we use a function called `searchEmoji`. This function listens for user input in the search bar and filters the emoji data based on the search query. It then calls the `displayEmojis` function to update the displayed emojis in real-time.

### Live Search

The live search functionality is achieved by adding an event listener to the search input field. Specifically, we listen for the `input` event, which triggers whenever the user types, deletes, or modifies text in the search bar. When this event occurs, the `searchEmoji` function is called, ensuring that the displayed emojis are always in sync with the user's input.

## Usage

1. Open the `index.html` file in a web browser.
2. Type into the search input field to filter emojis based on their names.
3. Emojis matching the search input will be displayed in the table.
4. You can view the emoji's icon, name, and description in the table rows.

Enjoy using the Emoji Search project!
