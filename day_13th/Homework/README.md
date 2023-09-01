# Mini Calendar Web Application

This is a simple web application that displays the current month name, day name, day number, and year in a visually appealing calendar format. The application is built using HTML, CSS, and JavaScript and is contained within a single HTML file named `index.html`.

## Features

- Displays the current month name, day name, day number, and year.
- Stylish and visually appealing design.
- Different background colors for the month name and year.

## How It Works

The calendar is created by combining HTML for the structure, CSS for styling, and JavaScript for dynamic content generation. Here's an overview of how the task was accomplished:

1. **HTML Structure**: The HTML file defines a simple structure with div elements to display the month name, day name, day number, and year. Each of these elements has an associated ID to allow JavaScript to access and update their content.

2. **CSS Styling**: CSS is used to style the calendar. It defines the font sizes, colors, background colors, padding, and border-radius to make the calendar visually appealing.

3. **JavaScript Functionality**: JavaScript is used to dynamically update the content of the calendar elements with the current date information. It retrieves the current date, month name, day name, day number, and year using JavaScript's `Date` object and then updates the corresponding HTML elements.

## Code Structure

The JavaScript code that updates the calendar is placed at the bottom of the HTML file, just before the closing `</body>` tag. This code uses the `Date` object to fetch the current date information and then sets the text content of the HTML elements to display this information.

```html
<script>
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const today = new Date();
    const monthName = months[today.getMonth()];
    const dayName = daysOfWeek[today.getDay()];
    const dayNumber = today.getDate();
    const year = today.getFullYear();

    document.getElementById("month").textContent = monthName;
    document.getElementById("day").textContent = dayName;
    document.getElementById("date").textContent = dayNumber;
    document.getElementById("year").textContent = year;
</script>