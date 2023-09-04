# Timer with Start, Stop, and Reset Functionality

## Overview

This project implements a timer with start, stop, and reset functionality using HTML, CSS, and JavaScript. The timer is displayed on a web page with three buttons: Start, Stop, and Reset. The user can click the buttons to control the timer.

## How it Works

### HTML
- The HTML structure includes a timer container div, a timer display element with the `timer` id, and three buttons (Start, Stop, Reset) with corresponding ids and classes.

### CSS
- The CSS file (`styles.css`) styles the timer container, timer display, and buttons. It provides a clean and visually appealing interface with hover effects on the buttons.

### JavaScript (`script.js`)
- The JavaScript code manages the timer functionality.
- It initializes variables to keep track of start time, elapsed time, and the timer interval.
- The `startTimer` function is triggered when the user clicks the "Start" button. It calculates the elapsed time and updates the timer display every 10 milliseconds.
- The `formatTime` function formats the elapsed time into hours, minutes, seconds, and milliseconds.
- The `stopTimer` function stops the timer by clearing the interval and re-enables the "Start" button.
- The `resetTimer` function resets the timer by clearing the interval, setting the elapsed time to 0, and displaying "00:00:00.00". It also re-enables the "Start" button.

## How to Use

1. Open the `index.html` file in a web browser.
2. You will see the timer displayed at the top, along with the "Start," "Stop," and "Reset" buttons.
3. Click the "Start" button to begin the timer. It will start counting up.
4. Click the "Stop" button to pause the timer. You can click "Start" again to resume from where it left off.
5. Click the "Reset" button to reset the timer to 00:00:00.00.

Enjoy using the timer!

