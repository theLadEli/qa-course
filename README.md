# Web Fundamentals Course

This project is an interactive JavaScript website that demonstrates various concepts and functionalities taught in the QA Web Fundamentals course. The primary goal of this project is to help beginners understand how JavaScript can be used to add interactivity and dynamic content to a webpage.

Contributions are welcomed! If you have suggestions for improvements or additional documentation, please feel free to submit a pull request or open an issue.

## Table of Contents

- [Web Fundamentals Course](#web-fundamentals-course)
  - [Table of Contents](#table-of-contents)
  - [Tech Stack](#tech-stack)
  - [Project Overview](#project-overview)
    - [Forms \& DOM](#forms--dom)
    - [Conditional Logic](#conditional-logic)
    - [Loops](#loops)
    - [Events](#events)
    - [API Requests](#api-requests)
  - [Getting Started](#getting-started)
  - [Contributing](#contributing)

## Tech Stack

- HTML5
- CSS3
- JavaScript (Vanilla)

## Project Overview

The website is divided into several sections, each focusing on a specific JavaScript concept or functionality. Below is a brief description of each section and how the JavaScript code works.

### Forms & DOM

This section demonstrates how to use JavaScript to handle form submissions, prevent default form submission behavior, and manipulate the DOM to display the submitted form data in a toast notification.

The `formSubmission` function is called when the form is submitted. It prevents the default form submission behavior and sets the values of global variables (`yourName`, `yourEmail`, `yourSubject`, `yourMessage`) based on the form fields. It then updates the toast notification with the submitted form data and displays the toast notification on the screen.

The `closeToast` function is called when the user clicks the close button in the toast notification. It hides the toast notification by setting its display property to "none".

### Conditional Logic

This section shows how to use conditional statements in JavaScript. When a user submits a number through the form, the `conditionalForm` function is called. Depending on the value of the submitted number, either the "conditional-red" or "conditional-green" class is added or removed from the corresponding elements, demonstrating how JavaScript can be used to update the page based on user input.

### Loops

This section illustrates the use of loops in JavaScript. The `startWhileLoop` function is called when a user clicks the "Start Loop" button. It uses a `while` loop to update the content of the `while-loop-output` element with a count from 0 to 10, creating a visual effect by adding an artificial delay between iterations with `setTimeout`.

### Events

This section demonstrates how to use JavaScript event listeners to show or hide content based on user interactions. The `showButton` function is called when the "Show" button is clicked, setting the display property of the target element to "block". The `hideButton` function is called when the "Hide" button is clicked, setting the display property of the target element to "none".

### API Requests

This section showcases how to make API requests using JavaScript's `fetch` function. The `newDogImage` function is called on page load and when the "New Dog Image" button is clicked. It fetches a random dog image from the [Dog API](https://dog.ceo/dog-api/) and updates the `dog-image` element's `src` attribute with the fetched image URL.

## Getting Started

To get started with the project, clone the repository and open `index.html` in your favorite web browser. You can then explore the different sections and experiment with the JavaScript code to gain a deeper understanding of the concepts and functionalities demonstrated.

## Contributing

Contributions to improve the project or expand the documentation are encouraged! To contribute,
