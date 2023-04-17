# Web Fundamentals Course

This project is an interactive JavaScript website that demonstrates various concepts and functionalities taught in the QA Web Fundamentals course. The primary goal of this project is to help beginners understand how JavaScript can be used to add interactivity and dynamic content to a webpage.

#### You can view the live website here - https://theladeli.github.io/qa-course/

## Table of Contents
- [Web Fundamentals Course](#web-fundamentals-course)
  * [Tech Stack](#tech-stack)
  * [Contributing](#contributing)
    + [How to contribute](#how-to-contribute)
      - [Step 1: Fork the repository](#step-1--fork-the-repository)
      - [Step 2: Clone the forked repository](#step-2--clone-the-forked-repository)
      - [Step 3: Create a new branch](#step-3--create-a-new-branch)
      - [Step 4: Make changes and commit](#step-4--make-changes-and-commit)
      - [Step 5: Push your changes](#step-5--push-your-changes)
      - [Step 6: Create a pull request](#step-6--create-a-pull-request)
      - [Step 7: Address feedback (if necessary)](#step-7--address-feedback--if-necessary-)
  * [Project Overview](#project-overview)
    + [Forms & DOM](#forms---dom)
    + [Conditional Logic](#conditional-logic)
    + [Loops](#loops)
    + [Events](#events)
    + [API Requests](#api-requests)
  * [Getting Started](#getting-started)
  * [Contributing](#contributing-1)

## Tech Stack

- HTML5
- CSS3
- JavaScript (Vanilla)

## Contributing
Contributions are welcome! If you have suggestions for improvements or additional documentation, please feel free to submit a pull request or open an issue.

**Some things that could be improved**
 - Mobile optimization
 - Expanded documentation

You can also add to the above list if I missed anything.

### How to contribute

#### Step 1: Fork the repository
To start working on the project, first create your own fork of the repository by clicking the "Fork" button on the top right corner of the repository's main page. This will create a copy of the repository under your own GitHub account.

#### Step 2: Clone the forked repository
Now, clone the forked repository to your local machine using the following command:
```
git clone https://github.com/theLadEli/qa-course.git
```

#### Step 3: Create a new branch
It's a good practice to create a new branch for each new feature or bugfix. To create a new branch, navigate to the local repository and execute the following command:
```
git checkout -b your-new-branch-name
```
Replace `your-new-branch-name` with a descriptive name for your branch.

#### Step 4: Make changes and commit
Work on the project, make your changes, and then commit them. Make sure to write a clear and concise commit message describing your changes. To commit your changes, use the following commands:
```
git add .
git commit -m "Your commit message here"
```

#### Step 5: Push your changes
Push your changes to your fork on GitHub by executing the following command:
```
git push origin your-new-branch-name
```
Replace `your-new-branch-name` with the name of the branch you created earlier.

#### Step 6: Create a pull request
Once you've pushed your changes, navigate to the original repository on GitHub and click on the **Pull requests** tab. Then, click on the **New pull request** button.

Ensure that the **base** branch is the main branch of the original repository, and the **compare** branch is the one you've been working on. Finally, click on the **Create pull request** button, add a descriptive title and a detailed description of your changes, and submit the pull request.

#### Step 7: Address feedback (if necessary)
If there are any comments or feedback from the repository maintainers, address them and push the requested changes to your branch. This will automatically update the pull request.

Thanks for any contributions 😉

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

Did I miss anything? Scroll back up to the top of the page and feel free to contribute using the instructions provided. Thanks!
