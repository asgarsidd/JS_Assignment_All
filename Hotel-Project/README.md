# Hotel Search App

# Hotel Search by Reference

A web application that allows users to search for hotels based on destination and dates.

## Description

This project is a hotel search application that enables users to find hotels by specifying their destination and check-in/check-out dates. The application utilizes the RapidAPI service to fetch hotel data.

## Installation

1. Clone this repository to your local machine.

```shell
git clone https://github.com/asgarsidd/JS_Assignment_All/Hotel-Search-App.git


# Hosted Link:
https://asgarsidd.github.io/JS_Assignment_All/Hotel-Search-App

## Getting Started

To get started, clone the repository and install the dependencies.

```

cd Hotel-Search-App
npm install

```

## Running the App

To run the app, simply run the following command:

```

npm start

```

The app will then be available at http://localhost:3000.

## Code Overview

The code for the app is located in the `index.js` file. The file is divided into three main sections:

* The first section imports the necessary modules.
* The second section defines the main function of the app.
* The third section defines the event listeners for the app.



### Defining the Main Function

The second section of the code defines the main function of the app. The main function is responsible for rendering the app to the DOM. The main function takes two arguments:

* `props`
* `context`

The `props` argument contains the properties that are passed to the app. The `context` argument contains the context of the app.

The main function first creates a state object. The state object contains the following properties:

* `hotels`
* `loading`
* `error`

The `hotels` property contains the list of hotels that are displayed in the app. The `loading` property indicates whether or not the app is loading. The `error` property contains the error message that is displayed if an error occurs.

The main function then uses the `useState` hook to initialize the state object. The `useState` hook takes two arguments:

* The initial state of the object
* A function that is used to update the state of the object

The main function then uses the `useEffect` hook to fetch the list of hotels from the API. The `useEffect` hook takes two arguments:

* A function that is called when the component is mounted
* An array of dependencies

The function that is called when the component is mounted fetches
```
